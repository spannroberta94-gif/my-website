/**
 * Products JS
 * Contains all product data and helper functions
 */

const products = {
  biometric: {
    id: "biometric",
    name: "YqoKey Biometric Wallet",
    shortDesc: "Secure your assets with cutting-edge fingerprint authentication",
    description: "The YqoKey Biometric Wallet combines military-grade security with the convenience of fingerprint authentication. Store and manage your cryptocurrency with confidence, knowing your digital assets are protected by advanced encryption and biometric verification.",
    price: 159.99,
     image: '../assets/ob1.png', // <- this is required
    specs: [
      { title: "Dimensions", value: "86mm × 54mm × 5.5mm" },
      { title: "Weight", value: "45g" },
      { title: "Connectivity", value: "Bluetooth 5.2, USB-C" },
      { title: "Battery Life", value: "Up to 4 weeks" },
      { title: "Display", value: "1.3\" OLED" },
      { title: "Supported Coins", value: "BTC, ETH, XRP, LTC, and 1000+ more" },
      { title: "Security", value: "CC EAL5+ certified secure element" },
      { title: "Biometric", value: "Fingerprint sensor with liveness detection" }
    ],
    features: [
      "Fingerprint authentication with anti-spoofing technology",
      "Multi-signature support",
      "Encrypted Bluetooth connection",
      "Physical anti-tampering protection",
      "Backup and recovery using 24-word seed phrase",
      "Water and dust resistant (IP68 rated)"
    ]
  },
  card: {
    id: "card",
    name: "YqoKey Card Wallet",
    shortDesc: "Ultra-slim hardware wallet with the convenience of a credit card",
    description: "The YqoKey Card Wallet is the world's thinnest cryptocurrency hardware wallet, designed to fit seamlessly in your physical wallet. Despite its slim profile, it offers uncompromising security with a built-in secure element and intuitive touch controls.",
    price: 119.99,
     image: '../assets/ob4.png', // <- this is required
    specs: [
      { title: "Dimensions", value: "85.60mm × 53.98mm × 0.76mm" },
      { title: "Weight", value: "6g" },
      { title: "Connectivity", value: "NFC, Bluetooth 5.0" },
      { title: "Battery", value: "No battery (passive NFC)" },
      { title: "Display", value: "E-paper display" },
      { title: "Supported Coins", value: "BTC, ETH, BNB, USDT, USDC, and 700+ more" },
      { title: "Security", value: "EAL6+ secure element" },
      { title: "Authentication", value: "PIN code" }
    ],
    features: [
      "Credit card form factor fits in your wallet",
      "No battery required for NFC operation",
      "Cold storage for maximum security",
      "Compatible with mobile wallet app",
      "PIN protection with auto-wipe after failed attempts",
      "Backup and recovery using 12-word seed phrase"
    ]
  },
  flex: {
    id: "flex",
    name: "YqoKey Flex Wallet",
    shortDesc: "The versatile hardware wallet for crypto enthusiasts",
    description: "The YqoKey Flex Wallet is our most versatile hardware security solution, combining robust security features with an intuitive touchscreen interface. Perfect for both beginners and advanced users who need complete control over their digital assets.",
    price: 199.99,
   image: '../assets/ob7.png', // <- this is required
    specs: [
      { title: "Dimensions", value: "72mm × 37mm × 12mm" },
      { title: "Weight", value: "34g" },
      { title: "Connectivity", value: "USB-C, Bluetooth 5.2" },
      { title: "Battery Life", value: "Up to 8 hours active use" },
      { title: "Display", value: "2.8\" color touchscreen" },
      { title: "Supported Coins", value: "1500+ cryptocurrencies and tokens" },
      { title: "Security", value: "Custom secure chip (EAL6+)" },
      { title: "Authentication", value: "PIN code and optional passphrase" }
    ],
    features: [
      "Full-color touchscreen for intuitive operation",
      "Built-in exchange functionality",
      "DeFi app support",
      "NFT management and viewing",
      "Multi-account support",
      "Advanced recovery options with Shamir backup",
      "Open-source firmware with regular security updates"
    ]
  }
};

/**
 * Get a product by ID
 * @param {string} id - The product ID
 * @returns {Object} The product object or null if not found
 */
function getProduct(id) {
  return products[id] || null;
}

/**
 * Format price with currency symbol
 * @param {number} price - The price to format
 * @returns {string} Formatted price
 */
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

/**
 * Get all products as an array
 * @returns {Array} Array of product objects
 */
function getAllProducts() {
  return Object.values(products);
}

// If using as a module in a larger system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getProduct,
    formatPrice,
    getAllProducts,
    products
  };
}