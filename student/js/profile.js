/**
 * ====================================
 * صفحة الملف الشخصي - Profile Page
 * Modern Profile JavaScript
 * ====================================
 */

// ====== الحصول على العناصر - Get Elements ======
const tabButtons = document.querySelectorAll('.tab-button');
const missionsContent = document.getElementById('missions-content');
const medalsCarousel = document.getElementById('medalsCarousel');
const progressBar = document.getElementById('progressBar');
const progressPercentage = document.getElementById('progressPercentage');

// ====== نظام Tabs - Tabs System ======
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // إزالة active من جميع الأزرار
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // إضافة active للزر المختار
        button.classList.add('active');

        // تأثير انتقال
        missionsContent.style.opacity = '0';
        missionsContent.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // هنا يمكن تحميل محتوى مختلف حسب التبويب
            const tab = button.dataset.tab;
            loadTabContent(tab);

            missionsContent.style.opacity = '1';
            missionsContent.style.transform = 'translateY(0)';
        }, 300);
    });
});

// ====== تحميل محتوى التبويب - Load Tab Content ======
function loadTabContent(tab) {
    // في التطبيق الحقيقي، سيتم تحميل محتوى مختلف من السيرفر
    console.log(`تحميل محتوى: ${tab}`);

    // يمكن إضافة محتوى مختلف لكل تبويب هنا
    switch (tab) {
        case 'tilawa':
            console.log('عرض محتوى التلاوة');
            break;
        case 'hifz':
            console.log('عرض محتوى الحفظ');
            break;
        case 'qiraat':
            console.log('عرض محتوى القراءات');
            break;
        case 'mutoon':
            console.log('عرض محتوى المتون');
            break;
    }
}

// ====== Carousel للأوسمة - Medals Carousel ======
let isDown = false;
let startX;
let scrollLeft;

medalsCarousel.addEventListener('mousedown', (e) => {
    isDown = true;
    medalsCarousel.style.cursor = 'grabbing';
    startX = e.pageX - medalsCarousel.offsetLeft;
    scrollLeft = medalsCarousel.scrollLeft;
});

medalsCarousel.addEventListener('mouseleave', () => {
    isDown = false;
    medalsCarousel.style.cursor = 'grab';
});

medalsCarousel.addEventListener('mouseup', () => {
    isDown = false;
    medalsCarousel.style.cursor = 'grab';
});

medalsCarousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - medalsCarousel.offsetLeft;
    const walk = (x - startX) * 2;
    medalsCarousel.scrollLeft = scrollLeft - walk;
});

// Touch events للموبايل
let touchStartX = 0;
let touchStartScrollLeft = 0;

medalsCarousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - medalsCarousel.offsetLeft;
    touchStartScrollLeft = medalsCarousel.scrollLeft;
});

medalsCarousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - medalsCarousel.offsetLeft;
    const walk = (x - touchStartX) * 2;
    medalsCarousel.scrollLeft = touchStartScrollLeft - walk;
});

// ====== تأثيرات الأوسمة - Medal Items Effects ======
const medalItems = document.querySelectorAll('.medal-item');

medalItems.forEach((medal, index) => {
    // تأثير تحميل متسلسل
    medal.style.opacity = '0';
    medal.style.transform = 'scale(0.8)';

    setTimeout(() => {
        medal.style.transition = 'all 0.5s ease';
        medal.style.opacity = '1';
        medal.style.transform = 'scale(1)';
    }, 100 * index);

    // تأثير عند النقر
    medal.addEventListener('click', () => {
        // تأثير اهتزاز
        medal.style.animation = 'none';
        setTimeout(() => {
            medal.style.animation = 'shake 0.5s';
        }, 10);

        // إظهار تفاصيل الوسام (يمكن إضافة modal هنا)
        console.log(`تم النقر على الوسام ${index + 1}`);
    });
});

// ====== تأثيرات الأجزاء - Juz Items Effects ======
const juzItems = document.querySelectorAll('.juz-item');

juzItems.forEach((juz, index) => {
    // تأثير تحميل متسلسل
    juz.style.opacity = '0';
    juz.style.transform = 'translateY(20px)';

    setTimeout(() => {
        juz.style.transition = 'all 0.3s ease';
        juz.style.opacity = '1';
        juz.style.transform = 'translateY(0)';
    }, 50 * index);

    // تأثير عند النقر
    juz.addEventListener('click', () => {
        if (juz.classList.contains('completed')) {
            // عرض تفاصيل الجزء المحفوظ
            showJuzDetails(index + 1, 'completed');
        } else if (juz.classList.contains('in-progress')) {
            // عرض تقدم الحفظ
            showJuzDetails(index + 1, 'in-progress');
        } else {
            // بدء الحفظ
            showJuzDetails(index + 1, 'not-started');
        }
    });
});

// ====== عرض تفاصيل الجزء - Show Juz Details ======
function showJuzDetails(juzNumber, status) {
    console.log(`الجزء: ${juzNumber}, الحالة: ${status}`);
    // هنا يمكن إضافة modal أو صفحة جديدة لعرض التفاصيل
}

// ====== حساب التقدم - Calculate Progress ======
function calculateProgress() {
    const totalJuz = juzItems.length;
    const completedJuz = document.querySelectorAll('.juz-item.completed').length;
    const inProgressJuz = document.querySelectorAll('.juz-item.in-progress').length;

    // حساب النسبة (المنجز + نصف قيمة الجاري)
    const percentage = Math.round(((completedJuz + (inProgressJuz * 0.5)) / totalJuz) * 100);

    return percentage;
}

// ====== تحديث شريط التقدم - Update Progress Bar ======
function updateProgress() {
    const percentage = calculateProgress();

    // تحديث النسبة
    progressPercentage.textContent = `${percentage}%`;

    // تحديث شريط التقدم بتأثير
    setTimeout(() => {
        progressBar.style.width = `${percentage}%`;
    }, 500);
}

// ====== تأثيرات بطاقات الجوائز - Award Cards Effects ======
const awardItems = document.querySelectorAll('.award-item');

awardItems.forEach((award, index) => {
    // تأثير تحميل
    award.style.opacity = '0';
    award.style.transform = 'scale(0.9)';

    setTimeout(() => {
        award.style.transition = 'all 0.5s ease';
        award.style.opacity = '1';
        award.style.transform = 'scale(1)';
    }, 200 + (100 * index));

    // تأثير عند النقر
    award.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// ====== زر الإعدادات - Settings Button ======
const settingsButton = document.querySelector('.settings-button');

settingsButton.addEventListener('click', () => {
    console.log('فتح الإعدادات');
    // هنا يمكن فتح صفحة الإعدادات أو modal
    // window.location.href = './settings.html';
});

// ====== تأثير الصورة الشخصية - Avatar Effect ======
const studentAvatar = document.querySelector('.student-avatar');

studentAvatar.addEventListener('click', () => {
    // تأثير دوران
    studentAvatar.style.transform = 'scale(1.1) rotate(360deg)';
    setTimeout(() => {
        studentAvatar.style.transform = 'scale(1) rotate(0deg)';
    }, 500);
});

// ====== Intersection Observer للتأثيرات عند الظهور ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة البطاقات
document.querySelectorAll('.student-card, .awards-card, .missions-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease';
    observer.observe(card);
});

// ====== تهيئة عند التحميل - Initialize on Load ======
window.addEventListener('load', () => {
    // تحديث التقدم
    updateProgress();

    // تأثير ترحيب
    console.log('🎉 مرحباً بك في صفحتك الشخصية!');

    // تحميل البيانات (في التطبيق الحقيقي)
    // loadUserData();
});

// ====== دالة لتحميل بيانات المستخدم - Load User Data ======
async function loadUserData() {
    try {
        // في التطبيق الحقيقي، سيتم جلب البيانات من API
        console.log('جاري تحميل بيانات المستخدم...');

        // محاكاة تأخير الشبكة
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('تم تحميل البيانات بنجاح!');
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
    }
}

// ====== تأثيرات بطاقة القاعة - Classroom Card Effects ======
const classroomInfoItems = document.querySelectorAll('.classroom-info-item');

classroomInfoItems.forEach((item, index) => {
    // تأثير تحميل متسلسل
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';

    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, 300 + (100 * index));

    // تأثير عند النقر
    item.addEventListener('click', function () {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// تأثيرات أيام الدراسة
const dayBadges = document.querySelectorAll('.day-badge');

dayBadges.forEach((badge, index) => {
    // تأثير تحميل
    badge.style.opacity = '0';
    badge.style.transform = 'scale(0.8)';

    setTimeout(() => {
        badge.style.transition = 'all 0.3s ease';
        badge.style.opacity = '1';
        badge.style.transform = 'scale(1)';
    }, 600 + (50 * index));
});

// ====== تأثيرات بطاقة الترتيب - Ranking Card Effects ======
const rankSections = document.querySelectorAll('.rank-section');

rankSections.forEach((section, index) => {
    // تأثير تحميل
    section.style.opacity = '0';
    section.style.transform = 'translateX(30px)';

    setTimeout(() => {
        section.style.transition = 'all 0.6s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateX(0)';
    }, 400 + (200 * index));

    // تأثير عند النقر
    section.addEventListener('click', function () {
        const badge = this.querySelector('.rank-badge');
        badge.style.transform = 'scale(1.15) rotate(5deg)';
        setTimeout(() => {
            badge.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// تأثيرات القاعات الصغيرة
const classroomMinis = document.querySelectorAll('.classroom-mini');

classroomMinis.forEach((mini, index) => {
    // تأثير تحميل متسلسل
    mini.style.opacity = '0';
    mini.style.transform = 'scale(0.9)';

    setTimeout(() => {
        mini.style.transition = 'all 0.4s ease';
        mini.style.opacity = '1';
        mini.style.transform = 'scale(1)';
    }, 800 + (100 * index));

    // تأثير عند التمرير
    mini.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.mini-icon');
        icon.style.transform = 'scale(1.3) rotate(10deg)';
    });

    mini.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.mini-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });

    // تأثير عند النقر
    mini.addEventListener('click', function () {
        console.log('القاعة المختارة:', this.querySelector('.mini-name').textContent);
        // هنا يمكن إضافة navigation لصفحة القاعة
    });
});

// ====== تأثيرات إضافية - Additional Effects ======

// تأثير parallax بسيط عند التمرير
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.student-card, .awards-card, .missions-card');

    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.05;
        card.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// حفظ حالة التبويب المختار
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        localStorage.setItem('activeTab', button.dataset.tab);
    });
});

// استرجاع آخر تبويب مفتوح
window.addEventListener('load', () => {
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        const button = document.querySelector(`[data-tab="${activeTab}"]`);
        if (button) {
            button.click();
        }
    }
});

console.log('✨ تم تحميل صفحة الملف الشخصي بنجاح!');
