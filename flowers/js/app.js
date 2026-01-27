// نظام متجر الزهور - Flower Shop System
// =========================================

// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    // إضافة منتج للسلة
    addItem(productId, quantity = 1) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification(`تم إضافة ${product.name} إلى السلة`);
    }

    // حذف منتج من السلة
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.showNotification('تم حذف المنتج من السلة');
    }

    // تحديث كمية المنتج
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.updateCartUI();
            }
        }
    }

    // حساب الإجمالي
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // عدد المنتجات
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // حفظ في LocalStorage
    saveCart() {
        localStorage.setItem('flowerCart', JSON.stringify(this.items));
    }

    // تحميل من LocalStorage
    loadCart() {
        const savedCart = localStorage.getItem('flowerCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // تفريغ السلة
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }

    // تحديث واجهة السلة
    updateCartUI() {
        const cartCount = document.querySelector('.cart_container span');
        if (cartCount) {
            const itemCount = this.getItemCount();
            cartCount.textContent = itemCount;
            cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }

        // تحديث صفحة السلة إذا كانت مفتوحة
        if (window.location.pathname.includes('cart.html')) {
            this.renderCartPage();
        }
    }

    // عرض إشعار
    showNotification(message) {
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fa fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        // إظهار الإشعار
        setTimeout(() => notification.classList.add('show'), 10);

        // إخفاء وحذف الإشعار
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // عرض صفحة السلة
    renderCartPage() {
        const cartContainer = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');

        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fa fa-shopping-cart"></i>
                    <h3>السلة فارغة</h3>
                    <p>لم تقم بإضافة أي منتجات بعد</p>
                    <a href="index.html" class="btn">تصفح المنتجات</a>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        cartContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="price">${item.price} ر.ع</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fa fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <p class="item-total">${(item.price * item.quantity).toFixed(2)} ر.ع</p>
                <button class="remove-btn" onclick="cart.removeItem(${item.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `).join('');

        // تحديث الملخص
        const subtotal = this.getTotal();
        const shipping = subtotal >= 100 ? 0 : 5;
        const total = subtotal + shipping;

        if (cartSummary) {
            cartSummary.innerHTML = `
                <h3>ملخص الطلب</h3>
                <div class="summary-row">
                    <span>المجموع الفرعي:</span>
                    <span>${subtotal.toFixed(2)} ر.ع</span>
                </div>
                <div class="summary-row">
                    <span>التوصيل:</span>
                    <span>${shipping === 0 ? 'مجاني' : shipping + ' ر.ع'}</span>
                </div>
                ${subtotal >= 100 ? '<p class="free-shipping">🎉 لقد حصلت على توصيل مجاني!</p>' : ''}
                ${subtotal < 100 && subtotal > 0 ? `<p class="almost-free">اطلب ${(100 - subtotal).toFixed(2)} ر.ع أكثر للحصول على توصيل مجاني</p>` : ''}
                <div class="summary-row total">
                    <span>المجموع الكلي:</span>
                    <span>${total.toFixed(2)} ر.ع</span>
                </div>
                <a href="checkout.html" class="checkout-btn">متابعة عملية الدفع</a>
            `;
        }
    }
}

// تهيئة السلة
const cart = new ShoppingCart();

// عرض المنتجات
function displayProducts(productsToShow = productsData, containerId = 'productsList') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsToShow.map(product => `
        <div class="item_card" data-id="${product.id}">
            ${product.sale ? '<span class="sale-badge">خصم</span>' : ''}
            ${product.popular ? '<span class="popular-badge">الأكثر مبيعاً</span>' : ''}
            <img src="${product.images[0]}" alt="${product.name}" onclick="viewProduct(${product.id})">
            <div class="card-content">
                <h5 class="product-name">${product.name}</h5>
                <div class="rating">
                    ${generateStars(product.rating)}
                    <span class="reviews">(${product.reviews})</span>
                </div>
                <div class="price-container">
                    <span class="price">${product.price} ر.ع</span>
                    ${product.oldPrice > 0 ? `<span class="old-price">${product.oldPrice} ر.ع</span>` : ''}
                </div>
                <button class="item_card_btn" onclick="cart.addItem(${product.id})">
                    <i class="fa fa-cart-plus"></i>
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `).join('');
}

// توليد النجوم للتقييم
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fa fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fa fa-star-half-o"></i>';
        } else {
            stars += '<i class="fa fa-star-o"></i>';
        }
    }
    return stars;
}

// عرض منتج معين
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// البحث والفلترة
function setupFilters() {
    const searchInput = document.querySelector('.input_search');
    const categoryFilters = document.querySelectorAll('.category-filter');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = productsData.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.nameEn.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            displayProducts(filtered);
        });
    }

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.dataset.category;
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const filtered = category === 'all'
                ? productsData
                : productsData.filter(p => p.category === category);
            displayProducts(filtered);
        });
    });
}

// عرض الشهادات
function displayTestimonials() {
    const container = document.getElementById('testimonialsList');
    if (!container) return;

    container.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="rating">
                ${generateStars(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <strong>${testimonial.name}</strong>
                <span class="date">${new Date(testimonial.date).toLocaleDateString('ar-SA')}</span>
            </div>
        </div>
    `).join('');
}

// تهيئة الصفحة حسب نوعها
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    // الصفحة الرئيسية
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        displayProducts(productsData.filter(p => p.popular), 'productsList');
        displayTestimonials();
        setupFilters();
    }

    // صفحة السلة
    if (currentPage.includes('cart.html')) {
        cart.renderCartPage();
    }

    // صفحة المنتج
    if (currentPage.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        displayProductDetails(productId);
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// عرض تفاصيل المنتج
function displayProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    const container = document.getElementById('productDetails');
    if (!container) return;

    container.innerHTML = `
        <div class="product-gallery">
            <img id="mainImage" src="${product.images[0]}" alt="${product.name}">
            <div class="thumbnail-gallery">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="${product.name}" 
                         onclick="document.getElementById('mainImage').src='${img}'"
                         class="${index === 0 ? 'active' : ''}">
                `).join('')}
            </div>
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            <div class="rating">
                ${generateStars(product.rating)}
                <span class="reviews">(${product.reviews} تقييم)</span>
            </div>
            <div class="price-container">
                <span class="price">${product.price} ر.ع</span>
                ${product.oldPrice > 0 ? `<span class="old-price">${product.oldPrice} ر.ع</span>` : ''}
                ${product.oldPrice > 0 ? `<span class="discount-badge">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <p class="description">${product.description}</p>
            <div class="features">
                <h3>المميزات:</h3>
                <ul>
                    ${product.features.map(f => `<li><i class="fa fa-check"></i> ${f}</li>`).join('')}
                </ul>
            </div>
            <div class="stock-info ${product.stock < 10 ? 'low-stock' : ''}">
                <i class="fa fa-cube"></i>
                ${product.stock > 0 ? `متوفر (${product.stock} قطعة)` : 'غير متوفر'}
            </div>
            <div class="product-actions">
                <div class="quantity-selector">
                    <button onclick="decreaseQuantity()"><i class="fa fa-minus"></i></button>
                    <input type="number" id="productQuantity" value="1" min="1" max="${product.stock}">
                    <button onclick="increaseQuantity(${product.stock})"><i class="fa fa-plus"></i></button>
                </div>
                <button class="add-to-cart-btn" onclick="cart.addItem(${product.id}, parseInt(document.getElementById('productQuantity').value))">
                    <i class="fa fa-cart-plus"></i>
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `;
}

// زيادة الكمية
function increaseQuantity(max) {
    const input = document.getElementById('productQuantity');
    if (input && parseInt(input.value) < max) {
        input.value = parseInt(input.value) + 1;
    }
}

// تقليل الكمية
function decreaseQuantity() {
    const input = document.getElementById('productQuantity');
    if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// نموذج الطلب
function handleCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const orderData = {
        customer: {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            city: formData.get('city'),
            notes: formData.get('notes')
        },
        items: cart.items,
        total: cart.getTotal(),
        date: new Date().toISOString()
    };

    // حفظ الطلب
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // تفريغ السلة
    cart.clearCart();

    // عرض رسالة النجاح
    showSuccessMessage(orderData);
}

function showSuccessMessage(orderData) {
    const container = document.querySelector('.checkout-container');
    if (container) {
        container.innerHTML = `
            <div class="success-message">
                <i class="fa fa-check-circle"></i>
                <h2>تم استلام طلبك بنجاح!</h2>
                <p>شكراً ${orderData.customer.name} على طلبك</p>
                <p>سيتم التواصل معك قريباً على رقم: ${orderData.customer.phone}</p>
                <p class="order-total">المبلغ الإجمالي: ${orderData.total} ر.ع</p>
                <a href="index.html" class="btn">العودة للصفحة الرئيسية</a>
            </div>
        `;
    }
}
