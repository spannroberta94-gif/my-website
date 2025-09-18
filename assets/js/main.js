/**
 * Main JS
 * Core site functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize newsletter form on the homepage
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('newsletter-email');
      const messageDiv = document.getElementById('newsletter-message');
      
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
  
  // Add notification styles
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary);
      color: white;
      padding: 12px 20px;
      border-radius: var(--radius);
      box-shadow: var(--shadow-md);
      transform: translateY(100px);
      opacity: 0;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      z-index: 9999;
    }
    
    .notification.show {
      transform: translateY(0);
      opacity: 1;
    }
  `;
  
  document.head.appendChild(style);
});