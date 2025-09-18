/**
 * Includes JS
 * Handles including the header and footer components
 */

document.addEventListener('DOMContentLoaded', function() {
  // Load header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    loadHeader(headerContainer);
  }
  
  // Load footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    loadFooter(footerContainer);
  }
});

/**
 * Load header HTML content
 * @param {HTMLElement} container - The container element to load the header into
 */
function loadHeader(container) {
  // Determine if we're on the homepage or a subpage
const isHomepage = window.location.pathname === '/' || 
                   window.location.pathname.endsWith('/index.html') || 
                   window.location.pathname.endsWith('/YqoKey/');
  
  const headerClass = isHomepage ? 'header header-transparent' : 'header';
  const cartItems = JSON.parse(localStorage.getItem('YqoKey-cart') || '[]');
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Generate logo HTML
  const logoHtml = isHomepage
    ? `<a href="../" class="logo"><img src="./assets/logo.png" alt="YqoKey Logo" style="width: 20px;">YqoKey</a>`
    : `<a href="../" class="logo"><img src="../assets/logo.png" alt="YqoKey Logo" style="width: 20px;">YqoKey</a>`;
  
  // Generate header HTML
  const headerHtml = `
    <header class="${headerClass}">
      <div class="container header-container">
        ${logoHtml}
        
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="${isHomepage ? './' : '../'}" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="${isHomepage ? './pages/product-biometric.html' : './product-biometric.html'}" class="nav-link">Biometric Wallet</a>
            </li>
            <li class="nav-item">
              <a href="${isHomepage ? './pages/product-card.html' : './product-card.html'}" class="nav-link">Card Wallet</a>
            </li>
            <li class="nav-item">
              <a href="${isHomepage ? './pages/product-flex.html' : './product-flex.html'}" class="nav-link">Flex Wallet</a>
            </li>
            <li class="nav-item">
              <a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}" class="nav-link">Privacy</a>
            </li>
          </ul>
          
          <a href="${isHomepage ? './pages/cart.html' : './cart.html'}" class="cart-link">
            <span class="icon-shopping-cart"></span>
            <span class="cart-count" style="${cartCount > 0 ? 'display: flex;' : 'display: none;'}">${cartCount}</span>
          </a>
          
          <button class="mobile-menu-button">
            <span class="icon-menu"></span>
            <span class="icon-x" style="display: none;"></span>
          </button>
        </nav>
      </div>
      
      <div class="mobile-menu">
        <ul class="mobile-menu-list">
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './' : '../'}" class="mobile-menu-link">Home</a>
          </li>
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './pages/product-biometric.html' : './product-biometric.html'}" class="mobile-menu-link">Biometric Wallet</a>
          </li>
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './pages/product-card.html' : './product-card.html'}" class="mobile-menu-link">Card Wallet</a>
          </li>
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './pages/product-flex.html' : './product-flex.html'}" class="mobile-menu-link">Flex Wallet</a>
          </li>
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}" class="mobile-menu-link">Privacy</a>
          </li>
          <li class="mobile-menu-item">
            <a href="${isHomepage ? './pages/cart.html' : './cart.html'}" class="mobile-menu-link">Cart ${cartCount > 0 ? `(${cartCount})` : ''}</a>
          </li>
        </ul>
      </div>
    </header>
  `;
  
  // Insert header HTML
  container.innerHTML = headerHtml;
  
  // Add event listener for mobile menu toggle
  const menuButton = container.querySelector('.mobile-menu-button');
  const mobileMenu = container.querySelector('.mobile-menu');
  const menuIcon = container.querySelector('.icon-menu');
  const closeIcon = container.querySelector('.icon-x');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      
      if (mobileMenu.classList.contains('open')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  }
  
  // Handle scroll effect for transparent header
  if (isHomepage) {
    const header = container.querySelector('.header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Initial check
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  }
}


/**
 * Load footer HTML content
 * @param {HTMLElement} container - The container element to load the footer into
 */
function loadFooter(container) {
  // Determine if we're on the homepage or a subpage
  const isHomepage = window.location.pathname === '/' || 
                     window.location.pathname.endsWith('index.html');
  
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Generate footer HTML
  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <div class="footer-logo">YqoKey</div>
            <p>Secure your digital assets with the most advanced crypto hardware wallets.</p>
          
          </div>
          
          <div class="footer-column">
            <h4>Products</h4>
            <ul class="footer-links">
              <li><a href="${isHomepage ? './pages/product-biometric.html' : './product-biometric.html'}">Biometric Wallet</a></li>
              <li><a href="${isHomepage ? './pages/product-card.html' : './product-card.html'}">Card Wallet</a></li>
              <li><a href="${isHomepage ? './pages/product-flex.html' : './product-flex.html'}">Flex Wallet</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Support</h4>
            <ul class="footer-links">
              <li><a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}">Help Center</a></li>
              <li><a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}">Contact Us</a></li>
              <li><a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}">Privacy Policy</a></li>
              <li><a href="${isHomepage ? './pages/privacy.html' : './privacy.html'}">Terms of Service</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form id="footer-newsletter-form">
              <div class="form-group" style="display: flex;">
                <input type="email" id="footer-email" placeholder="Your email address" required class="input-field">
                <button type="submit" class="btn btn-primary">
                  <span class="icon-send"></span>
                </button>
              </div>
              <div id="footer-newsletter-message" class="form-message"></div>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${currentYear} YqoKey. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <div id="cart-notification" class="notification"></div>
  `;
  
  // Insert footer HTML
  container.innerHTML = footerHtml;
  
  // Add newsletter form submission handler
  const newsletterForm = document.getElementById('footer-newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('footer-email');
      const messageDiv = document.getElementById('footer-newsletter-message');
      
      if (emailInput && messageDiv) {
        const email = emailInput.value.trim();
        
        if (email) {
          // Simulate successful subscription
          messageDiv.textContent = 'Thank you for subscribing!';
          messageDiv.className = 'form-message success';
          emailInput.value = '';
          
          // Clear message after 3 seconds
          setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'form-message';
          }, 3000);
        } else {
          messageDiv.textContent = 'Please enter a valid email address.';
          messageDiv.className = 'form-message error';
        }
      }
    });
  }
}