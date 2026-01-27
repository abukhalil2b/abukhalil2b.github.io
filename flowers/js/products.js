// قاعدة بيانات المنتجات - Flower Shop Products Database
const productsData = [
    {
        id: 1,
        name: "باقة الورد الأحمر الملكية",
        nameEn: "Royal Red Roses Bouquet",
        price: 85,
        oldPrice: 120,
        category: "roses",
        rating: 4.9,
        reviews: 127,
        description: "باقة فاخرة من الورد الأحمر الطبيعي، مثالية للمناسبات الخاصة والتعبير عن المشاعر الصادقة. تتكون من 24 وردة حمراء منتقاة بعناية.",
        features: [
            "24 وردة حمراء طبيعية",
            "تغليف فاخر مع شريط حريري",
            "بطاقة تهنئة مجانية",
            "رائحة عطرة طبيعية"
        ],
        images: [
            "./img/item1.png",
            "./img/item1.png",
            "./img/item1.png"
        ],
        stock: 15,
        popular: true,
        sale: true
    },
    {
        id: 2,
        name: "باقة الزهور المشكلة الربيعية",
        nameEn: "Spring Mix Bouquet",
        price: 65,
        oldPrice: 85,
        category: "mixed",
        rating: 4.7,
        reviews: 89,
        description: "تشكيلة رائعة من الزهور الملونة التي تعكس جمال الربيع. مزيج متناسق من ألوان زاهية ومتنوعة.",
        features: [
            "تشكيلة متنوعة من الزهور",
            "ألوان زاهية ومبهجة",
            "تنسيق احترافي",
            "تدوم لمدة أسبوع"
        ],
        images: [
            "./img/logo.png",
            "./img/logo.png",
            "./img/logo.png"
        ],
        stock: 22,
        popular: true,
        sale: true
    },
    {
        id: 3,
        name: "باقة الأوركيد الفاخرة",
        nameEn: "Luxury Orchid Arrangement",
        price: 120,
        oldPrice: 0,
        category: "orchids",
        rating: 5.0,
        reviews: 54,
        description: "باقة فاخرة من زهور الأوركيد النادرة، رمز الأناقة والرقي. مثالية لتزيين المكاتب والمنازل الراقية.",
        features: [
            "أوركيد طبيعي نادر",
            "تنسيق في إناء سيراميك فاخر",
            "سهلة العناية",
            "تدوم لأسابيع عديدة"
        ],
        images: [
            "./img/item1.png",
            "./img/item1.png",
            "./img/item1.png"
        ],
        stock: 8,
        popular: false,
        sale: false
    },
    {
        id: 4,
        name: "باقة التوليب الهولندي",
        nameEn: "Dutch Tulips Bouquet",
        price: 75,
        oldPrice: 95,
        category: "tulips",
        rating: 4.8,
        reviews: 103,
        description: "توليب هولندي أصلي بألوان متنوعة. رمز الحب النقي والجمال الطبيعي.",
        features: [
            "توليب هولندي مستورد",
            "ألوان متنوعة ومبهجة",
            "تغليف أنيق",
            "طازج ومضمون"
        ],
        images: [
            "./img/logo.png",
            "./img/logo.png",
            "./img/logo.png"
        ],
        stock: 18,
        popular: true,
        sale: true
    },
    {
        id: 5,
        name: "باقة الياسمين العربي",
        nameEn: "Arabian Jasmine Bouquet",
        price: 55,
        oldPrice: 70,
        category: "jasmine",
        rating: 4.6,
        reviews: 76,
        description: "ياسمين عربي أصيل برائحة عطرة تملأ المكان. مثالي للهدايا والمناسبات السعيدة.",
        features: [
            "ياسمين عربي طبيعي",
            "عطر قوي ومميز",
            "تنسيق تقليدي جميل",
            "رمز الضيافة العربية"
        ],
        images: [
            "./img/item1.png",
            "./img/item1.png",
            "./img/item1.png"
        ],
        stock: 25,
        popular: false,
        sale: true
    },
    {
        id: 6,
        name: "باقة الفل الأبيض",
        nameEn: "White Gardenia Bouquet",
        price: 60,
        oldPrice: 0,
        category: "gardenias",
        rating: 4.7,
        reviews: 62,
        description: "فل أبيض نقي برائحة زكية. يرمز للصفاء والنقاء والمشاعر الطيبة.",
        features: [
            "فل أبيض طبيعي",
            "رائحة زكية مميزة",
            "تنسيق بسيط وأنيق",
            "مناسب لجميع المناسبات"
        ],
        images: [
            "./img/logo.png",
            "./img/logo.png",
            "./img/logo.png"
        ],
        stock: 30,
        popular: true,
        sale: false
    },
    {
        id: 7,
        name: "سلة زهور الاحتفال",
        nameEn: "Celebration Flower Basket",
        price: 95,
        oldPrice: 125,
        category: "baskets",
        rating: 4.9,
        reviews: 91,
        description: "سلة زهور فاخرة مناسبة للاحتفالات والمناسبات الكبيرة. تحتوي على تشكيلة واسعة من الزهور الفاخرة.",
        features: [
            "سلة خشبية فاخرة",
            "تشكيلة واسعة من الزهور",
            "تنسيق احترافي مبهر",
            "مناسبة للمناسبات الكبيرة"
        ],
        images: [
            "./img/item1.png",
            "./img/item1.png",
            "./img/item1.png"
        ],
        stock: 12,
        popular: true,
        sale: true
    },
    {
        id: 8,
        name: "باقة البنفسج الملكي",
        nameEn: "Royal Violet Bouquet",
        price: 70,
        oldPrice: 0,
        category: "violets",
        rating: 4.5,
        reviews: 45,
        description: "بنفسج ملكي بلون أرجواني ساحر. يرمز للتواضع والبساطة الجميلة.",
        features: [
            "بنفسج طبيعي نادر",
            "لون أرجواني مميز",
            "حجم مثالي",
            "عناية سهلة"
        ],
        images: [
            "./img/logo.png",
            "./img/logo.png",
            "./img/logo.png"
        ],
        stock: 14,
        popular: false,
        sale: false
    },
    {
        id: 9,
        name: "باقة الكاميليا اليابانية",
        nameEn: "Japanese Camellia Bouquet",
        price: 110,
        oldPrice: 140,
        category: "camellias",
        rating: 5.0,
        reviews: 38,
        description: "كاميليا يابانية فاخرة تعكس الجمال الشرقي الأصيل. زهرة نادرة ومميزة.",
        features: [
            "كاميليا يابانية أصلية",
            "أزهار كبيرة جميلة",
            "تنسيق شرقي فاخر",
            "هدية مميزة وفريدة"
        ],
        images: [
            "./img/item1.png",
            "./img/item1.png",
            "./img/item1.png"
        ],
        stock: 6,
        popular: false,
        sale: true
    }
];

// الفئات - Categories
const categories = [
    { id: "all", name: "جميع المنتجات", nameEn: "All Products" },
    { id: "roses", name: "الورود", nameEn: "Roses" },
    { id: "mixed", name: "باقات مشكلة", nameEn: "Mixed" },
    { id: "orchids", name: "الأوركيد", nameEn: "Orchids" },
    { id: "tulips", name: "التوليب", nameEn: "Tulips" },
    { id: "jasmine", name: "الياسمين", nameEn: "Jasmine" },
    { id: "gardenias", name: "الفل", nameEn: "Gardenias" },
    { id: "baskets", name: "سلال الزهور", nameEn: "Baskets" },
    { id: "violets", name: "البنفسج", nameEn: "Violets" },
    { id: "camellias", name: "الكاميليا", nameEn: "Camellias" }
];

// التقييمات والشهادات - Reviews & Testimonials
const testimonials = [
    {
        id: 1,
        name: "أحمد السعيدي",
        rating: 5,
        text: "خدمة ممتازة وزهور طازجة جداً! التوصيل كان سريع والتغليف رائع. بالتأكيد سأطلب مرة أخرى.",
        date: "2026-01-15"
    },
    {
        id: 2,
        name: "فاطمة المنصوري",
        rating: 5,
        text: "أجمل باقة ورد شفتها! الألوان زاهية والرائحة عطرة. هدية مثالية لكل المناسبات.",
        date: "2026-01-12"
    },
    {
        id: 3,
        name: "محمد الهاشمي",
        rating: 4,
        text: "تعامل راقي واحترافي. الزهور وصلت طازجة وجميلة كما في الصور. ننصح بالتعامل معهم.",
        date: "2026-01-08"
    }
];
