/**
 * Animations JS
 * Handles all animations throughout the site
 */

document.addEventListener('DOMContentLoaded', function() {
  // Handle on-load animations
  const animateOnLoadElements = document.querySelectorAll('.animate-on-load');
  
  animateOnLoadElements.forEach(element => {
    // Add the appropriate animation class
    if (element.classList.contains('fade-in')) {
      element.style.animation = 'fadeIn 0.8s ease-in-out forwards';
    } else if (element.classList.contains('slide-up')) {
      element.style.animation = 'slideUp 0.8s ease-out forwards';
    } else if (element.classList.contains('slide-right')) {
      element.style.animation = 'slideRight 0.8s ease-out forwards';
    } else if (element.classList.contains('scale-up')) {
      element.style.animation = 'scaleUp 0.8s ease-out forwards';
    } else {
      // Default animation
      element.style.animation = 'fadeIn 0.8s ease-in-out forwards';
    }
    
    // Apply delay if specified
    if (element.classList.contains('delay-100')) {
      element.style.animationDelay = '100ms';
    } else if (element.classList.contains('delay-200')) {
      element.style.animationDelay = '200ms';
    } else if (element.classList.contains('delay-300')) {
      element.style.animationDelay = '300ms';
    } else if (element.classList.contains('delay-400')) {
      element.style.animationDelay = '400ms';
    } else if (element.classList.contains('delay-500')) {
      element.style.animationDelay = '500ms';
    } else if (element.classList.contains('delay-600')) {
      element.style.animationDelay = '600ms';
    } else if (element.classList.contains('delay-800')) {
      element.style.animationDelay = '800ms';
    } else if (element.classList.contains('delay-1000')) {
      element.style.animationDelay = '1000ms';
    }
  });
  
  // Handle on-scroll animations
  function handleScrollAnimations() {
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    scrollElements.forEach(element => {
      // Check if element is in viewport
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = elementTop < window.innerHeight * 0.85;
      
      if (elementVisible) {
        element.classList.add('animate-fade-in');
      }
    });
  }
  
  // Run on initial load and on scroll
  handleScrollAnimations();
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Handle hero section product carousel
  const heroProductCards = document.querySelectorAll('.product-card');
  const indicators = document.querySelectorAll('.indicator');
  
  if (heroProductCards.length > 0) {
    let currentIndex = 0;
    const maxIndex = heroProductCards.length - 1;
    
    // Set up auto-rotation
    setInterval(() => {
      currentIndex = (currentIndex + 1) % (maxIndex + 1);
      updateProductCarousel();
    }, 5000);
    
    // Handle indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateProductCarousel();
      });
    });
    
    // Update carousel display
    function updateProductCarousel() {
      heroProductCards.forEach((card, index) => {
        if (index === currentIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
      
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  }
  
  // Product page thumbnail navigation
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  if (thumbnails.length > 0) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Here you would normally update the main product image
        // Since we're using placeholders, we'll just simulate this
        const mainImage = document.querySelector('.product-image-main .product-placeholder');
        if (mainImage) {
          mainImage.textContent = this.querySelector('.product-placeholder').textContent;
        }
      });
    });
  }
  
  // Product tabs functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all tab buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all tab panels
        const tabPanels = document.querySelectorAll('.tab-panel');
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Show the selected tab panel
        const selectedPanel = document.getElementById(tabId);
        if (selectedPanel) {
          selectedPanel.classList.add('active');
        }
      });
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  if (header) {
    const isTransparent = header.classList.contains('header-transparent');
    
    if (isTransparent) {
      window.addEventListener('scroll', () => {
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
  
  // Mobile menu toggle
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      
      // Update button icon
      const menuIcon = this.querySelector('.icon-menu');
      const closeIcon = this.querySelector('.icon-x');
      
      if (mobileMenu.classList.contains('open')) {
        if (menuIcon) menuIcon.style.display = 'none';
        if (closeIcon) closeIcon.style.display = 'block';
      } else {
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
      }
    });
  }
});