let currentLang = 'ar';   // default arabic masry
let exploredCount = 0;
let masteredCount = 0;
let totalSectionsCount = 0;

// اقتباسات للودر
const loaderQuotes = [
    "بصمج وانت ساكت 🤫",
    "اقرأ اللي قدامك واسكت 📖",
    "ذاكر يا حبيبي الامتحان بكره خلاص 😭",
    "يارب تتجوز ياجدع بس ركز معايا 😂",
    "البرمجة كدا كدا حلوة يا معلم 🔥",
    "بصمجة ليلة الامتحان مش هزار 💪"
];

document.addEventListener("DOMContentLoaded", () => {
    // حساب total sections
    if (typeof bookData !== 'undefined') {
        totalSectionsCount = bookData.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
    }
    updateStatsUI();

    // quotes random للودر
    const quoteEl = document.getElementById("loaderQuote");
    if (quoteEl) {
        const randomIdx = Math.floor(Math.random() * loaderQuotes.length);
        quoteEl.innerText = loaderQuotes[randomIdx];
    }

    // simulate loading
    setTimeout(() => {
        const loader = document.getElementById("cramLoader");
        const main = document.getElementById("mainDashboard");
        if (loader && main) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                main.style.display = "block";
                renderEverything();
                initFloatingDots();
                // Re-highlight Prism after rendering
                if (typeof Prism !== 'undefined') {
                    Prism.highlightAll();
                }
            }, 600);
        }
    }, 1000);
});

function updateStatsUI() {
    document.getElementById('statMastered').innerText = masteredCount;
    document.getElementById('statViewed').innerText = exploredCount;
    let percent = exploredCount ? Math.round((masteredCount / exploredCount) * 100) : 0;
    document.getElementById('statPercent').innerText = `${percent}%`;
}

function markSectionAsExplored(sectionId) {
    if (!localStorage.getItem(`basmaga_explored_${sectionId}`)) {
        localStorage.setItem(`basmaga_explored_${sectionId}`, 'true');
        exploredCount++;
        masteredCount = Math.min(exploredCount, masteredCount + 1);
        updateStatsUI();
        updateAllProgressBars();
        return true;
    }
    return false;
}

function updateAllProgressBars() {
    let progressPercent = totalSectionsCount ? Math.min(100, Math.round((exploredCount / totalSectionsCount) * 100)) : 0;
    document.querySelectorAll('.progress-fill-custom').forEach(bar => {
        bar.style.width = `${progressPercent}%`;
    });
    document.querySelectorAll('.progress-text-custom').forEach(txt => {
        txt.innerText = `${exploredCount}/${totalSectionsCount} مستكشف`;
    });
}

function renderEverything() {
    const container = document.getElementById('chaptersRender');
    const tabsContainer = document.getElementById('chapterTabs');
    if (!container) return;
    container.innerHTML = '';
    tabsContainer.innerHTML = '';

    if (typeof bookData === 'undefined') {
        container.innerHTML = '<div class="error">بيانات مش موجودة يا معلم</div>';
        return;
    }

    // load stored stats from localStorage
    const storedKeys = Object.keys(localStorage).filter(k => k.startsWith('basmaga_explored_'));
    if (storedKeys.length > 0) {
        exploredCount = storedKeys.length;
        masteredCount = exploredCount;
        updateStatsUI();
    }

    bookData.chapters.forEach((chapter, idx) => {
        const chapDiv = document.createElement('div');
        chapDiv.className = 'chapter-container';
        chapDiv.id = `chapterContainer_${chapter.id}`;
        chapDiv.style.display = idx === 0 ? 'block' : 'none';

        // progress inside each chapter (unified)
        const progressPercent = totalSectionsCount ? Math.min(100, Math.round((exploredCount / totalSectionsCount) * 100)) : 0;
        chapDiv.innerHTML = `
            <div class="chapter-header">
                <h2><i class="fas fa-layer-group"></i> الفصل ${chapter.id}: ${chapter.title}</h2>
                <div class="progress-custom">
                    <div class="progress-text-custom" style="font-size:0.75rem">${exploredCount}/${totalSectionsCount} مستكشف</div>
                    <div class="progress-bar-bg"><div class="progress-fill-custom" style="width:${progressPercent}%"></div></div>
                </div>
            </div>
            <div class="sections-grid" id="sectionsGrid_${chapter.id}"></div>
        `;
        container.appendChild(chapDiv);

        const sectionsGrid = document.getElementById(`sectionsGrid_${chapter.id}`);
        chapter.sections.forEach(section => {
            const card = document.createElement('div');
            card.className = 'section-card';
            card.setAttribute('data-section-id', section.id);

            const expEn = section.content.explanation_en;
            const expAr = section.content.explanation_ar;
            const keyPoints = section.key_points;
            const codeExamples = section.code_examples;
            const examTips = section.exam_tips;

            // Build code blocks with proper LTR structure
            let codeBlocksHtml = '';
            codeExamples.forEach(ex => {
                const escapedCode = escapeHtmlSpecial(ex.code);
                codeBlocksHtml += `
                    <div class="code-block">
                        <div class="code-header">
                            <i class="fas fa-terminal"></i> ${ex.language}
                        </div>
                        <div class="code-content" dir="ltr">
                            <pre><code class="language-csharp">${escapedCode}</code></pre>
                        </div>
                        <div class="code-explanation">
                            <i class="fas fa-comment-dots"></i>
                            <span>${currentLang === 'ar' ? ex.explanation.ar : ex.explanation.en}</span>
                        </div>
                    </div>
                `;
            });

            card.innerHTML = `
                <div class="section-title"><i class="fas fa-code"></i> ${section.title}</div>
                <div class="lang-switch">
                    <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" data-lang="ar">🇪🇬 مصري عامي</button>
                    <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">🇬🇧 English</button>
                </div>
                <div class="content-panel">
                    <div class="explanation-text" id="exp_${section.id}">${currentLang === 'ar' ? expAr : expEn}</div>
                    <div class="key-points">
                        <h4><i class="fas fa-lightbulb"></i> ${currentLang === 'ar' ? 'نقط مهمة جداً' : 'Key Points'}</h4>
                        <ul>${keyPoints.map(kp => `<li>${currentLang === 'ar' ? kp.ar : kp.en}</li>`).join('')}</ul>
                    </div>
                    ${codeBlocksHtml}
                    <div class="exam-tip">
                        <h4><i class="fas fa-graduation-cap"></i> ${currentLang === 'ar' ? '📌 نصيحة الامتحان' : '📝 Exam Tip'}</h4>
                        <p>${currentLang === 'ar' ? examTips.ar : examTips.en}</p>
                    </div>
                </div>
            `;

            // language switching
            const langBtns = card.querySelectorAll('.lang-btn');
            langBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const newLang = btn.getAttribute('data-lang');
                    currentLang = newLang;
                    card.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // update explanation
                    const expDiv = card.querySelector(`#exp_${section.id}`);
                    expDiv.innerText = currentLang === 'ar' ? expAr : expEn;
                    
                    // update keypoints
                    const keyList = card.querySelector('.key-points ul');
                    keyList.innerHTML = keyPoints.map(kp => `<li>${currentLang === 'ar' ? kp.ar : kp.en}</li>`).join('');
                    
                    // update code explanations
                    const codeBlocksDivs = card.querySelectorAll('.code-block');
                    codeExamples.forEach((ex, idx) => {
                        const explanationSpan = codeBlocksDivs[idx]?.querySelector('.code-explanation span');
                        if(explanationSpan) {
                            explanationSpan.innerText = currentLang === 'ar' ? ex.explanation.ar : ex.explanation.en;
                        }
                    });
                    
                    const tipP = card.querySelector('.exam-tip p');
                    tipP.innerText = currentLang === 'ar' ? examTips.ar : examTips.en;
                    
                    // re-highlight code (maintains styling)
                    if (typeof Prism !== 'undefined') {
                        Prism.highlightAll();
                    }
                });
            });

            // mark as explored on click except lang buttons
            card.addEventListener('click', (e) => {
                if(e.target.closest('.lang-btn')) return;
                if(!localStorage.getItem(`basmaga_explored_${section.id}`)) {
                    markSectionAsExplored(section.id);
                    const progressFill = document.querySelector(`#chapterContainer_${chapter.id} .progress-fill-custom`);
                    if(progressFill) {
                        const newPercent = totalSectionsCount ? Math.min(100, Math.round((exploredCount / totalSectionsCount) * 100)) : 0;
                        progressFill.style.width = `${newPercent}%`;
                    }
                    const progressTextSpan = document.querySelector(`#chapterContainer_${chapter.id} .progress-text-custom`);
                    if(progressTextSpan) progressTextSpan.innerText = `${exploredCount}/${totalSectionsCount} مستكشف`;
                }
            });

            sectionsGrid.appendChild(card);
        });

        // create tab button
        const tabBtn = document.createElement('button');
        tabBtn.className = `tab-btn ${idx === 0 ? 'active' : ''}`;
        tabBtn.setAttribute('data-chapter', chapter.id);
        tabBtn.innerHTML = `<i class="fas fa-book"></i><span>الفصل ${chapter.id}</span><small> ${chapter.title.split(' ')[0]}</small>`;
        tabBtn.addEventListener('click', () => {
            document.querySelectorAll('.chapter-container').forEach(c => c.style.display = 'none');
            document.getElementById(`chapterContainer_${chapter.id}`).style.display = 'block';
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        tabsContainer.appendChild(tabBtn);
    });
    updateAllProgressBars();
    
    // initial highlight
    if (typeof Prism !== 'undefined') {
        setTimeout(() => Prism.highlightAll(), 100);
    }
}

function escapeHtmlSpecial(str) {
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

function initFloatingDots() {
    const container = document.getElementById('dotsContainer');
    if(!container) return;
    for(let i=0;i<35;i++) {
        const dot = document.createElement('div');
        const size = 5 + Math.random() * 25;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDuration = 6 + Math.random() * 15 + 's';
        dot.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(dot);
    }
}