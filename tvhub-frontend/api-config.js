// ===================================
// API Configuration for Environment
// ===================================
// This file handles environment variables for frontend

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

console.log('API URL:', API_URL);

// Export for use in other files
window.API_URL = API_URL;

// Example API calls:
// fetch(`${API_URL}/orders`)
// fetch(`${API_URL}/auth/login`, { method: 'POST', ... })
// fetch(`${API_URL}/auth/register`, { method: 'POST', ... })
