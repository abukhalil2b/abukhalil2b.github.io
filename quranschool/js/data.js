// البيانات المبدئية للنظام
const DEFAULT_DATA = {
    branches: [
        {
            id: 1,
            name: 'جامع السميع',
            location: 'ولاية السيب - المعبيلة',
            supervisor: 'الشيخ سالم بن حمد البلوشي',
            phone: '96899123456',
            status: 'active',
            teachersCount: 3,
            studentsCount: 45,
            halqas: [
                { name: 'حلقة الإتقان', time: 'بعد صلاة الفجر', studentsCount: 18, teacherName: 'محمد بن سعيد الهاشمي' },
                { name: 'حلقة التجويد', time: 'بعد صلاة المغرب', studentsCount: 15, teacherName: 'أحمد بن خالد السعيدي' },
                { name: 'حلقة الحفظ', time: 'بعد صلاة العصر', studentsCount: 12, teacherName: 'علي بن سالم الراشدي' }
            ],
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'جامع السلام',
            location: 'ولاية بوشر - الأنصب',
            supervisor: 'الشيخ خالد بن محمد الحارثي',
            phone: '96899654321',
            status: 'active',
            teachersCount: 2,
            studentsCount: 38,
            halqas: [
                { name: 'حلقة النورانية', time: 'بعد صلاة المغرب', studentsCount: 24, teacherName: 'ناصر بن عبدالله الجابري' },
                { name: 'حلقة الفجر', time: 'بعد صلاة الفجر', studentsCount: 14, teacherName: 'سعيد بن راشد العامري' }
            ],
            createdAt: '2024-01-15T00:00:00.000Z'
        }
    ],
    
    teachers: [
        {
            id: 1,
            name: 'محمد بن سعيد الهاشمي',
            nationalId: '12345678',
            birthDate: '1985-03-15',
            gender: 'male',
            phone: '96899111222',
            email: 'mohammed@example.com',
            address: 'ولاية السيب',
            employmentType: 'ministry',
            workplace: 'جامع السميع',
            hireDate: '2020-01-01',
            status: 'active',
            qualification: 'بكالوريوس',
            specialization: 'علوم قرآنية',
            experienceYears: 10,
            ijazat: 'إجازة بالقراءات العشر',
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'ناصر بن عبدالله الجابري',
            nationalId: '23456789',
            birthDate: '1990-07-20',
            gender: 'male',
            phone: '96899222333',
            email: 'nasser@example.com',
            address: 'ولاية بوشر',
            employmentType: 'volunteer',
            workplace: 'جامع السلام',
            hireDate: '2022-06-01',
            status: 'active',
            qualification: 'حافظ للقرآن',
            specialization: 'حفظ القرآن',
            experienceYears: 5,
            ijazat: 'إجازة برواية حفص',
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 3,
            name: 'أحمد بن خالد السعيدي',
            nationalId: '34567890',
            birthDate: '1988-11-10',
            gender: 'male',
            phone: '96899333444',
            email: 'ahmed@example.com',
            address: 'ولاية السيب',
            employmentType: 'waqf',
            workplace: 'جامع السميع',
            hireDate: '2021-03-15',
            status: 'active',
            qualification: 'ماجستير',
            specialization: 'التجويد وعلوم القراءات',
            experienceYears: 8,
            ijazat: 'إجازة في التجويد',
            createdAt: '2024-01-01T00:00:00.000Z'
        }
    ],
    
    students: [
        {
            id: 1,
            name: 'عبدالله بن محمد الحارثي',
            nationalId: '11111111',
            birthDate: '2012-05-15',
            gender: 'male',
            phone: '96899001001',
            address: 'ولاية السيب',
            guardianName: 'محمد بن سالم الحارثي',
            guardianPhone: '96899001002',
            guardianRelation: 'father',
            branch: 'جامع السميع',
            halqa: 'حلقة الإتقان',
            status: 'active',
            points: 985,
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'يوسف بن سالم البلوشي',
            nationalId: '22222222',
            birthDate: '2011-08-20',
            gender: 'male',
            phone: '96899002001',
            address: 'ولاية بوشر',
            guardianName: 'سالم بن أحمد البلوشي',
            guardianPhone: '96899002002',
            guardianRelation: 'father',
            branch: 'جامع السلام',
            halqa: 'حلقة النورانية',
            status: 'active',
            points: 942,
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 3,
            name: 'محمد بن أحمد الزدجالي',
            nationalId: '33333333',
            birthDate: '2013-02-10',
            gender: 'male',
            phone: '96899003001',
            address: 'ولاية السيب',
            guardianName: 'أحمد بن علي الزدجالي',
            guardianPhone: '96899003002',
            guardianRelation: 'father',
            branch: 'جامع السميع',
            halqa: 'حلقة التجويد',
            status: 'active',
            points: 918,
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 4,
            name: 'سالم بن راشد المعمري',
            nationalId: '44444444',
            birthDate: '2012-11-25',
            gender: 'male',
            phone: '96899004001',
            address: 'ولاية بوشر',
            guardianName: 'راشد بن خالد المعمري',
            guardianPhone: '96899004002',
            guardianRelation: 'father',
            branch: 'جامع السلام',
            halqa: 'حلقة الفجر',
            status: 'active',
            points: 895,
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 5,
            name: 'خالد بن عبدالله الشكيلي',
            nationalId: '55555555',
            birthDate: '2011-04-05',
            gender: 'male',
            phone: '96899005001',
            address: 'ولاية السيب',
            guardianName: 'عبدالله بن سعيد الشكيلي',
            guardianPhone: '96899005002',
            guardianRelation: 'father',
            branch: 'جامع السميع',
            halqa: 'حلقة الإتقان',
            status: 'active',
            points: 870,
            createdAt: '2024-01-01T00:00:00.000Z'
        }
    ],
    
    memorizationTasks: [
        {
            id: 1,
            name: 'حفظ جزء عم',
            type: 'memorization',
            description: 'برنامج حفظ جزء عم كاملاً',
            level: 'beginner',
            estimatedDays: 60,
            totalPoints: 500,
            studentsCount: 15,
            status: 'active',
            subtasks: [
                { id: 1, name: 'حفظ سورة الناس', fromAyah: 1, toAyah: 6, surah: 'الناس', points: 15, order: 1 },
                { id: 2, name: 'حفظ سورة الفلق', fromAyah: 1, toAyah: 5, surah: 'الفلق', points: 15, order: 2 },
                { id: 3, name: 'حفظ سورة الإخلاص', fromAyah: 1, toAyah: 4, surah: 'الإخلاص', points: 15, order: 3 },
                { id: 4, name: 'حفظ سورة المسد', fromAyah: 1, toAyah: 5, surah: 'المسد', points: 15, order: 4 },
                { id: 5, name: 'حفظ سورة النصر', fromAyah: 1, toAyah: 3, surah: 'النصر', points: 10, order: 5 },
                { id: 6, name: 'حفظ سورة الكافرون', fromAyah: 1, toAyah: 6, surah: 'الكافرون', points: 15, order: 6 },
                { id: 7, name: 'حفظ سورة الكوثر', fromAyah: 1, toAyah: 3, surah: 'الكوثر', points: 10, order: 7 },
                { id: 8, name: 'حفظ سورة الماعون', fromAyah: 1, toAyah: 7, surah: 'الماعون', points: 15, order: 8 },
                { id: 9, name: 'حفظ سورة قريش', fromAyah: 1, toAyah: 4, surah: 'قريش', points: 12, order: 9 },
                { id: 10, name: 'حفظ سورة الفيل', fromAyah: 1, toAyah: 5, surah: 'الفيل', points: 15, order: 10 }
            ],
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'حفظ جزء تبارك',
            type: 'memorization',
            description: 'برنامج حفظ جزء تبارك (الجزء 29)',
            level: 'intermediate',
            estimatedDays: 90,
            totalPoints: 800,
            studentsCount: 8,
            status: 'active',
            subtasks: [
                { id: 1, name: 'حفظ سورة الملك (الآيات 1-10)', fromAyah: 1, toAyah: 10, surah: 'الملك', points: 30, order: 1 },
                { id: 2, name: 'حفظ سورة الملك (الآيات 11-20)', fromAyah: 11, toAyah: 20, surah: 'الملك', points: 30, order: 2 },
                { id: 3, name: 'حفظ سورة الملك (الآيات 21-30)', fromAyah: 21, toAyah: 30, surah: 'الملك', points: 30, order: 3 },
                { id: 4, name: 'حفظ سورة القلم (الآيات 1-15)', fromAyah: 1, toAyah: 15, surah: 'القلم', points: 35, order: 4 },
                { id: 5, name: 'حفظ سورة القلم (الآيات 16-30)', fromAyah: 16, toAyah: 30, surah: 'القلم', points: 35, order: 5 },
                { id: 6, name: 'حفظ سورة الحاقة (الآيات 1-25)', fromAyah: 1, toAyah: 25, surah: 'الحاقة', points: 40, order: 6 },
                { id: 7, name: 'حفظ سورة الحاقة (الآيات 26-52)', fromAyah: 26, toAyah: 52, surah: 'الحاقة', points: 40, order: 7 }
            ],
            createdAt: '2024-01-15T00:00:00.000Z'
        },
        {
            id: 3,
            name: 'حفظ سورة البقرة',
            type: 'memorization',
            description: 'برنامج حفظ سورة البقرة كاملة',
            level: 'advanced',
            estimatedDays: 180,
            totalPoints: 2000,
            studentsCount: 3,
            status: 'active',
            subtasks: [
                { id: 1, name: 'حفظ الآيات 1-25', fromAyah: 1, toAyah: 25, surah: 'البقرة', points: 50, order: 1 },
                { id: 2, name: 'حفظ الآيات 26-50', fromAyah: 26, toAyah: 50, surah: 'البقرة', points: 50, order: 2 },
                { id: 3, name: 'حفظ الآيات 51-75', fromAyah: 51, toAyah: 75, surah: 'البقرة', points: 50, order: 3 },
                { id: 4, name: 'حفظ الآيات 76-100', fromAyah: 76, toAyah: 100, surah: 'البقرة', points: 50, order: 4 },
                { id: 5, name: 'حفظ الآيات 101-125', fromAyah: 101, toAyah: 125, surah: 'البقرة', points: 50, order: 5 }
            ],
            createdAt: '2024-02-01T00:00:00.000Z'
        }
    ],
    
    recitationTasks: [
        {
            id: 1,
            name: 'تلاوة سورة البقرة',
            type: 'recitation',
            description: 'برنامج تلاوة سورة البقرة مع التجويد',
            level: 'intermediate',
            estimatedDays: 30,
            totalPoints: 300,
            studentsCount: 12,
            status: 'active',
            subtasks: [
                { id: 1, name: 'تلاوة الآيات 1-50', fromAyah: 1, toAyah: 50, surah: 'البقرة', points: 25, order: 1 },
                { id: 2, name: 'تلاوة الآيات 51-100', fromAyah: 51, toAyah: 100, surah: 'البقرة', points: 25, order: 2 },
                { id: 3, name: 'تلاوة الآيات 101-150', fromAyah: 101, toAyah: 150, surah: 'البقرة', points: 25, order: 3 },
                { id: 4, name: 'تلاوة الآيات 151-200', fromAyah: 151, toAyah: 200, surah: 'البقرة', points: 25, order: 4 },
                { id: 5, name: 'تلاوة الآيات 201-250', fromAyah: 201, toAyah: 250, surah: 'البقرة', points: 25, order: 5 },
                { id: 6, name: 'تلاوة الآيات 251-286', fromAyah: 251, toAyah: 286, surah: 'البقرة', points: 25, order: 6 }
            ],
            createdAt: '2024-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'تلاوة سورة آل عمران',
            type: 'recitation',
            description: 'برنامج تلاوة سورة آل عمران',
            level: 'intermediate',
            estimatedDays: 20,
            totalPoints: 200,
            studentsCount: 0,
            status: 'active',
            subtasks: [
                { id: 1, name: 'تلاوة الآيات 1-50', fromAyah: 1, toAyah: 50, surah: 'آل عمران', points: 20, order: 1 },
                { id: 2, name: 'تلاوة الآيات 51-100', fromAyah: 51, toAyah: 100, surah: 'آل عمران', points: 20, order: 2 },
                { id: 3, name: 'تلاوة الآيات 101-150', fromAyah: 101, toAyah: 150, surah: 'آل عمران', points: 20, order: 3 },
                { id: 4, name: 'تلاوة الآيات 151-200', fromAyah: 151, toAyah: 200, surah: 'آل عمران', points: 20, order: 4 }
            ],
            createdAt: '2024-01-15T00:00:00.000Z'
        },
        {
            id: 3,
            name: 'تلاوة جزء عم',
            type: 'recitation',
            description: 'برنامج تلاوة جزء عم للمبتدئين',
            level: 'beginner',
            estimatedDays: 15,
            totalPoints: 150,
            studentsCount: 20,
            status: 'active',
            subtasks: [
                { id: 1, name: 'تلاوة سور النبأ والنازعات وعبس', fromAyah: 1, toAyah: 0, surah: 'النبأ - عبس', points: 30, order: 1 },
                { id: 2, name: 'تلاوة سور التكوير والانفطار والمطففين', fromAyah: 1, toAyah: 0, surah: 'التكوير - المطففين', points: 30, order: 2 },
                { id: 3, name: 'تلاوة سور الانشقاق والبروج والطارق', fromAyah: 1, toAyah: 0, surah: 'الانشقاق - الطارق', points: 30, order: 3 },
                { id: 4, name: 'تلاوة سور الأعلى والغاشية والفجر', fromAyah: 1, toAyah: 0, surah: 'الأعلى - الفجر', points: 30, order: 4 },
                { id: 5, name: 'تلاوة باقي سور جزء عم', fromAyah: 1, toAyah: 0, surah: 'البلد - الناس', points: 30, order: 5 }
            ],
            createdAt: '2024-02-01T00:00:00.000Z'
        }
    ]
};

// دالة تهيئة البيانات المبدئية
function initializeDefaultData() {
    // تحقق من وجود البيانات
    if (!localStorage.getItem('quranschool_branches')) {
        localStorage.setItem('quranschool_branches', JSON.stringify(DEFAULT_DATA.branches));
    }
    if (!localStorage.getItem('quranschool_teachers')) {
        localStorage.setItem('quranschool_teachers', JSON.stringify(DEFAULT_DATA.teachers));
    }
    if (!localStorage.getItem('quranschool_students')) {
        localStorage.setItem('quranschool_students', JSON.stringify(DEFAULT_DATA.students));
    }
    if (!localStorage.getItem('quranschool_memorization_tasks')) {
        localStorage.setItem('quranschool_memorization_tasks', JSON.stringify(DEFAULT_DATA.memorizationTasks));
    }
    if (!localStorage.getItem('quranschool_recitation_tasks')) {
        localStorage.setItem('quranschool_recitation_tasks', JSON.stringify(DEFAULT_DATA.recitationTasks));
    }
}

// دالة الحصول على أيقونة الجنس
function getGenderIcon(gender) {
    if (gender === 'female') {
        return `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#E8F5E9"/>
            <circle cx="50" cy="35" r="18" fill="#065F46"/>
            <path d="M50 55 C25 55 20 80 20 95 L80 95 C80 80 75 55 50 55" fill="#065F46"/>
            <ellipse cx="50" cy="28" rx="12" ry="8" fill="#065F46"/>
            <path d="M30 30 Q50 15 70 30" stroke="#065F46" stroke-width="8" fill="none"/>
        </svg>`;
    }
    return `<svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#E8F5E9"/>
        <circle cx="50" cy="38" r="18" fill="#065F46"/>
        <path d="M50 58 C25 58 20 83 20 98 L80 98 C80 83 75 58 50 58" fill="#065F46"/>
        <rect x="25" y="20" width="50" height="12" rx="2" fill="#065F46"/>
        <rect x="30" y="16" width="40" height="8" rx="2" fill="#065F46"/>
    </svg>`;
}

// دالة تحويل الأرقام للعربية
function toArabicNumber(num) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicNumbers[parseInt(d)] || d).join('');
}

// تهيئة البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeDefaultData);
