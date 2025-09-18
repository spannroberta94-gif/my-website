/**
 * Cart functionality
 */

// Cart state
let cartItems = [];

// Initialize the cart
function initCart() {
  loadCartFromStorage();
  updateCartDisplay();
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);
  
  if (!product) {
    console.error('Product not found:', productId);
    return;
  }
  
  const existingItemIndex = cartItems.findIndex(item => item.id === productId);
  
  if (existingItemIndex >= 0) {
    cartItems[existingItemIndex].quantity += quantity;
  } else {
  cartItems.push({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image, 
  quantity
});
  }
  
  saveCartToStorage();
  updateCartDisplay();
  showNotification(`${product.name} added to cart`);
}

// Remove item from cart
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartDisplay();
}

// Update item quantity
function updateCartItemQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const itemIndex = cartItems.findIndex(item => item.id === productId);
  if (itemIndex >= 0) {
    cartItems[itemIndex].quantity = quantity;
    saveCartToStorage();
    updateCartDisplay();
  }
}

// Clear the entire cart
function clearCart() {
  cartItems = [];
  saveCartToStorage();
  updateCartDisplay();
}

// Calculate cart subtotal
function calculateSubtotal() {
  return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem('YqoKey-cart', JSON.stringify(cartItems));
}

// Load cart from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('YqoKey-cart');
  cartItems = savedCart ? JSON.parse(savedCart) : [];
}

// Update cart display
function updateCartDisplay() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll('.cart-count');
  
  cartCountElements.forEach(element => {
    if (element) {
      element.textContent = totalItems;
      element.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  });

  // Update cart page if we're on it
  const cartItemsContainer = document.getElementById('cart-items-container');
  if (cartItemsContainer) {
    updateCartPage();
  }
}

// Update cart page display
function updateCartPage() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const emptyCartMessage = document.querySelector('.empty-cart-message');
  const subtotalElement = document.getElementById('cart-subtotal');
  const totalElement = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  const clearCartButton = document.getElementById('clear-cart-button');
  
  if (!cartItemsContainer || !emptyCartMessage) return;
  
  // Clear existing items (except empty cart message)
  while (cartItemsContainer.firstChild) {
    if (cartItemsContainer.firstChild !== emptyCartMessage) {
      cartItemsContainer.removeChild(cartItemsContainer.firstChild);
    }
  }
  
  if (cartItems.length === 0) {
    emptyCartMessage.style.display = 'block';
    if (subtotalElement) subtotalElement.textContent = formatPrice(0);
    if (totalElement) totalElement.textContent = formatPrice(0);
    if (checkoutButton) checkoutButton.disabled = true;
    if (clearCartButton) clearCartButton.disabled = true;
    return;
  }
  
  emptyCartMessage.style.display = 'none';
  if (checkoutButton) checkoutButton.disabled = false;
  if (clearCartButton) clearCartButton.disabled = false;
  
  // Add each cart item
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <div class="cart-item-image">
         <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-title">${item.name}</h3>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-actions">
          <div class="cart-item-quantity">
            <button class="cart-quantity-btn decrease" data-id="${item.id}">-</button>
            <span class="cart-quantity-value">${item.quantity}</span>
            <button class="cart-quantity-btn increase" data-id="${item.id}">+</button>
          </div>
          <button class="cart-item-remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
    
    cartItemsContainer.appendChild(itemElement);
  });
  
  // Update totals
  const subtotal = calculateSubtotal();
  if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
  if (totalElement) totalElement.textContent = formatPrice(subtotal);
  
  // Add event listeners
  addCartEventListeners();
}

// Add event listeners for cart actions
function addCartEventListeners() {
  // Quantity decrease buttons
  document.querySelectorAll('.cart-quantity-btn.decrease').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      const item = cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        updateCartItemQuantity(id, item.quantity - 1);
      }
    });
  });
  
  // Quantity increase buttons
  document.querySelectorAll('.cart-quantity-btn.increase').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      const item = cartItems.find(item => item.id === id);
      if (item) {
        updateCartItemQuantity(id, item.quantity + 1);
      }
    });
  });
  
  // Remove buttons
  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      removeFromCart(id);
    });
  });
  
  // Clear cart button
  const clearCartButton = document.getElementById('clear-cart-button');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', function() {
      if (confirm('Are you sure you want to clear your cart?')) {
        clearCart();
      }
    });
  }
}

// Show notification
function showNotification(message) {
  let notification = document.getElementById('cart-notification');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'cart-notification';
    notification.className = 'notification';
    document.body.appendChild(notification);
  }
  
  notification.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Format price
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

// Get product data
function getProduct(id) {
const products = {
    biometric: {
      id: 'biometric',
      name: 'YqoKey Biometric Wallet',
      price: 159.99,
      image: '../assets/ob1.png'
    },
    card: {
      id: 'card',
      name: 'YqoKey Card Wallet',
      price: 119.99,
      image: '../assets/ob4.png'
    },
    flex: {
      id: 'flex',
      name: 'YqoKey Flex Wallet',
      price: 199.99,
      image: '../assets/ob7.png'
    }
  };
  return products[id];
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initCart();
  
  // Set up product page handlers if on a product page
  const addToCartButton = document.querySelector('.btn-add-to-cart');
  if (addToCartButton) {
    const productId = addToCartButton.getAttribute('data-product-id');
    const quantityInput = document.getElementById('quantity');
    
    if (quantityInput) {
      addToCartButton.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value, 10);
        addToCart(productId, quantity);
      });
    }
  }
});