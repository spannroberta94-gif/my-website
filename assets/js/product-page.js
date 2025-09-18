/**
 * Product Page JS
 * Specific functionality for product pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Product page specific functionality
  
  // Get product ID from the page
  const addToCartButton = document.querySelector('.btn-add-to-cart');
  if (!addToCartButton) return; // Not on a product page
  
  const productId = addToCartButton.getAttribute('data-product-id');
  if (!productId) return;
  
  // Get the product data (mock function assumed)
  const product = getProduct(productId);
  if (!product) return;
  
  // Set up quantity controls
  const quantityInput = document.getElementById('quantity');
  const decreaseBtn = document.querySelector('.quantity-decrease');
  const increaseBtn = document.querySelector('.quantity-increase');
  
  if (quantityInput && decreaseBtn && increaseBtn) {
    decreaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
      }
    });
    
    increaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity < 10) {
        quantityInput.value = quantity + 1;
      }
    });
    
    quantityInput.addEventListener('change', function() {
      let quantity = parseInt(this.value, 10);
      if (isNaN(quantity) || quantity < 1) {
        this.value = 1;
      } else if (quantity > 10) {
        this.value = 10;
      }
    });
  }
  
  // Handle tab navigation
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      tabPanels.forEach(panel => panel.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Handle thumbnail gallery
  const thumbnails = document.querySelectorAll('.thumbnail img');
  const mainImage = document.querySelector('.product-image-main img');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Update active state
      thumbnails.forEach(thumb => thumb.parentElement.classList.remove('active'));
      this.parentElement.classList.add('active');

      // Update main image src
      const newSrc = this.getAttribute('data-fullsize-src') || this.src;
      mainImage.src = newSrc;
      mainImage.alt = this.alt || "Product Image";
    });
  });
});
