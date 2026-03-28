const bookData = {
  book_title: "Object-Oriented Programming with C#",
  instructor: "Dr. Mohamed Handosa",
  totalChapters: 13,
  chapters: [
    {
      id: 1,
      title: "Classes and Objects",
      intro: {
        en: "The foundation of Object-Oriented Programming - understanding classes as blueprints and objects as instances.",
        ar: "أساس البرمجة الكائنية - فهم الكلاسات كبلانبرينت والأوبجكتس كنسخ حقيقية."
      },
      sections: [
        {
          id: "1.1",
          title: "Basic Concepts",
          content: {
            explanation_en: "The main difference between Object-Oriented Programming (OOP) and structured programming is that structured programming represents a program using a set of modules or functions, while OOP represents a program using a set of objects and their interactions. OOP allows the programmer to represent real-world scenarios using objects. An object is any entity that has a state and a behavior. The state of an object is the set of attributes that represent the characteristics of that object. For example, a television has size, color, model, etc. The behavior of an object is the set of operations that the object can perform. For example, a television can show picture, change channels, tune for a channel, etc. In OOP, objects can interact to achieve the program goals. In real life, almost any object has a state and a behavior. The state of an object is defined by the values of its attributes, while the behavior is defined by the operations it can perform. A class is represented by a set of attributes and operations. For example, the attributes of a car include brand and color, while its operations include drive and brake. When objects are created (or instantiated) from a class, each object will have all the attributes and operations of that class. However, each object will have its own state (i.e. attribute values). For example, we can create three objects from the Car class. Each Car object will have a brand attribute. However, the value of that attribute can differ from one Car object to another (e.g., Audi, Nissan, Volvo). In C#, attributes are represented using variables (called fields), while operations are represented using methods.",
            explanation_ar: "بص يا معلم، الفرق الأساسي بين البرمجة الكائنية والبرمجة التقليدية إن التقليدية بتقسم البرنامج لمجموعة دوال، أما الكائنية فبتقسم البرنامج لمجموعة أوبجكتس (كائنات) بيتفاعلوا مع بعض. البرمجة الكائنية بتسمح للمبرمج إنه يمثل الحاجات من الواقع الحقيقي باستخدام الأوبجكتس. الأوبجكت هو أي حاجة ليه حالة وسلوك. الحالة هي صفاته زي لون التليفزيون وحجمه، والسلوك هو الحاجات اللي يقدر يعملها زي تغيير القنوات. الكلاس هو القالب أو المخطط اللي بنستخدمه عشان نصنع الأوبجكتس. الكلاس بيمثل مجموعة صفات (attributes) وعمليات (operations). لما نعمل أوبجكت من الكلاس، الأوبجكت ده بياخد كل الصفات والعمليات بتاعة الكلاس، لكن كل أوبجكت ليه القيم بتاعته الخاصة. مثلاً لو عندنا كلاس Car، نقدر نعمل منه كذا أوبجكت، كل واحد ليه brand مختلف. في C#، الصفات بتتخزن في fields والعمليات في methods."
          },
          key_points: [
            { en: "Class = blueprint, Object = instance", ar: "الكلاس = blueprint، الأوبجكت = النسخة المنفذة" },
            { en: "Objects have state (fields) and behavior (methods)", ar: "الأوبجكت ليه حالة (fields) وسلوك (methods)" },
            { en: "OOP represents real-world entities", ar: "OOP بتمثل كيانات من الواقع الحقيقي" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Car {\n    public string brand;  // field (state)\n    public string color;   // field (state)\n    \n    public void Drive() {  // method (behavior)\n        Console.WriteLine(\"Driving...\");\n    }\n}\n\n// Creating objects\nCar car1 = new Car();\ncar1.brand = \"Audi\";\ncar1.color = \"Black\";\ncar1.Drive();",
              explanation: { en: "Car class with fields and method", ar: "كلاس Car بالحقول والميثود" }
            }
          ],
          exam_tips: { en: "Remember: Class defines structure, Object is actual data in memory", ar: "ركز: الكلاس بيحدد الهيكل، الأوبجكت هو البيانات الفعلية في الذاكرة" }
        },
        {
          id: "1.2",
          title: "Creating Classes and Objects",
          content: {
            explanation_en: "To create a class, use the class keyword. It is a good practice to start with an uppercase first letter when naming classes. In addition, it is common for the name of the C# file and the class to match, as it organizes our code. An object is created from a class using the new keyword. You can create multiple objects of one class. To create an object, specify the class name, followed by the object name, and use the keyword new. The new keyword allocates memory for the object on the heap and returns a reference to that memory location.",
            explanation_ar: "عشان تعمل كلاس، استخدم الكلمة class. من الأحسن تبدأ اسم الكلاس بحرف كبير، ويفضل إن اسم الملف يبقى نفس اسم الكلاس عشان التنظيم. الأوبجكت بيتعمل من الكلاس باستخدام الكلمة new. تقدر تعمل أكتر من أوبجكت من نفس الكلاس. الصيغة: اسم_الكلاس اسم_الأوبجكت = new اسم_الكلاس(). الكلمة new بتخصص مساحة في الذاكرة (الهيب) وترجع عنوان المكان ده."
          },
          key_points: [
            { en: "class keyword for class definition", ar: "كلمة class لتعريف الكلاس" },
            { en: "new keyword creates objects", ar: "كلمة new لإنشاء الأوبجكتس" },
            { en: "Class names start with capital letter", ar: "أسماء الكلاسات تبدأ بحرف كبير" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "// Class definition\nclass Player {\n    public string name;\n}\n\n// Creating objects\nPlayer player1 = new Player();\nPlayer player2 = new Player();\nplayer1.name = \"Salah\";\nplayer2.name = \"Marmoush\";",
              explanation: { en: "Creating multiple objects", ar: "إنشاء أكتر من أوبجكت" }
            }
          ],
          exam_tips: { en: "new operator returns a reference, not the object itself", ar: "العامل new بيرجع reference مش الأوبجكت نفسه" }
        },
        {
          id: "1.3",
          title: "Reference-Type Variables",
          content: {
            explanation_en: "There are two types of variables: value-type and reference-type variables. A value-type variable stores a value in its memory location while a reference-type variable stores a reference in its memory location. For example: int x = 5 stores the value 5 directly. Car c = new Car() stores the address of the Car object in the heap. Value types include int, float, double, bool, char, and structs. Reference types include classes, arrays, interfaces, delegates, and strings.",
            explanation_ar: "في نوعين من المتغيرات: value-type و reference-type. value-type بيخزن القيمة نفسها في مكانه في الذاكرة. reference-type بيخزن عنوان (reference) للمكان اللي فيه البيانات الحقيقية. مثال: int x = 5 بيخزن الرقم 5 مباشرة. Car c = new Car() بيخزن عنوان الأوبجكت اللي في الهيب. الأنواع القيمية: int, float, double, bool, char, struct. الأنواع المرجعية: classes, arrays, interfaces, delegates, string."
          },
          key_points: [
            { en: "Value types store actual data", ar: "Value types بتخزن البيانات الفعلية" },
            { en: "Reference types store memory addresses", ar: "Reference types بتخزن عناوين الذاكرة" },
            { en: "int, float, bool are value types", ar: "int, float, bool أنواع قيمية" },
            { en: "class, array, string are reference types", ar: "class, array, string أنواع مرجعية" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "static void Main() {\n    int x = 5;           // Value type - stores 5 directly\n    double y = 7.2;      // Value type - stores 7.2 directly\n    int[] a = new int[10]; // Reference type - stores address\n    Car c = new Car();   // Reference type - stores address\n}",
              explanation: { en: "Value vs Reference types", ar: "الفرق بين value و reference" }
            }
          ],
          exam_tips: { en: "string is a reference type, even though it behaves like value type in some ways", ar: "string نوع مرجعي، مع إنه بيتصرف أحيانًا زي القيمي" }
        },
        {
          id: "1.4",
          title: "Memory Layout",
          content: {
            explanation_en: "Before a program can start execution, the operating system must first load it into memory. A program in execution is called a process. The layout of a process in memory consists of four sections: Text section (stores instructions), Data section (stores global variables), Stack (stores local variables), and Heap (stores dynamically allocated data like arrays and objects). Value types live on stack, reference types live on heap. The variables themselves (the references) are stored on stack, but the objects they point to are stored on heap. The stack is managed automatically (LIFO - Last In First Out), while the heap is managed by the garbage collector.",
            explanation_ar: "قبل ما البرنامج يشتغل، نظام التشغيل لازم يحمله في الذاكرة. البرنامج اللي شغال اسمه process. الذاكرة بتتقسّم لأربع أقسام: Text (التعليمات), Data (المتغيرات العامة), Stack (المتغيرات المحلية), Heap (البيانات الديناميكية زي الarrays والأوبجكتس). الأنواع القيمية بتتخزن في الstack. الأنواع المرجعية: الreference نفسه في الstack، والبيانات الحقيقية في الheap. الstack بيتدار بشكل تلقائي (آخر داخل أول خارج)، أما الheap فبيتدار بواسطة garbage collector."
          },
          key_points: [
            { en: "Stack stores local variables", ar: "Stack بيخزن المتغيرات المحلية" },
            { en: "Heap stores objects and arrays", ar: "Heap بيخزن الأوبجكتس والأرييات" },
            { en: "Stack is automatic, Heap needs garbage collection", ar: "Stack تلقائي، Heap محتاج garbage collector" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "static void Main() {\n    int x = 5;           // x in stack\n    double y = 7.2;      // y in stack\n    int[] a = new int[10]; // a in stack, array in heap\n    Car c = new Car();   // c in stack, Car object in heap\n}",
              explanation: { en: "Stack vs Heap allocation", ar: "التخزين في Stack vs Heap" }
            }
          ],
          exam_tips: { en: "Local variables go out of scope automatically, objects remain until garbage collected", ar: "المتغيرات المحلية بتتلغى تلقائيًا، الأوبجكتس بتفضل لحد ما garbage collector يشيلها" }
        },
        {
          id: "1.5",
          title: "Reference Variables and Assignment",
          content: {
            explanation_en: "In an assignment statement, the assignment operator = stores the value of the right-hand side into the variable on the left-hand side. For value types, this copies the actual value. For reference types, this copies the reference (memory address), making both variables point to the same object in the heap. This means that if you modify the object through one reference, the change is visible through the other reference as well. This behavior is crucial to understand when working with objects in C#.",
            explanation_ar: "في عملية الإسناد (assignment)، العامل = بيخزن قيمة الطرف الأيمن في المتغير اللي على الشمال. مع الأنواع القيمية، ده بيعمل نسخة من القيمة الفعلية. مع الأنواع المرجعية، ده بينسخ الreference (العنوان)، فالمتغيرين بيشاوروا على نفس الأوبجكت في الهيب. يعني لو عدلت الأوبجكت من خلال reference واحد، التغيير هيتشاف من خلال الreference التاني. النقطة دي مهمة جدًا في التعامل مع الأوبجكتس."
          },
          key_points: [
            { en: "Value types: assignment copies data", ar: "الأنواع القيمية: الإسناد بينسخ البيانات" },
            { en: "Reference types: assignment copies reference", ar: "الأنواع المرجعية: الإسناد بينسخ الreference" },
            { en: "Changes through one reference affect all", ar: "التعديل من خلال reference واحد بيأثر على الكل" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "static void Main() {\n    int x = 5;\n    int y = x;  // Copies value - y becomes 5\n    y = 10;     // x remains 5\n    \n    Car c1 = new Car();\n    Car c2 = c1;  // Copies reference - both point to same object\n    c1.color = \"Red\";\n    Console.WriteLine(c2.color);  // Output: Red\n}",
              explanation: { en: "Value vs Reference assignment", ar: "الإسناد في القيمي مقابل المرجعي" }
            }
          ],
          exam_tips: { en: "With reference types, multiple variables can refer to the same object", ar: "مع الأنواع المرجعية، أكتر من متغير ممكن يشير لنفس الأوبجكت" }
        }
      ],
      summary: {
        en: "Classes are blueprints that define the structure and behavior of objects. Objects are instances of classes created with the 'new' keyword. C# distinguishes between value types (stored on stack) and reference types (stored on heap). Understanding memory layout is crucial for effective C# programming.",
        ar: "الكلاسات هي بلانبرينت بتحدد هيكل وسلوك الأوبجكتس. الأوبجكتس هي نسخ من الكلاسات بتتخلق بكلمة 'new'. C# بيفرق بين الأنواع القيمية (بتتخزن في الstack) والأنواع المرجعية (بتتخزن في الheap). فهم توزيع الذاكرة مهم جدًا للبرمجة بكفاءة في C#."
      }
    },
    {
      id: 2,
      title: "Class Members",
      intro: {
        en: "Understanding fields, methods, static members, and access modifiers.",
        ar: "فهم الحقول، الميثودز، الأعضاء الثابتة ومحددات الوصول."
      },
      sections: [
        {
          id: "2.1",
          title: "Fields",
          content: {
            explanation_en: "Variables inside a class are called fields, and you can access them by creating an object of the class, and by using the dot syntax (.). Each object has its own copy of instance fields. The values of the fields of a given object represent its state. Fields can be of any data type, including primitive types, other classes, or structs. Fields are typically declared at the beginning of the class, before methods. Fields can have initial values assigned directly at declaration.",
            explanation_ar: "المتغيرات جوه الكلاس بتتسمى fields، وتقدر توصلها عن طريق إنشاء أوبجكت من الكلاس واستخدام النقطة (.). كل أوبجكت ليه نسخته الخاصة من الfields بتاعته. قيم fields الأوبجكت بتمثل حالته. الfields تقدر تكون من أي نوع بيانات، بما في ذلك الأنواع البدائية أو كلاسات تانية أو structs. الfields بتتكتب في بداية الكلاس قبل الميثودز. تقدي تديلها قيم أولية من أول ما تعرفها."
          },
          key_points: [
            { en: "Fields store object state", ar: "Fields بتخزن حالة الأوبجكت" },
            { en: "Each object has its own field values", ar: "كل أوبجكت ليه قيم fields بتاعته" },
            { en: "Access fields using dot notation", ar: "الوصول للfields باستخدام النقطة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Player {\n    public string name;     // field\n    public int score;       // field\n    public bool isActive;   // field\n}\n\nstatic void Main() {\n    Player p1 = new Player();\n    Player p2 = new Player();\n    p1.name = \"Salah\";\n    p2.name = \"Marmoush\";\n    Console.WriteLine(p1.name);  // Output: Salah\n}",
              explanation: { en: "Fields in a Player class", ar: "Fields في كلاس Player" }
            }
          ],
          exam_tips: { en: "Fields without explicit initialization get default values (0 for numbers, false for bool, null for references)", ar: "الfields اللي مبتديهاش قيمة بتاخد قيم افتراضية (0 للأرقام، false للbool، null للمراجع)" }
        },
        {
          id: "2.2",
          title: "Methods",
          content: {
            explanation_en: "Object methods define how an object of a class behaves. Just like with fields, you can access methods with the dot syntax. Methods can access the fields of the same object directly. Methods can have parameters and return values. The method signature consists of the method name, return type, and parameter list (order and types of parameters). Methods can be overloaded, meaning multiple methods with the same name but different parameter lists.",
            explanation_ar: "ميثودز الأوبجكت بتحدد إزاي الأوبجكت بيتصرف. زي الfields، تقدر توصل للميثودز بالنقطة. الميثودز تقدر توصل للfields بتاعة نفس الأوبجكت مباشرة. الميثودز ممكن يكون ليها باراميترز وترجع قيم. توقيع الميثود (signature) بيتكون من اسم الميثود، نوع القيمة اللي بترجعها، وقائمة الباراميترز (ترتيبهم وأنواعهم). الميثودز تقبل overloading، يعني أكتر من ميثود بنفس الاسم بس باراميترز مختلفة."
          },
          key_points: [
            { en: "Methods define behavior", ar: "الميثودز بتحدد السلوك" },
            { en: "Methods can access fields of the same object", ar: "الميثودز تقدر توصل للfields بتاعة نفس الأوبجكت" },
            { en: "Method overloading allows multiple methods with same name", ar: "Method overloading بيسمح بأكتر من ميثود بنفس الاسم" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Calculator {\n    public int Add(int a, int b) {\n        return a + b;\n    }\n    public int Add(int a, int b, int c) {  // Overloaded\n        return a + b + c;\n    }\n    public double Add(double a, double b) { // Overloaded\n        return a + b;\n    }\n}\n\nstatic void Main() {\n    Calculator calc = new Calculator();\n    Console.WriteLine(calc.Add(5, 3));      // 8\n    Console.WriteLine(calc.Add(5, 3, 2));   // 10\n    Console.WriteLine(calc.Add(5.5, 3.2));  // 8.7\n}",
              explanation: { en: "Method overloading example", ar: "مثال على method overloading" }
            }
          ],
          exam_tips: { en: "Method overloading is determined by parameter types and count, not return type", ar: "Method overloading بيتحدد بأنواع وعدد الباراميترز مش بنوع القيمة الراجعة" }
        },
        {
          id: "2.3",
          title: "Static Methods",
          content: {
            explanation_en: "A static method belongs to the class rather than an object created from that class. A static member can be declared using the keyword static. Calling a static method does not require creating an object. A static method is called directly by using the class name itself. Static methods cannot access instance fields directly because they don't have a 'this' reference. They can only access other static members. Static methods are commonly used for utility functions that don't depend on object state.",
            explanation_ar: "الميثود الstatic تابعة للكلاس نفسه مش للأوبجكت اللي بيتعمل منه. العضو الstatic بيتعرف باستخدام الكلمة static. منادي الميثود الstatic مش محتاج تعمل أوبجكت. الميثود الstatic بتتنادى مباشرة باسم الكلاس. الميثودز الstatic مينفعش توصل للfields العادية مباشرة لأنها معندهاش reference للكائن (this). بتقدر توصل بس للأعضاء الstatic التانية. الميثودز الstatic بتستخدم كتير للدوال المساعدة اللي مش محتاجة حالة الأوبجكت."
          },
          key_points: [
            { en: "Static members belong to class, not instances", ar: "الأعضاء static تابعة للكلاس مش للأوبجكتس" },
            { en: "Call using ClassName.MethodName()", ar: "بنادي باسم_الكلاس.اسم_الميثود()" },
            { en: "Cannot access instance members directly", ar: "مينفعش توصل للأعضاء العادية مباشرة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class MathUtils {\n    public static int Add(int a, int b) {\n        return a + b;\n    }\n    public static double PI = 3.14159;\n}\n\nstatic void Main() {\n    // No need to create MathUtils object\n    int sum = MathUtils.Add(5, 3);\n    double pi = MathUtils.PI;\n    Console.WriteLine(sum);  // 8\n}",
              explanation: { en: "Static methods and fields", ar: "ميثودز وفيلدز static" }
            }
          ],
          exam_tips: { en: "Static methods are loaded once when the class is first accessed", ar: "الميثودز static بتتحمل مرة واحدة أول مرة يتم استخدام الكلاس" }
        },
        {
          id: "2.4",
          title: "Static Fields",
          content: {
            explanation_en: "A static field belongs to the class rather than an object created from that class. Static fields serve as global variables that are always in memory (in the data section) while the program is running and can be accessed from anywhere in the code at any time. Only one copy of a static field exists, regardless of how many instances of the class are created. Static fields are initialized before any static methods are called or any instances are created. They can be used to count how many objects have been created from a class.",
            explanation_ar: "الفيلد الstatic تابعة للكلاس نفسه مش للأوبجكت اللي بيتعمل منه. الفيلدز الstatic بتشتغل زي متغيرات عامة (global variables) طول الوقت في الذاكرة (في الdata section) طول ما البرنامج شغال، وتقدر تتوصل لها من أي حتة في الكود. فيه نسخة واحدة بس من الفيلد الstatic، بغض النظر عن قد إيه عملت أوبجكتس من الكلاس. الفيلدز الstatic بتتinitialize قبل أي ميثود static تتنادى أو أي أوبجكت يتعمل. بتستخدم عشان تعد كام أوبجكت اتعمل من الكلاس."
          },
          key_points: [
            { en: "Single copy shared by all instances", ar: "نسخة واحدة بتشارك بين كل الأوبجكتس" },
            { en: "Initialized before first use", ar: "بتتinitialize قبل أول استخدام" },
            { en: "Useful for counters or global settings", ar: "مفيدة للعدادات أو الإعدادات العامة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Counter {\n    public static int count = 0;\n    \n    public Counter() {\n        count++;  // Increment when object created\n    }\n}\n\nstatic void Main() {\n    Counter c1 = new Counter();\n    Counter c2 = new Counter();\n    Counter c3 = new Counter();\n    Console.WriteLine(Counter.count);  // Output: 3\n}",
              explanation: { en: "Static field as object counter", ar: "Static field كعداد للأوبجكتس" }
            }
          ],
          exam_tips: { en: "Static fields are stored in the data section, not the heap", ar: "الفيلدز static بتتخزن في الdata section مش في الهيب" }
        },
        {
          id: "2.5",
          title: "Static Classes",
          content: {
            explanation_en: "A static class cannot be instantiated (i.e. cannot have objects). A static class contains only static members, which can be accessed by using the class name itself. A static class can be used as a convenient container for a set of methods. For example, in the .NET Class Library, the static System.Math class contains methods that perform mathematical operations, without any requirement to create an object of the Math class. Static classes are sealed by default, meaning they cannot be inherited from. They can only contain static members and cannot have instance constructors.",
            explanation_ar: "الكلاس الstatic مينفعش يتعمل منه أوبجكت (يعني مينفعش instantiate). الكلاس الstatic بيحتوي بس على أعضاء static، واللي بتتوصّل لها باستخدام اسم الكلاس نفسه. الكلاس الstatic ممكن يتستخدم كحاوية مناسبة لمجموعة ميثودز. مثلاً في مكتبة .NET، الكلاس System.Math الstatic فيه ميثودز بتعمل عمليات رياضية، من غير ما تحتاج تعمل أوبجكت من الكلاس Math. الكلاسات الstatic بطبيعتها sealed، يعني مينفعش حد يرث منها. بتقدر تحتوي بس على أعضاء static ومينفعش يبقى ليها instance constructors."
          },
          key_points: [
            { en: "Cannot be instantiated", ar: "مينفعش تعمل منه أوبجكت" },
            { en: "Only static members allowed", ar: "بيحتوي بس على أعضاء static" },
            { en: "Cannot be inherited", ar: "مينفعش يرث منه" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "static class TemperatureConverter {\n    public static double ToCelsius(double fahrenheit) {\n        return (fahrenheit - 32) * 5 / 9;\n    }\n    public static double ToFahrenheit(double celsius) {\n        return (celsius * 9 / 5) + 32;\n    }\n}\n\nstatic void Main() {\n    double celsius = TemperatureConverter.ToCelsius(212);\n    Console.WriteLine(celsius);  // 100\n}",
              explanation: { en: "Static class for temperature conversion", ar: "كلاس static لتحويل الحرارة" }
            }
          ],
          exam_tips: { en: "Static classes are loaded when the program starts and remain in memory", ar: "الكلاسات static بتتحمل أول ما البرنامج يبدأ وتفضل في الذاكرة" }
        },
        {
          id: "2.6",
          title: "Access Modifiers",
          content: {
            explanation_en: "Access modifiers control visibility: public (everywhere), private (same class only), protected (class and derived classes), internal (same assembly). The public keyword is an access modifier that sets the access level or visibility of a class member. A public class member is accessible to all classes. A private class member is accessible only to its class. All members of a class are private by default if no access modifier is specified. A class can provide public methods to allow for indirect access to its private members, enabling encapsulation (data-hiding). Encapsulation allows for protecting data fields from having invalid values.",
            explanation_ar: "محددات الوصول (access modifiers) بتتحكم في الرؤية: public (أي حتة), private (نفس الكلاس بس), protected (الكلاس والكلاسات الورثة), internal (نفس المشروع). الكلمة public هي access modifier بتحدد مستوى الوصول للعضو. العضو public متاح لكل الكلاسات. العضو private متاح بس في نفس الكلاس. كل أعضاء الكلاس بتكون private بشكل افتراضي لو محددتش access modifier. الكلاس يقدر يقدم ميثودز public عشان توصل بشكل غير مباشر للأعضاء private، ودي حاجة اسمها encapsulation (إخفاء البيانات). Encapsulation بتسمح بحماية الحقول من القيم الغلط."
          },
          key_points: [
            { en: "public: accessible everywhere", ar: "public: متاح في كل حتة" },
            { en: "private: accessible only in same class", ar: "private: متاح بس في نفس الكلاس" },
            { en: "protected: accessible in class and derived classes", ar: "protected: متاح في الكلاس والكلاسات الورثة" },
            { en: "internal: accessible in same assembly", ar: "internal: متاح في نفس المشروع" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    private float price;  // Private field\n    \n    public void SetPrice(float priceValue) {\n        if (priceValue >= 0)\n            price = priceValue;  // Validation\n        else\n            Console.WriteLine(\"Invalid price\");\n    }\n    \n    public float GetPrice() {\n        return price;\n    }\n}\n\nstatic void Main() {\n    Product p = new Product();\n    p.SetPrice(20);        // OK\n    // p.price = 20;       // Error: private\n    Console.WriteLine(p.GetPrice());  // 20\n}",
              explanation: { en: "Encapsulation with private field and public methods", ar: "Encapsulation باستخدام field private وميثودز public" }
            }
          ],
          exam_tips: { en: "Default access for class members is private, for classes is internal", ar: "الافتراضي للأعضاء private، وللكلاسات internal" }
        }
      ],
      summary: {
        en: "Class members include fields for data storage and methods for behavior. Static members belong to the class itself and are shared across all instances. Access modifiers control visibility and enable encapsulation, protecting internal data from invalid modifications.",
        ar: "أعضاء الكلاس بيشملوا fields لتخزين البيانات وmethods للسلوك. الأعضاء static تابعة للكلاس نفسه وبتتشارك بين كل الأوبجكتس. محددات الوصول بتتحكم في الرؤية وبتدعم encapsulation، وبتحمي البيانات الداخلية من التعديلات الخاطئة."
      }
    },
    {
      id: 3,
      title: "Constructors and Destructors",
      intro: {
        en: "Special methods for object initialization and cleanup.",
        ar: "ميثودز خاصة لتهيئة وتنظيف الكائنات."
      },
      sections: [
        {
          id: "3.1",
          title: "Constructor Basics",
          content: {
            explanation_en: "Constructors initialize objects when created. They have the same name as the class and no return type (not even void). The constructor is called when the object is created using the new keyword. All classes have constructors by default. If you do not create a class constructor yourself, C# creates a default parameterless constructor for you. The default constructor initializes fields to their default values (0 for numbers, false for bool, null for reference types). Constructors can be used to set initial state, allocate resources, or perform any setup needed for the object to function properly.",
            explanation_ar: "الconstructors بتشتغل لحظة إنشاء الكائن. اسمهم نفس اسم الكلاس وملهومش return type (ولا حتى void). الconstructor بيتنادى لما الأوبجكت بيتعمل بكلمة new. كل الكلاسات ليها constructors بشكل افتراضي. لو مكتتبش constructor بنفسك، C# بتديك واحد افتراضي من غير باراميترز. الconstructor الافتراضي بيديل الحقول قيمها الافتراضية (0 للأرقام، false للbool، null للمراجع). الconstructors ممكن تستخدم عشان تحدد الحالة الأولية، تخصص موارد، أو تعمل أي إعدادات محتاجة عشان الأوبجكت يشتغل صح."
          },
          key_points: [
            { en: "Same name as class, no return type", ar: "نفس اسم الكلاس، ملهوش return type" },
            { en: "Called automatically with new", ar: "بيتسمى تلقائيًا مع new" },
            { en: "Default constructor provided if none defined", ar: "constructor افتراضي لو محددتش" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    public string name;\n    public float price;\n    \n    // Constructor\n    public Product() {\n        name = \"Milk\";\n        price = 10;\n        Console.WriteLine(\"Product created\");\n    }\n}\n\nstatic void Main() {\n    Product p = new Product();  // Constructor called\n    Console.WriteLine(p.name);   // Milk\n    Console.WriteLine(p.price);  // 10\n}",
              explanation: { en: "Constructor initialization", ar: "تهيئة باستخدام constructor" }
            }
          ],
          exam_tips: { en: "If you define any constructor, the default parameterless constructor is no longer provided", ar: "لو عرفت أي constructor، الconstructor الافتراضي مش هيتقدم تاني" }
        },
        {
          id: "3.2",
          title: "Constructor Parameters",
          content: {
            explanation_en: "Constructors can also take parameters, which are used to initialize fields with specific values. When we call the constructor, we pass parameters to it. This allows creating objects with custom initial state. Parameterized constructors are useful when objects need to have specific values upon creation and cannot rely on default values. You can have multiple constructors with different parameter lists (overloading).",
            explanation_ar: "الconstructors ممكن ياخدوا باراميترز، والباراميترز دي بتستخدم لتهيئة الحقول بقيم محددة. لما ننادي الconstructor، بنبعتله باراميترز. ده بيسمح بإنشاء أوبجكتس بحالة أولية مخصصة. الconstructors اللي ليها باراميترز مفيدة لما الأوبجكتس محتاجة قيم محددة من الأول ومينفعش تعتمد على القيم الافتراضية. تقدر تعمل أكتر من constructor بقوائم باراميترز مختلفة (overloading)."
          },
          key_points: [
            { en: "Parameters allow custom initialization", ar: "الباراميترز بتسمح بتهيئة مخصصة" },
            { en: "Multiple constructors can exist (overloading)", ar: "ممكن يكون فيه أكتر من constructor (overloading)" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    public string name;\n    public float price;\n    \n    // Parameterized constructor\n    public Product(string productName, float productPrice) {\n        name = productName;\n        price = productPrice;\n    }\n}\n\nstatic void Main() {\n    Product p = new Product(\"Eggs\", 40);\n    Console.WriteLine(p.name);   // Eggs\n    Console.WriteLine(p.price);  // 40\n}",
              explanation: { en: "Constructor with parameters", ar: "constructor بباراميترز" }
            }
          ],
          exam_tips: { en: "Parameter names can conflict with field names - use 'this' to resolve", ar: "أسماء الباراميترز ممكن تتعارض مع أسماء الحقول - استخدم 'this' عشان تحل المشكلة" }
        },
        {
          id: "3.3",
          title: "The this Reference",
          content: {
            explanation_en: "The this keyword acts as a reference to the current object. When we create an object, we store a reference to it in a reference-type variable. This way, we can use that variable to access object members. The this keyword is particularly useful to resolve naming conflicts between parameters and fields when they have the same name. Within the constructor scope, a parameter is a local variable that hides (or shadows) a field with the same name. Using this.fieldName refers to the field, while fieldName refers to the parameter. The this reference can also be used to call other constructors or to pass the current object to other methods.",
            explanation_ar: "الكلمة this بتشتغل كreference للكائن الحالي. لما نعمل أوبجكت، بنخزن reference ليه في متغير من نوع مرجعي. الكلمة this مفيدة جدًا عشان تحل مشكلة تعارض الأسماء بين الباراميترز والحقول لما يكون ليهم نفس الاسم. جوه نطاق الconstructor، الباراميتر هو متغير محلي بيخفي الحقل اللي بنفس الاسم. استخدام this.fieldName بيشير للحقل، أما fieldName فبيشير للباراميتر. الreference this ممكن تستخدم كمان عشان تنادي constructors تانية أو عشان تمرر الكائن الحالي لميثودز تانية."
          },
          key_points: [
            { en: "this refers to the current object", ar: "this بيشير للكائن الحالي" },
            { en: "Resolves naming conflicts", ar: "بيحل مشكلة تعارض الأسماء" },
            { en: "Can be used to call other constructors", ar: "ممكن يستخدم لاستدعاء constructors تانية" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    public float price;\n    \n    public Product(float price) {\n        this.price = price;  // this.price = field, price = parameter\n    }\n    \n    public Product() : this(10) {  // Calls the parameterized constructor\n        Console.WriteLine(\"Default constructor\");\n    }\n}\n\nstatic void Main() {\n    Product p1 = new Product(20);      // price = 20\n    Product p2 = new Product();        // price = 10\n}",
              explanation: { en: "Using 'this' for field and constructor chaining", ar: "استخدام 'this' للحقل ولسلسلة الconstructors" }
            }
          ],
          exam_tips: { en: "Cannot use 'this' in static methods because there is no current object", ar: "مينفعش تستخدم 'this' في الميثودز static لأنه مفيش كائن حالي" }
        },
        {
          id: "3.4",
          title: "Overloaded Constructors",
          content: {
            explanation_en: "Just like other methods, constructors can be overloaded. A class can have multiple constructors with different parameters. This provides flexibility in object creation, allowing objects to be initialized in different ways. Constructor overloading follows the same rules as method overloading: each constructor must have a unique signature (different number or types of parameters). When an object is created, the appropriate constructor is called based on the arguments provided.",
            explanation_ar: "زي أي ميثود تانية، الconstructors تقبل overloading. الكلاس ممكن يكون فيه أكتر من constructor بباراميترز مختلفة. ده بيدي مرونة في إنشاء الأوبجكتس، ويسمح بتهيئة الأوبجكتس بطرق مختلفة. Constructor overloading بيتبع نفس قواعد method overloading: كل constructor لازم يكون ليه توقيع فريد (عدد أو أنواع الباراميترز مختلفة). لما بيتعمل أوبجكت، الconstructor المناسب بيتنادى بناءً على الباراميترز اللي اتبعتت."
          },
          key_points: [
            { en: "Multiple constructors with different parameters", ar: "أكتر من constructor بباراميترز مختلفة" },
            { en: "Provides flexible object creation", ar: "بيوفر مرونة في إنشاء الأوبجكتس" },
            { en: "Each constructor must have unique signature", ar: "كل constructor لازم يكون ليه توقيع فريد" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    public string name;\n    public float price;\n    \n    public Product() {\n        name = \"Milk\";\n        price = 10;\n    }\n    \n    public Product(string name) {\n        this.name = name;\n        price = 10;\n    }\n    \n    public Product(string name, float price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nstatic void Main() {\n    Product p1 = new Product();               // Milk, 10\n    Product p2 = new Product(\"Cheese\");       // Cheese, 10\n    Product p3 = new Product(\"Eggs\", 40);     // Eggs, 40\n}",
              explanation: { en: "Overloaded constructors", ar: "Constructors overloaded" }
            }
          ],
          exam_tips: { en: "If you overload constructors, you can still use constructor initializers to avoid code duplication", ar: "لو عملت overload للconstructors، تقدر تستخدم constructor initializers عشان تتجنب تكرار الكود" }
        },
        {
          id: "3.5",
          title: "Constructor Initializers",
          content: {
            explanation_en: "Constructor initializers allow one constructor to call another constructor using the this keyword. This helps avoid duplicate code, where one constructor can call another instead of having multiple copies of the same code in more than one constructor. When an object is instantiated from a class, constructors are called in order from the one with the fewest parameters to the one with the most parameters when using initializers. The syntax uses a colon (:) followed by this(parameters) after the constructor's parameter list.",
            explanation_ar: "Constructor initializers بتسمح لconstructor واحد إنه ينادي constructor تاني باستخدام الكلمة this. ده بيساعد في تجنب الكود المكرر، حيث إن constructor واحد ينادي التاني بدل ما يكون عندي نسخ متكررة من نفس الكود في أكتر من constructor. لما أوبجكت بيتعمل من كلاس، الconstructors بتتنادى بالترتيب من اللي عنده أقل باراميترز لللي عنده أكتر باراميترز لما نستخدم initializers. الصيغة: بعد قائمة الباراميترز بتاع الconstructor بنحط نقطتين (:) وبعدين this(الباراميترز)."
          },
          key_points: [
            { en: "Constructor chaining using this()", ar: "سلسلة constructors باستخدام this()" },
            { en: "Avoids code duplication", ar: "بيتجنب تكرار الكود" },
            { en: "Called in order from most parameters to least", ar: "بتتنادى بالترتيب من أكتر باراميترز لأقلهم" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    public string name;\n    public float price;\n    \n    public Product() : this(\"Milk\", 10) {\n        Console.WriteLine(\"0-parameter constructor\");\n    }\n    \n    public Product(string name) : this(name, 10) {\n        Console.WriteLine(\"1-parameter constructor\");\n    }\n    \n    public Product(string name, float price) {\n        this.name = name;\n        this.price = price;\n        Console.WriteLine(\"2-parameters constructor\");\n    }\n}\n\nstatic void Main() {\n    Product p = new Product();\n    // Output:\n    // 2-parameters constructor\n    // 1-parameter constructor\n    // 0-parameter constructor\n}",
              explanation: { en: "Constructor chaining with this", ar: "سلسلة constructors باستخدام this" }
            }
          ],
          exam_tips: { en: "Base class constructors can be called using 'base' instead of 'this'", ar: "constructors الكلاس الأب بيتنادى باستخدام 'base' بدل 'this'" }
        },
        {
          id: "3.6",
          title: "Garbage Collection",
          content: {
            explanation_en: "A local variable is temporary. It is created in the stack section when defined and is removed automatically when it goes out of scope. Therefore, local variables are also called temporary variables or automatic variables. Unlike automatic variables that are created in the stack, objects and arrays are not removed automatically from the heap. Each time you create a new object, the required memory is allocated from the heap. However, memory is not infinite. Therefore, objects that are no longer in use need to be removed to free up some memory. C# does not provide a delete operator and uses a garbage collector instead. Garbage collection relieves the programmer from performing manual memory cleanup. The .NET's garbage collector performs a collection from time to time in order to free some memory. When the garbage collector performs a collection, it checks for objects in the heap that are no longer being used by the application and destroys them to reclaim their memory.",
            explanation_ar: "المتغير المحلي متغير مؤقت. بيتخلق في الstack لما يتعرف وبيتشال تلقائيًا لما يخرج عن نطاقه. عشان كده المتغيرات المحلية بتتسمى temporary variables أو automatic variables. على عكس المتغيرات التلقائية اللي بتتخلق في الstack، الأوبجكتس والأرييات مش بتتشال تلقائيًا من الheap. كل مرة تعمل أوبجكت جديد، الذاكرة المطلوبة بتتخصص من الheap. لكن الذاكرة مش لا نهائية. عشان كده الأوبجكتس اللي مش محتاجينها لازم يتشالوا عشان يحرروا الذاكرة. C# معندهاش delete operator وبستخدم garbage collector بداله. Garbage collector بيريح المبرمج من مهمة تنظيف الذاكرة يدويًا. الgarbage collector في .NET بيشتغل من وقت للتاني عشان يحرر شوية ذاكرة. لما الgarbage collector يشتغل، بيدور على الأوبجكتس في الheap اللي بقيت مش مستخدمة ويدمرها عشان يسترجع الذاكرة."
          },
          key_points: [
            { en: "Objects stay in heap until garbage collected", ar: "الأوبجكتس بتفضل في الheap لحد ما garbage collector يشيلها" },
            { en: "No delete operator in C#", ar: "مفيش delete operator في C#" },
            { en: "GC runs automatically when needed", ar: "GC بيشتغل تلقائيًا لما يكون محتاج" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Program {\n    static void Main() {\n        int x = 5;  // x created in stack\n        \n        if (x > 3) {\n            Player p = new Player();  // p in stack, Player in heap\n        }  // p goes out of scope, removed from stack\n        // Player object remains in heap until garbage collected\n        \n        // Not recommended - manual GC call\n        // System.GC.Collect();\n    }\n}",
              explanation: { en: "Stack vs Heap lifetime", ar: "عمر المتغير في Stack vs Heap" }
            }
          ],
          exam_tips: { en: "Calling GC.Collect() manually is not recommended as it can hurt performance", ar: "مناداة GC.Collect() يدويًا مش مستحبة عشان بتأثر على الأداء" }
        },
        {
          id: "3.7",
          title: "Destructors",
          content: {
            explanation_en: "A destructor is used to perform any necessary final clean-up when a class instance (i.e. object) is being removed from memory. The programmer has no control over when the destructor is called. If the garbage collector considers an object eligible for destruction, it calls its destructor (if any) and reclaims the memory used by that object. If your object allocates resources, such as windows, files, and network connections, you should use a destructor to free those resources before the object is destroyed. Destructors cannot be called directly and are invoked automatically during garbage collection. Destructor syntax uses a tilde (~) followed by the class name.",
            explanation_ar: "الدستركتور (destructor) بيستخدم عشان يعمل أي تنظيف أخير محتاج لما الكائن بيتشال من الذاكرة. المبرمج مالهوش تحكم في امتى الدستركتور بيتنادى. لو garbage collector قرر إن الكائن جاهز للتدمير، بينادي الدستركتور بتاعه (لو موجود) وبيرجع الذاكرة اللي كان بيستخدمها. لو الكائن بيستخدم موارد زي ويندوز، فايلات، أو اتصالات شبكة، لازم تستخدم destructor عشان تحرر الموارد دي قبل ما الكائن يتدمر. الدستركتور مينفعش يتنادى مباشرة وبيتسمى تلقائيًا أثناء garbage collection. صيغة الدستركتور: علامة (~) وبعدين اسم الكلاس."
          },
          key_points: [
            { en: "Called by garbage collector before object destruction", ar: "بيتسمى من garbage collector قبل تدمير الكائن" },
            { en: "No control over when it runs", ar: "مفيش تحكم في امتى بيشتغل" },
            { en: "Used to release unmanaged resources", ar: "بيستخدم لتحرير الموارد غير المُدارة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class FileHandler {\n    private IntPtr fileHandle;  // Unmanaged resource\n    \n    public FileHandler(string fileName) {\n        // Open file and get handle\n        fileHandle = OpenFile(fileName);\n    }\n    \n    ~FileHandler() {  // Destructor\n        if (fileHandle != IntPtr.Zero) {\n            CloseFile(fileHandle);  // Release unmanaged resource\n            fileHandle = IntPtr.Zero;\n        }\n        Console.WriteLine(\"Destructor called, resources released\");\n    }\n}",
              explanation: { en: "Destructor for resource cleanup", ar: "Destructor لتنظيف الموارد" }
            }
          ],
          exam_tips: { en: "Destructors are not guaranteed to run immediately; they run when GC collects", ar: "الدستركتور مش مضمون يشتغل فورًا، بيشتغل لما GC يشتغل" }
        }
      ],
      summary: {
        en: "Constructors initialize objects upon creation and can be overloaded for flexibility. The 'this' keyword references the current object and enables constructor chaining. Garbage collection automatically manages memory, while destructors provide cleanup for unmanaged resources before objects are destroyed.",
        ar: "الconstructors بتهيئ الأوبجكتس وقت إنشائها وتقبل overloading للمرونة. الكلمة 'this' بتشير للكائن الحالي وبتسمح بسلسلة الconstructors. Garbage collection بتدير الذاكرة تلقائيًا، بينما destructors بتوفر تنظيف للموارد غير المُدارة قبل تدمير الأوبجكتس."
      }
    },
    {
      id: 4,
      title: "Objects, Methods, and Arrays",
      intro: {
        en: "Advanced topics on passing objects to methods and working with arrays of objects.",
        ar: "موضوعات متقدمة عن تمرير الأوبجكتس للميثودز والتعامل مع أرييات الأوبجكتس."
      },
      sections: [
        {
          id: "4.1",
          title: "Passing References to Methods",
          content: {
            explanation_en: "You have been using value-type variables, such as int or double, as parameters to methods. However, it is both correct and common to use a reference type as a parameter. Doing so allows an object or an array to be passed to a method. When objects are passed to methods, a copy of the reference is passed (pass-by-value of the reference). This means the method receives a copy of the reference, but both the original reference and the copy point to the same object in the heap. Therefore, modifications made through the parameter affect the original object. This is fundamentally different from passing value types, where a copy of the actual data is made.",
            explanation_ar: "إنت استخدمت المتغيرات من النوع القيمي زي int أو double كباراميترز للميثودز. لكن عادي جدًا وكتير بنستخدم النوع المرجعي كباراميتر. ده بيسمح بتمرير أوبجكت أو array للميثود. لما الأوبجكتس بتتتمرر للميثودز، بنمرر نسخة من الreference (pass-by-value of the reference). يعني الميثود بتستلم نسخة من الreference، بس الreference الأصلي والنسخة بيشاوروا على نفس الأوبجكت في الheap. عشان كده التعديلات اللي بتتعمل من خلال الباراميتر بتأثر على الأوبجكت الأصلي. ده مختلف تمامًا عن تمرير الأنواع القيمية اللي بتعمل نسخة من البيانات نفسها."
          },
          key_points: [
            { en: "Objects are passed by reference (copy of reference)", ar: "الأوبجكتس بتتتمرر بتمرير reference (نسخة من الreference)" },
            { en: "Changes affect the original object", ar: "التغييرات بتأثر على الأوبجكت الأصلي" },
            { en: "No copying of the object itself", ar: "مفيش نسخ للأوبجكت نفسه" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Student {\n    public string name;\n    public float score;\n}\n\nstatic void AddBonus(Student s, int bonus) {\n    s.score += bonus;  // Modifies the original object\n}\n\nstatic void Main() {\n    Student x = new Student();\n    x.name = \"Ziad\";\n    x.score = 90;\n    \n    Console.WriteLine(x.score);  // 90\n    AddBonus(x, 5);              // Pass reference\n    Console.WriteLine(x.score);  // 95\n}",
              explanation: { en: "Passing object reference to method", ar: "تمرير reference الأوبجكت لميثود" }
            }
          ],
          exam_tips: { en: "The method receives a copy of the reference, not a reference to the reference", ar: "الميثود بتستلم نسخة من الreference مش reference للreference" }
        },
        {
          id: "4.2",
          title: "Passing References by Reference",
          content: {
            explanation_en: "Using the ref keyword allows methods to change which object a variable refers to. Normally, when passing a reference type without ref, a copy of the reference is passed, so the method can modify the object but cannot make the original variable point to a different object. With ref, the method receives the actual reference variable, not a copy, enabling it to change what the original variable references, such as swapping two references. This is called pass-by-reference. The ref keyword must be used both in the method definition and at the call site.",
            explanation_ar: "استخدام الكلمة ref بيسمح للميثود إنها تغير الأوبجكت اللي المتغير بيشاور عليه. عادةً، لما تمرر نوع مرجعي من غير ref، بتتمرر نسخة من الreference، فالميثود تقدر تعدل الأوبجكت بس مش تقدر تخلي المتغير الأصلي يشير لأوبجكت مختلف. مع ref، الميثود بتستلم الreference المتغير نفسه مش نسخة، فبتقدر تغير إيه اللي المتغير الأصلي بيشاور عليه، زي تبديل مرجعين. ده اسمه pass-by-reference. الكلمة ref لازم تستخدم في تعريف الميثود وأثناء النداء."
          },
          key_points: [
            { en: "ref allows changing the reference itself", ar: "ref بيسمح بتغيير الreference نفسه" },
            { en: "Used for swapping or reassigning references", ar: "بيستخدم للتبديل أو إعادة تعيين المراجع" },
            { en: "Must use ref in both definition and call", ar: "لازم تستخدم ref في التعريف وأثناء النداء" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Student {\n    public string name;\n    public float score;\n}\n\nstatic void Swap(ref Student a, ref Student b) {\n    Student temp = a;\n    a = b;\n    b = temp;\n}\n\nstatic void Main() {\n    Student x = new Student() { name = \"Ziad\", score = 90 };\n    Student y = new Student() { name = \"Malik\", score = 95 };\n    \n    Console.WriteLine(x.name);  // Ziad\n    Console.WriteLine(y.name);  // Malik\n    \n    Swap(ref x, ref y);\n    \n    Console.WriteLine(x.name);  // Malik\n    Console.WriteLine(y.name);  // Ziad\n}",
              explanation: { en: "Swapping references using ref", ar: "تبديل المراجع باستخدام ref" }
            }
          ],
          exam_tips: { en: "Without ref, you can modify the object but not reassign the reference", ar: "من غير ref، تقدر تعدل الأوبجكت بس مش تقدر تعيد تعيين الreference" }
        },
        {
          id: "4.3",
          title: "Variable Number of Parameters",
          content: {
            explanation_en: "The params keyword allows methods to accept any number of arguments of the same type. The params modifier must be used on the last parameter of the method, and that parameter must be a single-dimensional array. When you call the method, you can pass a comma-separated list of arguments of the type of the array elements, or you can pass an array directly. The number of elements in the array will be equal to the number of arguments passed to the method. This is useful for methods that need to handle a variable number of inputs, like summing numbers or calculating averages.",
            explanation_ar: "الكلمة params بتسمح للميثود إنها تقبل أي عدد من الباراميترز من نفس النوع. لازم params تكون على آخر باراميتر في الميثود، والباراميتر ده لازم يكون array أحادي البعد. لما تنادي الميثود، تقدر تبعت قائمة مفصولة بفواصل من القيم، أو تقدر تبعت array مباشرة. عدد العناصر في الarray هيساوي عدد الباراميترز اللي اتبعتت للميثود. ده مفيد للميثودز اللي محتاجة تتعامل مع عدد متغير من المدخلات، زي جمع الأرقام أو حساب المتوسطات."
          },
          key_points: [
            { en: "params allows variable number of arguments", ar: "params بيسمح بعدد متغير من الباراميترز" },
            { en: "Must be the last parameter", ar: "لازم يكون آخر باراميتر" },
            { en: "Parameter must be a single-dimensional array", ar: "الباراميتر لازم يكون array أحادي البعد" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "static int Sum(params int[] numbers) {\n    int total = 0;\n    foreach (int n in numbers)\n        total += n;\n    return total;\n}\n\nstatic double Average(params double[] numbers) {\n    if (numbers.Length == 0) return 0;\n    double sum = 0;\n    foreach (double n in numbers)\n        sum += n;\n    return sum / numbers.Length;\n}\n\nstatic void Main() {\n    int sum1 = Sum(1, 2, 3, 4, 5);       // 15\n    int sum2 = Sum(10, 20, 30);           // 60\n    double avg = Average(85, 90, 95, 88); // 89.5\n}",
              explanation: { en: "Variable number of parameters with params", ar: "عدد متغير من الباراميترز باستخدام params" }
            }
          ],
          exam_tips: { en: "You can call a params method with zero arguments; the array will be empty", ar: "تقدر تنادي ميثود params من غير أي باراميترز; الarray هيكون فاضي" }
        },
        {
          id: "4.4",
          title: "Returning Objects",
          content: {
            explanation_en: "Methods can return objects, which is useful for factory methods, method chaining, and creating new objects based on existing ones. The returned object can be stored in a variable or used directly in expressions. When a method returns an object, it returns a reference to that object (not a copy). This means that if you modify the returned object, you're modifying the original object that was returned. Factory methods are a common pattern where a method creates and returns a new instance of a class, often with specific configuration.",
            explanation_ar: "الميثودز تقدر ترجع أوبجكتس، وده مفيد لطرق الfactory، ولسلسلة الميثودز، ولإنشاء أوبجكتس جديدة بناءً على أوبجكتس موجودة. الأوبجكت اللي بيرجع ممكن يتخزن في متغير أو يستخدم مباشرة في التعابير. لما الميثود ترجع أوبجكت، بترجع reference ليه (مش نسخة). يعني لو عدلت الأوبجكت اللي رجع، إنت بتعدل الأوبجكت الأصلي. Factory methods هي نمط شائع حيث الميثود بتعمل وترجع نسخة جديدة من كلاس، غالبًا بإعدادات محددة."
          },
          key_points: [
            { en: "Methods can return object references", ar: "الميثودز تقدر ترجع references للأوبجكتس" },
            { en: "Useful for factory methods and method chaining", ar: "مفيد لطرق الfactory وسلسلة الميثودز" },
            { en: "Returns reference, not a copy", ar: "بترجع reference مش نسخة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Rectangle {\n    public int width;\n    public int height;\n    \n    public Rectangle(int w, int h) {\n        width = w;\n        height = h;\n    }\n    \n    public Rectangle Scale(int factor) {\n        return new Rectangle(width * factor, height * factor);\n    }\n    \n    public void Draw() {\n        for (int i = 0; i < height; i++) {\n            for (int j = 0; j < width; j++)\n                Console.Write(\"*\");\n            Console.WriteLine();\n        }\n    }\n}\n\nstatic void Main() {\n    Rectangle rect1 = new Rectangle(4, 2);\n    rect1.Draw();\n    Rectangle rect2 = rect1.Scale(2);  // Returns new rectangle\n    rect2.Draw();\n}",
              explanation: { en: "Method returning a new object", ar: "ميثود بترجع أوبجكت جديد" }
            }
          ],
          exam_tips: { en: "Returning an object is efficient because only the reference is copied, not the object itself", ar: "إرجاع أوبجكت كفاءة عالية لأن الreference بس اللي بيتنسخ مش الأوبجكت نفسه" }
        },
        {
          id: "4.5",
          title: "Arrays of Objects",
          content: {
            explanation_en: "You can declare arrays that hold elements of any type. An array of a value-type (e.g. int) holds the actual values. In contrast, an array of a reference-type holds a set of references. An array of objects holds references to objects rather than the objects themselves. In order to create an array of objects, you need to create an array of references before creating the actual objects and assigning their references to the elements of the array. Initially, all elements are null. Each element must be initialized separately with a new object. This two-step process (create array, then populate with objects) is important to understand for working with collections of objects.",
            explanation_ar: "تقدر تعمل arrays بتحتوي عناصر من أي نوع. array من النوع القيمي (زي int) بيخزن القيم الفعلية. على الجانب الآخر، array من النوع المرجعي بيخزن مجموعة من الreferences. array من الأوبجكتس بيخزن references للأوبجكتس مش الأوبجكتس نفسها. عشان تعمل array من الأوبجكتس، لازم تعمل array من الreferences الأول، وبعدين تعمل الأوبجكتس الفعلية وتعيين references بتاعتها لعناصر الarray. في الأول، كل العناصر بتبقى null. كل عنصر لازم يتinitialize بشكل منفصل بأوبجكت جديد. العملية المكونة من خطوتين (إنشاء الarray وبعدين ملئها بالأوبجكتس) مهمة جدًا للفهم للتعامل مع مجموعات الأوبجكتس."
          },
          key_points: [
            { en: "Array of objects stores references, not objects", ar: "Array من الأوبجكتس بيخزن references مش الأوبجكتس" },
            { en: "Must create objects separately", ar: "لازم تعمل الأوبجكتس بشكل منفصل" },
            { en: "Initial elements are null", ar: "العناصر الأولية بتبقى null" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Student {\n    public string name;\n    public float score;\n    \n    public Student(string name, float score) {\n        this.name = name;\n        this.score = score;\n    }\n}\n\nstatic void Main() {\n    // Step 1: Create array of references (all null initially)\n    Student[] students = new Student[3];\n    \n    // Step 2: Create objects and assign references\n    students[0] = new Student(\"Ziad\", 90);\n    students[1] = new Student(\"Malik\", 95);\n    students[2] = new Student(\"Jodie\", 97);\n    \n    // Access objects through array\n    foreach (Student s in students) {\n        Console.WriteLine($\"{s.name}: {s.score}\");\n    }\n    \n    // Calculate average\n    float total = 0;\n    foreach (Student s in students)\n        total += s.score;\n    float avg = total / students.Length;\n}",
              explanation: { en: "Array of objects", ar: "Array من الأوبجكتس" }
            }
          ],
          exam_tips: { en: "Remember: new Student[3] only creates array of null references, not the Student objects", ar: "تذكر: new Student[3] بتعمل array من references فاضية مش الأوبجكتس" }
        }
      ],
      summary: {
        en: "Objects passed to methods can be modified because a reference copy points to the same object. The ref keyword allows changing which object a variable references. The params keyword enables variable-length argument lists. Methods can return objects, and arrays of objects store references that must be individually initialized.",
        ar: "الأوبجكتس اللي بتتتمرر للميثودز ممكن تتعدل لأن نسخة الreference بتشير لنفس الأوبجكت. الكلمة ref بتسمح بتغيير الأوبجكت اللي المتغير بيشاور عليه. الكلمة params بتدعم قوائم باراميترز متغيرة الطول. الميثودز تقدر ترجع أوبجكتس، وأرييات الأوبجكتس بتخزن references لازم تتinitialize بشكل فردي."
      }
    },
    {
      id: 5,
      title: "Properties and Indexers",
      intro: {
        en: "Encapsulation mechanisms for controlled access to class members.",
        ar: "آليات التغليف للتحكم في الوصول لأعضاء الكلاس."
      },
      sections: [
        {
          id: "5.1",
          title: "Defining Properties",
          content: {
            explanation_en: "A property is a class member that provides a flexible mechanism to access a private field. It has two accessors: a get and a set. The get accessor returns the value of the field. The set accessor assigns a value to the field. The value keyword in the set accessor represents the value being assigned to the property. Properties allow you to add logic to field access, such as validation. This is a key aspect of encapsulation - controlling how data is accessed and modified. Properties look like fields to the outside world but behave like methods internally.",
            explanation_ar: "الproperty هو عضو في الكلاس بيوفر آلية مرنة للوصول إلى field خاص. ليه accessorين: get و set. الget accessor بيرجع قيمة الfield. الset accessor بيحدد قيمة للfield. الكلمة value جوه الset accessor بتمثل القيمة اللي بتتحدد للproperty. الproperties بتسمح لك إنك تضيف منطق للوصول للـfield، زي التحقق من صحة القيم. دي حاجة مهمة في encapsulation - التحكم في كيفية الوصول للبيانات وتعديلها. الproperties بتظهر زي fields للعالم الخارجي لكن بتتصرف زي methods جوه الكلاس."
          },
          key_points: [
            { en: "Properties have get and set accessors", ar: "الproperties ليها get و set accessors" },
            { en: "Use value keyword in set accessor", ar: "استخدم الكلمة value في set accessor" },
            { en: "Allows validation and logic", ar: "بتسمح بالتحقق والمنطق" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    private float price;  // Private field\n    \n    // Public property\n    public float Price {\n        get {\n            return price;  // Returns field value\n        }\n        set {\n            if (value >= 0)  // Validation\n                price = value;\n            else\n                Console.WriteLine(\"Invalid price\");\n        }\n    }\n}\n\nstatic void Main() {\n    Product p = new Product();\n    p.Price = 20;           // Calls set\n    Console.WriteLine(p.Price);  // Calls get, Output: 20\n    p.Price = -5;           // Invalid, prints error\n}",
              explanation: { en: "Property with validation", ar: "Property مع validation" }
            }
          ],
          exam_tips: { en: "Properties are syntactic sugar for getter and setter methods", ar: "الproperties هي اختصار للميثودز getter و setter" }
        },
        {
          id: "5.2",
          title: "Using Properties",
          content: {
            explanation_en: "Properties can be used as if they are public data members, but they are actually special methods called accessors. When you assign to a property, the set accessor is called with the assigned value. When you read from a property, the get accessor is called. This provides the simplicity of field syntax with the control of method logic. Properties can also have different access levels for get and set (e.g., public get, private set). This allows read-only or write-only properties.",
            explanation_ar: "الproperties ممكن تستخدم زي ما هما public data members، بس هما في الحقيقة ميثودز خاصة بتتسمى accessors. لما تحدد قيمة للproperty، الset accessor بيتنادى بالقيمة اللي اتحددت. لما تقرأ الproperty، الget accessor بيتنادى. ده بيوفر بساطة الfield مع التحكم في منطق الميثود. الproperties ممكن يكون ليها مستويات وصول مختلفة للget والset (مثلاً get public, set private). ده بيسمح بإنشاء properties للقراءة بس أو للكتابة بس."
          },
          key_points: [
            { en: "Use property like a field", ar: "استخدم الproperty زي الfield" },
            { en: "Accessors called automatically", ar: "الaccessors بتتسمى تلقائيًا" },
            { en: "Different access levels possible", ar: "مستويات وصول مختلفة ممكنة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Person {\n    private string name;\n    \n    // Read-only property (only get)\n    public string Name {\n        get { return name; }\n    }\n    \n    // Property with different access levels\n    public int Age { get; private set; }\n    \n    public Person(string name, int age) {\n        this.name = name;\n        Age = age;  // Can set in constructor\n    }\n}\n\nstatic void Main() {\n    Person p = new Person(\"Ahmed\", 25);\n    Console.WriteLine(p.Name);  // Ahmed\n    Console.WriteLine(p.Age);   // 25\n    // p.Age = 30;  // Error: set is private\n}",
              explanation: { en: "Read-only property and private set", ar: "Property للقراءة فقط و set خاص" }
            }
          ],
          exam_tips: { en: "Properties can be abstract, virtual, or overridden like methods", ar: "الproperties ممكن تكون abstract أو virtual أو override زي الميثودز" }
        },
        {
          id: "5.3",
          title: "Automatic Properties",
          content: {
            explanation_en: "C# provides a shorthand syntax called automatic properties, where you do not have to define the backing field explicitly. The compiler creates a hidden, private backing field for you. This reduces boilerplate code when no additional logic is needed in the accessors. Automatic properties are declared with just get; and set; (or get; only for read-only). The compiler generates the backing field and the accessor implementations automatically. This is the recommended way to create simple properties that just store and retrieve a value.",
            explanation_ar: "C# بيديك طريقة مختصرة اسمها automatic properties، حيث مش محتاج تعرف الfield اللي ورا الproperty بشكل صريح. الcompiler بيعمل field خاص مخفي لك. ده بيقلل الكود المكرر لما مكنش محتاج منطق إضافي في الaccessors. الautomatic properties بتتعرف ببساطة get; و set; (أو get; بس للقراءة فقط). الcompiler بيولد الfield والaccessors تلقائيًا. دي الطريقة المفضلة لعمل properties بسيطة بتخزن وتسترجع قيمة."
          },
          key_points: [
            { en: "No explicit backing field needed", ar: "مش محتاج field واضح" },
            { en: "Compiler generates hidden field", ar: "الcompiler بيولد field مخفي" },
            { en: "Cleaner code for simple properties", ar: "كود أنظف للproperties البسيطة" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    // Automatic property - compiler creates backing field\n    public string Name { get; set; }\n    \n    // Automatic property with private set\n    public float Price { get; private set; }\n    \n    // Read-only automatic property (C# 6.0+)\n    public string Code { get; } = \"ABC123\";\n    \n    public Product(string name, float price) {\n        Name = name;\n        Price = price;\n        // Code is already initialized\n    }\n}\n\nstatic void Main() {\n    Product p = new Product(\"Milk\", 10);\n    Console.WriteLine(p.Name);   // Milk\n    Console.WriteLine(p.Price);  // 10\n    // p.Price = 20;  // Error: set is private\n}",
              explanation: { en: "Automatic properties", ar: "Automatic properties" }
            }
          ],
          exam_tips: { en: "Automatic properties cannot have custom logic in get/set", ar: "الautomatic properties مينفعش يبقى فيها منطق مخصص في get/set" }
        },
        {
          id: "5.4",
          title: "Read-Only Properties",
          content: {
            explanation_en: "A property can be made read-only by providing only the get accessor without providing the set accessor. For automatic properties, you can make them read-only by making the set accessor private. Read-only properties can only be set in the constructor or through initializers. This is useful when you want to expose data that shouldn't be changed after object creation. Read-only properties help enforce immutability, which can make code more predictable and easier to debug.",
            explanation_ar: "الproperty ممكن يتعمل read-only بتوفير الget accessor بس من غير الset accessor. للautomatic properties، تقدر تعملها read-only بجعل الset accessor private. الproperties اللي read-only بتتحدد قيمها بس في الconstructor أو من خلال initializers. ده مفيد لما عايز تعرض بيانات مينفعش تتغير بعد إنشاء الأوبجكت. الread-only properties بتساعد في فرض immutability، وده بيخلي الكود أسهل في التتبع وأقل في الأخطاء."
          },
          key_points: [
            { en: "Only get accessor (no set)", ar: "get accessor بس (مفيش set)" },
            { en: "Can only be set in constructor", ar: "بتتحدد قيمتها بس في الconstructor" },
            { en: "Enforces immutability", ar: "بتفرض عدم التغيير" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Product {\n    // Read-only property with backing field\n    private float price;\n    public float Price {\n        get { return price; }\n        // No set accessor\n    }\n    \n    // Read-only automatic property with private set\n    public string Name { get; private set; }\n    \n    public Product(string name, float price) {\n        Name = name;        // Set in constructor\n        this.price = price; // Set in constructor\n    }\n}\n\nstatic void Main() {\n    Product p = new Product(\"Milk\", 10);\n    Console.WriteLine(p.Name);   // Milk\n    Console.WriteLine(p.Price);  // 10\n    // p.Name = \"Eggs\";  // Error: read-only\n    // p.Price = 20;     // Error: read-only\n}",
              explanation: { en: "Read-only properties", ar: "Properties للقراءة فقط" }
            }
          ],
          exam_tips: { en: "Read-only properties improve thread safety for immutable objects", ar: "الread-only properties بتحسن أمان الخيوط للأوبجكتس اللي مش بتتغير" }
        },
        {
          id: "5.5",
          title: "Write-Only Properties",
          content: {
            explanation_en: "A property can be made write-only by providing only the set accessor without providing the get accessor. This is rarely used but can be useful for sensitive data like passwords where you want to allow setting but not reading. An auto-implemented property can be made write-only by making its get accessor private. Write-only properties allow setting a value but prevent reading it, which can be useful for data that should be consumed internally but not exposed.",
            explanation_ar: "الproperty ممكن يتعمل write-only بتوفير الset accessor بس من غير الget accessor. ده نادر الاستخدام بس ممكن يكون مفيد للبيانات الحساسة زي الباسوورد حيث عايز تسمح بالكتابة بس مش بالقراءة. الauto-implemented property ممكن يتعمل write-only بجعل الget accessor private. الwrite-only properties بتسمح بتحديد القيمة بس بتمنع قراءتها، وده ممكن يكون مفيد للبيانات اللي المفروض تستخدم جوه الكلاس بس مش تنكشف للخارج."
          },
          key_points: [
            { en: "Only set accessor (no get)", ar: "set accessor بس (مفيش get)" },
            { en: "Useful for sensitive data", ar: "مفيد للبيانات الحساسة" },
            { en: "Rarely used pattern", ar: "نمط نادر الاستخدام" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class User {\n    private string password;\n    \n    // Write-only property\n    public string Password {\n        set {\n            if (value.Length >= 6)\n                password = value;\n            else\n                Console.WriteLine(\"Password too short\");\n        }\n        // No get accessor\n    }\n    \n    // Write-only automatic property (get is private)\n    public string Username { private get; set; }\n    \n    public bool ValidatePassword(string input) {\n        return password == input;  // Internal use only\n    }\n}\n\nstatic void Main() {\n    User u = new User();\n    u.Password = \"secret123\";  // OK\n    // string pwd = u.Password;  // Error: write-only\n    \n    u.Username = \"Ahmed\";       // OK (set)\n    // string name = u.Username;  // Error: get is private\n}",
              explanation: { en: "Write-only properties", ar: "Properties للكتابة فقط" }
            }
          ],
          exam_tips: { en: "Write-only properties are uncommon; consider if you really need them", ar: "الwrite-only properties مش شائعة؛ فكر كويس لو محتاجهم" }
        },
        {
          id: "5.6",
          title: "Defining Indexers",
          content: {
            explanation_en: "An indexer allows an object to be indexed just like arrays. Indexers resemble properties except that their accessors take parameters. They are defined using the this keyword followed by a parameter list in square brackets. Indexers can have one or more dimensions, and there is no requirement that an indexer actually operate on an array - they can provide any 'array-like' functionality. Indexers are useful for creating collection-like classes where you want to access elements using an index, key, or other identifier.",
            explanation_ar: "الindexer بيسمح للأوبجكت إنه يتعامل زي array. الindexers شبه الproperties بس الaccessors بتاعة الindexers بتاخد باراميترز. بيتعرفوا باستخدام الكلمة this متبوعة بقائمة باراميترز في أقواس مربعة. الindexers ممكن يكون ليها بعد واحد أو أكتر، ومفيش شرط إن الindexer يشتغل على array - أي functionality تشبه الarray. الindexers مفيدة لعمل كلاسات شبه المجموعات (collections) حيث عايز توصل للعناصر باستخدام index أو key أو معرف آخر."
          },
          key_points: [
            { en: "Defined using this keyword", ar: "بتتعرف باستخدام الكلمة this" },
            { en: "Take parameters in square brackets", ar: "بتاخد باراميترز في أقواس مربعة" },
            { en: "Can have multiple parameters", ar: "ممكن يكون ليها أكتر من باراميتر" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Histogram {\n    private int[] frequencies;\n    public int MinIndex { get; private set; }\n    public int MaxIndex { get; private set; }\n    \n    public Histogram(int minIndex, int maxIndex) {\n        MinIndex = minIndex;\n        MaxIndex = maxIndex;\n        frequencies = new int[MaxIndex - MinIndex + 1];\n    }\n    \n    // Indexer definition\n    public int this[int index] {\n        get {\n            if (index >= MinIndex && index <= MaxIndex)\n                return frequencies[index - MinIndex];\n            return 0;  // Invalid index\n        }\n        set {\n            if (index >= MinIndex && index <= MaxIndex)\n                frequencies[index - MinIndex] = value;\n        }\n    }\n}",
              explanation: { en: "Indexer definition", ar: "تعريف indexer" }
            }
          ],
          exam_tips: { en: "Indexers can be overloaded with different parameter types", ar: "الindexers ممكن تعملها overload بأنواع باراميترز مختلفة" }
        },
        {
          id: "5.7",
          title: "Using Indexers",
          content: {
            explanation_en: "An indexer allows an object to be indexed like an array using square brackets. You can use the indexer to get or set values. The indexer can be called from within the same class using the this keyword. The parameter passed to the indexer can be any type, not just integers, and can have any value - it's just a parameter, not an actual array index. This makes indexers very flexible. You can use them with strings, enums, or any other type as the index.",
            explanation_ar: "الindexer بيسمح للأوبجكت إنه يتعامل زي array باستخدام الأقواس المربعة. تقدر تستخدم الindexer عشان تجيب أو تحدد قيم. الindexer ممكن يتنادى من جوه نفس الكلاس باستخدام الكلمة this. الباراميتر اللي بيتدخل للindexer ممكن يكون أي نوع، مش بس integers، وله أي قيمة - هو مجرد باراميتر مش index حقيقي للarray. ده بيخلي الindexers مرنة جدًا. تقدر تستخدمهم مع strings أو enums أو أي نوع تاني كـ index."
          },
          key_points: [
            { en: "Use object[index] syntax", ar: "استخدم الصيغة object[index]" },
            { en: "Can use any type as index", ar: "ممكن تستخدم أي نوع كـ index" },
            { en: "Call with this inside class", ar: "اتنادي بـ this جوه الكلاس" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class Histogram {\n    // ... (as above)\n    \n    public void Draw() {\n        for (int i = MinIndex; i <= MaxIndex; i++) {\n            int frequency = this[i];  // Using indexer with this\n            Console.Write($\"{i}: \");\n            for (int j = 0; j < frequency; j++)\n                Console.Write(\"*\");\n            Console.WriteLine();\n        }\n    }\n}\n\nstatic void Main() {\n    Histogram h = new Histogram(-2, 1);\n    int[] values = { 0, -2, -2, -2, -1, 1, 0, 1 };\n    \n    foreach (int x in values)\n        h[x]++;  // Using indexer\n    \n    Console.WriteLine($\"Frequency of -2: {h[-2]}\");\n    h.Draw();\n}",
              explanation: { en: "Using indexer", ar: "استخدام indexer" }
            }
          ],
          exam_tips: { en: "Indexers can be used on the left side of assignment (like arrays)", ar: "الindexers ممكن تستخدم على الجانب الأيسر في الإسناد (زي الarrays)" }
        },
        {
          id: "5.8",
          title: "Overloading Indexers",
          content: {
            explanation_en: "Like methods, indexers can also be overloaded. In C#, we can have multiple indexers within the same class but they must have different number of parameters and/or different parameter types. Indexers can have one or more dimensions. There is no requirement that an indexer actually operate on an array - the role of the indexer is to provide functionality that appears 'array-like' to the user. Use an indexer for any purpose for which an array-like syntax is beneficial. Overloading indexers allows you to provide multiple ways to access your object's data.",
            explanation_ar: "زي الميثودز، الindexers ممكن يتعملها overload كمان. في C#، ممكن يكون عندنا أكتر من indexer في نفس الكلاس بس لازم يكون عندهم عدد باراميترز مختلف و/أو أنواع باراميترز مختلفة. الindexers ممكن يكون ليها بعد واحد أو أكتر. مفيش شرط إن الindexer يشتغل على array - دور الindexer هو توفير functionality تشبه الarray للمستخدم. استخدم indexer لأي غرض تكون فيه صيغة تشبه الarray مفيدة. الoverloading للindexers بتسمح لك بتوفير طرق متعددة للوصول لبيانات الأوبجكت بتاعك."
          },
          key_points: [
            { en: "Multiple indexers with different signatures", ar: "أكتر من indexer بتوقيعات مختلفة" },
            { en: "Different parameter types or counts", ar: "أنواع أو عدد باراميترز مختلف" },
            { en: "Not required to use arrays", ar: "مش لازم تستخدم arrays" }
          ],
          code_examples: [
            {
              language: "csharp",
              code: "class ValuePrintWidth {\n    public int DefaultCharWidth { get; }\n    \n    public ValuePrintWidth(int defaultWidth) {\n        DefaultCharWidth = defaultWidth;\n    }\n    \n    // Indexer with string and int\n    public int this[string s, int charWidth] {\n        get { return s.Length * charWidth; }\n    }\n    \n    // Indexer with double and int\n    public int this[double x, int charWidth] {\n        get {\n            string s = x.ToString();\n            return this[s, charWidth];\n        }\n    }\n    \n    // Indexer with string only\n    public int this[string s] {\n        get { return this[s, DefaultCharWidth]; }\n    }\n    \n    // Indexer with double only\n    public int this[double x] {\n        get { return this[x.ToString()]; }\n    }\n}\n\nstatic void Main() {\n    ValuePrintWidth v = new ValuePrintWidth(10);\n    Console.WriteLine(v[\"Ziad\"]);        // 40\n    Console.WriteLine(v[16.649]);         // 60\n    Console.WriteLine(v[\"Ziad\", 20]);     // 80\n    Console.WriteLine(v[16.649, 20]);     // 120\n}",
              explanation: { en: "Overloaded indexers", ar: "Indexers overloaded" }
            }
          ],
          exam_tips: { en: "Indexers can have multiple parameters (multi-dimensional indexers)", ar: "الindexers ممكن يكون ليها أكتر من باراميتر (indexers متعددة الأبعاد)" }
        }
      ],
      summary: {
        en: "Properties encapsulate fields with get and set accessors, allowing validation and logic. Automatic properties simplify code. Indexers provide array-like access to objects with flexible parameter types. Both support overloading and different access levels for controlled data access.",
        ar: "الproperties بتغلف الfields باستخدام accessors get و set، وبتراعي التحقق والمنطق. الautomatic properties بتبسط الكود. الindexers بتوفر وصول شبيه بالarray للأوبجكتس بأنواع باراميترز مرنة. الاتنين بيدعموا overloading ومستويات وصول مختلفة للتحكم في الوصول للبيانات."
      }
    },
]
};