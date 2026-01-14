// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // ================ SPLASH SCREEN ================
    setTimeout(function() {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        
        // Show login modal after splash
        setTimeout(() => {
            showAuthModal();
        }, 500);
    }, 3000);

    // ================ AUTH MODAL ================
    let currentUser = null;
    
    function showAuthModal() {
        document.getElementById('authModal').style.display = 'flex';
    }
    
    function hideAuthModal() {
        document.getElementById('authModal').style.display = 'none';
        document.querySelector('.main-website').style.display = 'block';
    }
    
    // Auth tabs switching
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding form
            authForms.forEach(form => {
                form.classList.remove('active');
                if(form.id === tabName + 'Form') {
                    form.classList.add('active');
                }
            });
        });
    });
    
    // Switch between login/signup
    document.querySelector('.switch-to-signup')?.addEventListener('click', function(e) {
        e.preventDefault();
        authTabs[1].click();
    });
    
    document.querySelector('.switch-to-login')?.addEventListener('click', function(e) {
        e.preventDefault();
        authTabs[0].click();
    });
    
    // Close auth modal
    document.querySelector('.close-auth')?.addEventListener('click', hideAuthModal);
    
    // Login form submission
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Simple validation
        if(email && password) {
            currentUser = {
                email: email,
                name: email.split('@')[0]
            };
            
            // Update UI
            document.querySelector('.user-icon span').textContent = currentUser.name;
            
            // Show success message
            showNotification('Login successful! Welcome back!', 'success');
            hideAuthModal();
        }
    });
    
    // Signup form submission
    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        
        if(name && email && password && phone) {
            currentUser = {
                name: name,
                email: email,
                phone: phone
            };
            
            // Update UI
            document.querySelector('.user-icon span').textContent = name;
            
            // Show success message
            showNotification('Account created successfully! Welcome!', 'success');
            hideAuthModal();
        }
    });

    // ================ PRODUCTS DATA ================
    const products = [
        {
            id: 1,
            name: "Banarasi Silk Saree",
            category: "sarees",
            price: 8999,
            originalPrice: 12999,
            image: "https://images.unsplash.com/photo-1567177662142-20646e8c8d35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Pure Banarasi silk saree with zari work. Perfect for weddings and special occasions.",
            rating: 4.5,
            reviews: 128,
            stock: 15,
            sizes: ["Free Size"],
            colors: ["Red", "Maroon", "Pink"]
        },
        {
            id: 2,
            name: "Gold Plated Temple Necklace",
            category: "jewelry",
            price: 2499,
            originalPrice: 3999,
            image: "https://images.unsplash.com/photo-1596949251659-12dfb0a6d863?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Traditional temple jewelry with gold plating and precious stones.",
            rating: 4.8,
            reviews: 89,
            stock: 8,
            sizes: ["18 inch", "20 inch"],
            colors: ["Gold", "Rose Gold"]
        },
        {
            id: 3,
            name: "Bridal Lehenga Set",
            category: "lehengas",
            price: 19999,
            originalPrice: 29999,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Complete bridal lehenga set with dupatta and blouse. Heavy embroidery work.",
            rating: 4.9,
            reviews: 56,
            stock: 5,
            sizes: ["S", "M", "L", "XL"],
            colors: ["Red", "Maroon", "Gold"]
        },
        {
            id: 4,
            name: "Designer Salwar Suit",
            category: "suits",
            price: 4999,
            originalPrice: 7999,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Contemporary designer salwar suit with intricate embroidery.",
            rating: 4.3,
            reviews: 204,
            stock: 25,
            sizes: ["S", "M", "L"],
            colors: ["Blue", "Green", "Purple"]
        },
        {
            id: 5,
            name: "Pearl Choker Set",
            category: "jewelry",
            price: 3499,
            originalPrice: 4999,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Elegant pearl choker set with matching earrings.",
            rating: 4.6,
            reviews: 167,
            stock: 12,
            sizes: ["16 inch"],
            colors: ["White", "Cream"]
        },
        {
            id: 6,
            name: "Chiffon Saree",
            category: "sarees",
            price: 2999,
            originalPrice: 4999,
            image: "https://images.unsplash.com/photo-1577900230376-9e74a38d4c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Lightweight chiffon saree with printed border.",
            rating: 4.2,
            reviews: 98,
            stock: 30,
            sizes: ["Free Size"],
            colors: ["Yellow", "Orange", "Pink"]
        },
        {
            id: 7,
            name: "Silver Anklets",
            category: "jewelry",
            price: 1299,
            originalPrice: 1999,
            image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Traditional silver anklets with bells.",
            rating: 4.4,
            reviews: 73,
            stock: 40,
            sizes: ["Adjustable"],
            colors: ["Silver"]
        },
        {
            id: 8,
            name: "Anarkali Suit",
            category: "suits",
            price: 3999,
            originalPrice: 5999,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Floor length Anarkali suit with heavy work.",
            rating: 4.7,
            reviews: 142,
            stock: 18,
            sizes: ["S", "M", "L"],
            colors: ["Black", "Navy", "Red"]
        }
    ];

    // ================ CART FUNCTIONALITY ================
    let cart = JSON.parse(localStorage.getItem('saanjhCart')) || [];
    
    function updateCartCount() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = cartCount;
        });
        localStorage.setItem('saanjhCart', JSON.stringify(cart));
    }
    
    function addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        
        if(!product) return;
        
        // Check if already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if(existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity,
                selectedSize: product.sizes[0],
                selectedColor: product.colors[0]
            });
        }
        
        updateCartCount();
        updateCartDisplay();
        showNotification(`${product.name} added to cart!`, 'success');
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartDisplay();
        showNotification('Item removed from cart', 'info');
    }
    
    function updateCartItemQuantity(productId, quantity) {
        const item = cart.find(item => item.id === productId);
        if(item) {
            item.quantity = Math.max(1, quantity);
            updateCartCount();
            updateCartDisplay();
        }
    }
    
    function getCartTotal() {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // ================ DISPLAY PRODUCTS ================
    function displayProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if(!productsGrid) return;
        
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                ${product.originalPrice > product.price ? 
                    `<span class="product-badge">${Math.round(100 - (product.price/product.originalPrice)*100)}% OFF</span>` : ''}
                
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="quick-view-btn" onclick="showQuickView(${product.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
                
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString()}</span>
                        ${product.originalPrice > product.price ? 
                            `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                             <span class="discount">Save ₹${(product.originalPrice - product.price).toLocaleString()}</span>` : ''}
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn-wishlist" onclick="toggleWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ================ UPDATE CART DISPLAY ================
    function updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const totalPrice = document.querySelector('.total-price');
        
        if(!cartItems) return;
        
        if(cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your cart is empty</p>
                    <a href="#products" class="btn-shop">Continue Shopping</a>
                </div>
            `;
            if(totalPrice) totalPrice.textContent = '₹0';
            return;
        }
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
                    <div class="cart-item-options">
                        <div class="quantity-selector">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity-1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity+1})">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        if(totalPrice) {
            totalPrice.textContent = `₹${getCartTotal().toLocaleString()}`;
        }
    }

    // ================ QUICK VIEW MODAL ================
    window.showQuickView = function(productId) {
        const product = products.find(p => p.id === productId);
        if(!product) return;
        
        const modal = document.getElementById('quickViewModal');
        modal.innerHTML = `
            <div class="quick-view-content">
                <button class="close-quick-view">&times;</button>
                <div class="quick-view-grid">
                    <div class="quick-view-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="quick-view-info">
                        <h2>${product.name}</h2>
                        <div class="quick-view-price">
                            <span class="current-price">₹${product.price.toLocaleString()}</span>
                            ${product.originalPrice > product.price ? 
                                `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                        
                        <div class="quick-view-rating">
                            ${generateStars(product.rating)}
                            <span>(${product.reviews} reviews)</span>
                        </div>
                        
                        <p class="quick-view-desc">${product.description}</p>
                        
                        <div class="quick-view-options">
                            <div class="size-options">
                                <h4>Size:</h4>
                                ${product.sizes.map(size => `
                                    <label class="size-option">
                                        <input type="radio" name="size" value="${size}">
                                        ${size}
                                    </label>
                                `).join('')}
                            </div>
                            
                            <div class="color-options">
                                <h4>Color:</h4>
                                ${product.colors.map(color => `
                                    <label class="color-option" style="background-color: ${getColorCode(color)}">
                                        <input type="radio" name="color" value="${color}">
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="quick-view-actions">
                            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn-buy-now" onclick="buyNow(${product.id})">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                        
                        <div class="product-meta">
                            <p><i class="fas fa-box"></i> ${product.stock > 10 ? 'In Stock' : 'Only ' + product.stock + ' left'}</p>
                            <p><i class="fas fa-shipping-fast"></i> Free Delivery</p>
                            <p><i class="fas fa-undo"></i> 30 Days Return</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
        
        // Close modal
        modal.querySelector('.close-quick-view').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
    
    function generateStars(rating) {
        let stars = '';
        for(let i = 1; i <= 5; i++) {
            if(i <= Math.floor(rating)) {
                stars += '<i class="fas fa-star"></i>';
            } else if(i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }
    
    function getColorCode(color) {
        const colors = {
            'Red': '#ff0000',
            'Maroon': '#800000',
            'Pink': '#ffc0cb',
            'Gold': '#ffd700',
            'Rose Gold': '#b76e79',
            'Blue': '#0000ff',
            'Green': '#008000',
            'Purple': '#800080',
            'White': '#ffffff',
            'Cream': '#fffdd0',
            'Yellow': '#ffff00',
            'Orange': '#ffa500',
            'Silver': '#c0c0c0',
            'Black': '#000000',
            'Navy': '#000080'
        };
        return colors[color] || '#ccc';
    }

    // ================ CART SIDEBAR ================
    document.getElementById('cartIcon')?.addEventListener('click', function(e) {
        e.preventDefault();
        if(!currentUser) {
            showAuthModal();
            return;
        }
        document.getElementById('cartSidebar').classList.add('active');
        updateCartDisplay();
    });
    
    document.querySelector('.close-cart')?.addEventListener('click', function() {
        document.getElementById('cartSidebar').classList.remove('active');
    });
    
    // Close cart on outside click
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        if(cartSidebar.classList.contains('active') && 
           !cartSidebar.contains(e.target) && 
           !e.target.closest('.cart-icon')) {
            cartSidebar.classList.remove('active');
        }
    });

    // ================ SLIDER FUNCTIONALITY ================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
    document.querySelector('.next-slide')?.addEventListener('click', function() {
        showSlide((currentSlide + 1) % totalSlides);
    });
    
    document.querySelector('.prev-slide')?.addEventListener('click', function() {
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide((currentSlide + 1) % totalSlides);
    }, 5000);

    // ================ SEARCH FUNCTIONALITY ================
    const searchInput = document.querySelector('.search-box input');
    searchInput?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if(searchTerm.length > 2) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            // You can implement search results display here
        }
    });

    // ================ WISHLIST ================
    let wishlist = JSON.parse(localStorage.getItem('saanjhWishlist')) || [];
    
    window.toggleWishlist = function(productId) {
        if(!currentUser) {
            showAuthModal();
            return;
        }
        
        const index = wishlist.indexOf(productId);
        const btn = event.target.closest('.btn-wishlist');
        
        if(index === -1) {
            wishlist.push(productId);
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.style.color = '#dc3545';
            showNotification('Added to wishlist!', 'success');
        } else {
            wishlist.splice(index, 1);
            btn.innerHTML = '<i class="far fa-heart"></i>';
            btn.style.color = '';
            showNotification('Removed from wishlist', 'info');
        }
        
        localStorage.setItem('saanjhWishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    };
    
    function updateWishlistCount() {
        const wishlistCount = wishlist.length;
        document.querySelectorAll('.wishlist-icon .count').forEach(el => {
            el.textContent = wishlistCount;
        });
    }

    // ================ CHECKOUT ================
    document.querySelector('.btn-checkout')?.addEventListener('click', function() {
        if(!currentUser) {
            showAuthModal();
            return;
        }
        
        if(cart.length === 0) {
            showNotification('Your cart is empty!', 'warning');
            return;
        }
        
        // Simulate payment process
        showNotification('Redirecting to payment gateway...', 'info');
        
        setTimeout(() => {
            const total = getCartTotal();
            showNotification(`Payment of ₹${total.toLocaleString()} successful! Order placed.`, 'success');
            
            // Clear cart after successful order
            cart = [];
            updateCartCount();
            updateCartDisplay();
            
            // Close cart sidebar
            document.getElementById('cartSidebar').classList.remove('active');
        }, 2000);
    });

    // ================ BUY NOW FUNCTION ================
    window.buyNow = function(productId) {
        if(!currentUser) {
            showAuthModal();
            return;
        }
        
        // Add to cart and checkout immediately
        addToCart(productId);
        document.getElementById('cartSidebar').classList.add('active');
        updateCartDisplay();
        
        // Close quick view
        document.getElementById('quickViewModal').style.display = 'none';
    };

    // ================ UTILITY FUNCTIONS ================
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateCartItemQuantity;
    
    function showNotification(message, type) {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if(existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 
                               type === 'error' ? 'exclamation-circle' : 
                               type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="close-notification">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Close button
        notification.querySelector('.close-notification').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
    }

    // ================ INITIALIZE ================
    function init() {
        displayProducts();
        updateCartCount();
        updateWishlistCount();
        showSlide(0);
        
        // Check if user was already logged in
        const savedUser = localStorage.getItem('saanjhUser');
        if(savedUser) {
            currentUser = JSON.parse(savedUser);
            document.querySelector('.user-icon span').textContent = currentUser.name;
            document.querySelector('.main-website').style.display = 'block';
            document.getElementById('authModal').style.display = 'none';
        }
    }
    
    // Initialize on page load
    init();
});

// Add CSS for notification
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        min-width: 300px;
        border-left: 4px solid #4CAF50;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        border-left-color: #4CAF50;
    }
    
    .notification.error {
        border-left-color: #f44336;
    }
    
    .notification.warning {
        border-left-color: #ff9800;
    }
    
    .notification.info {
        border-left-color: #2196F3;
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification.success i {
        color: #4CAF50;
    }
    
    .notification.error i {
        color: #f44336;
    }
    
    .notification.warning i {
        color: #ff9800;
    }
    
    .notification.info i {
        color: #2196F3;
    }
    
    .notification span {
        flex: 1;
        font-size: 14px;
    }
    
    .close-notification {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }
    
    /* Quick View Modal */
    .quick-view-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1001;
        padding: 20px;
    }
    
    .quick-view-content {
        background: white;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 10px;
        position: relative;
    }
    
    .close-quick-view {
        position: absolute;
        right: 20px;
        top: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 1;
    }
    
    .quick-view-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 40px;
    }
    
    .quick-view-img {
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
    }
    
    .quick-view-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .quick-view-price {
        margin: 20px 0;
    }
    
    .quick-view-price .current-price {
        font-size: 2rem;
        font-weight: bold;
        color: #d4af37;
    }
    
    .quick-view-price .original-price {
        font-size: 1.2rem;
        color: #666;
        text-decoration: line-through;
        margin-left: 15px;
    }
    
    .quick-view-rating {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 15px 0;
    }
    
    .quick-view-rating i {
        color: #FFD700;
    }
    
    .quick-view-desc {
        margin: 20px 0;
        line-height: 1.6;
        color: #666;
    }
    
    .quick-view-options {
        margin: 25px 0;
    }
    
    .size-options, .color-options {
        margin-bottom: 20px;
    }
    
    .size-option {
        display: inline-block;
        margin-right: 10px;
        padding: 8px 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .size-option input {
        display: none;
    }
    
    .size-option input:checked + span {
        color: #d4af37;
        font-weight: bold;
    }
    
    .color-option {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
        position: relative;
        border: 2px solid transparent;
    }
    
    .color-option input {
        display: none;
    }
    
    .color-option input:checked {
        border-color: #d4af37;
    }
    
    .quick-view-actions {
        display: flex;
        gap: 15px;
        margin: 30px 0;
    }
    
    .btn-add-to-cart, .btn-buy-now {
        flex: 1;
        padding: 15px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition: transform 0.3s;
    }
    
    .btn-add-to-cart {
        background: #d4af37;
        color: white;
    }
    
    .btn-buy-now {
        background: #8b4513;
        color: white;
    }
    
    .btn-add-to-cart:hover, .btn-buy-now:hover {
        transform: translateY(-2px);
    }
    
    .product-meta {
        border-top: 1px solid #eee;
        padding-top: 20px;
        margin-top: 20px;
    }
    
    .product-meta p {
        margin: 8px 0;
        color: #666;
    }
    
    .product-meta i {
        color: #d4af37;
        margin-right: 10px;
    }
    
    /* Cart item styles */
    .cart-item {
        display: flex;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }
    
    .cart-item-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 5px;
    }
    
    .cart-item-details {
        flex: 1;
    }
    
    .cart-item-details h4 {
        margin-bottom: 5px;
        font-size: 14px;
    }
    
    .cart-item-price {
        color: #d4af37;
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    .cart-item-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .quantity-selector {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .quantity-selector button {
        width: 25px;
        height: 25px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 3px;
        cursor: pointer;
    }
    
    .remove-item {
        background: none;
        border: none;
        color: #f44336;
        cursor: pointer;
        font-size: 12px;
    }
    
    @media (max-width: 768px) {
        .quick-view-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }
        
        .quick-view-img {
            height: 300px;
        }
        
        .notification {
            min-width: auto;
            width: calc(100% - 40px);
            right: 20px;
        }
    }
`;
document.head.appendChild(notificationStyle);
