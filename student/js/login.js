/**
 * ====================================
 * صفحة تسجيل الدخول - Login Page
 * Modern Login JavaScript
 * ====================================
 */

// ====== الحصول على العناصر - Get Elements ======
const loginForm = document.getElementById('loginForm');
const idCardInput = document.getElementById('idCard');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordIcon = document.getElementById('passwordIcon');
const idCardValidation = document.getElementById('idCardValidation');
const passwordValidation = document.getElementById('passwordValidation');

// ====== عرض/إخفاء كلمة المرور - Toggle Password ======
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    // تبديل الأيقونة
    passwordIcon.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    
    // تأثير بصري
    togglePasswordBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        togglePasswordBtn.style.transform = 'scale(1)';
    }, 150);
});

// ====== التحقق من الرقم المدني - Validate ID Card ======
function validateIdCard(value) {
    // إزالة المسافات
    value = value.trim();
    
    if (value.length === 0) {
        return {
            valid: false,
            message: ''
        };
    }
    
    // التحقق من أن الرقم يحتوي فقط على أرقام
    if (!/^[0-9]+$/.test(value)) {
        return {
            valid: false,
            message: '⚠️ الرقم المدني يجب أن يحتوي على أرقام فقط'
        };
    }
    
    // التحقق من الطول (8-10 أرقام)
    if (value.length < 8 || value.length > 10) {
        return {
            valid: false,
            message: '⚠️ الرقم المدني يجب أن يكون بين 8-10 أرقام'
        };
    }
    
    return {
        valid: true,
        message: '✓ الرقم صحيح'
    };
}

// ====== التحقق من كلمة المرور - Validate Password ======
function validatePassword(value) {
    if (value.length === 0) {
        return {
            valid: false,
            message: ''
        };
    }
    
    if (value.length < 4) {
        return {
            valid: false,
            message: '⚠️ كلمة المرور قصيرة جداً (4 أحرف على الأقل)'
        };
    }
    
    return {
        valid: true,
        message: '✓ كلمة المرور صحيحة'
    };
}

// ====== عرض رسالة التحقق - Show Validation ======
function showValidation(element, validation) {
    if (validation.message) {
        element.textContent = validation.message;
        element.className = validation.valid ? 'input-validation input-success' : 'input-validation input-error';
    } else {
        element.textContent = '';
        element.className = 'input-validation';
    }
}

// ====== التحقق الفوري - Real-time Validation ======
idCardInput.addEventListener('input', (e) => {
    const validation = validateIdCard(e.target.value);
    showValidation(idCardValidation, validation);
});

idCardInput.addEventListener('blur', (e) => {
    const validation = validateIdCard(e.target.value);
    showValidation(idCardValidation, validation);
});

passwordInput.addEventListener('input', (e) => {
    const validation = validatePassword(e.target.value);
    showValidation(passwordValidation, validation);
});

passwordInput.addEventListener('blur', (e) => {
    const validation = validatePassword(e.target.value);
    showValidation(passwordValidation, validation);
});

// ====== تأثيرات Focus - Focus Effects ======
[idCardInput, passwordInput].forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ====== معالجة تسجيل الدخول - Handle Login ======
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // التحقق النهائي
    const idValidation = validateIdCard(idCardInput.value);
    const passValidation = validatePassword(passwordInput.value);
    
    showValidation(idCardValidation, idValidation);
    showValidation(passwordValidation, passValidation);
    
    if (!idValidation.valid || !passValidation.valid) {
        // تأثير اهتزاز للزر
        loginButton.style.animation = 'shake 0.5s';
        setTimeout(() => {
            loginButton.style.animation = '';
        }, 500);
        return;
    }
    
    // إضافة حالة التحميل
    loginButton.classList.add('loading');
    loginButton.textContent = '';
    loginButton.disabled = true;
    
    // محاكاة عملية تسجيل الدخول (2 ثانية)
    setTimeout(() => {
        // في التطبيق الحقيقي، سيتم إرسال البيانات للسيرفر هنا
        
        // الانتقال لصفحة الملف الشخصي
        window.location.href = './profile.html';
    }, 2000);
});

// ====== تأثير اهتزاز - Shake Animation ======
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ====== تحسين تجربة المستخدم - UX Enhancements ======

// السماح بالضغط على Enter للتسجيل
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// تركيز تلقائي على أول حقل
window.addEventListener('load', () => {
    setTimeout(() => {
        idCardInput.focus();
    }, 500);
});

// منع إرسال النموذج مرتين
let isSubmitting = false;
loginForm.addEventListener('submit', (e) => {
    if (isSubmitting) {
        e.preventDefault();
        return false;
    }
    isSubmitting = true;
});

// ====== تحسينات إضافية - Additional Enhancements ======

// حفظ Accessibility
loginButton.setAttribute('aria-busy', 'false');
loginForm.addEventListener('submit', () => {
    loginButton.setAttribute('aria-busy', 'true');
});

// تحديث placeholder عند focus (اختياري)
const originalPlaceholders = {
    idCard: idCardInput.placeholder,
    password: passwordInput.placeholder
};

idCardInput.addEventListener('focus', function() {
    this.placeholder = 'مثال: 12345678';
});

idCardInput.addEventListener('blur', function() {
    if (!this.value) {
        this.placeholder = originalPlaceholders.idCard;
    }
});

passwordInput.addEventListener('focus', function() {
    this.placeholder = 'أدخل الرمز السري';
});

passwordInput.addEventListener('blur', function() {
    if (!this.value) {
        this.placeholder = originalPlaceholders.password;
    }
});

console.log('✨ تم تحميل صفحة تسجيل الدخول بنجاح!');
