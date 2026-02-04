// Deployment configuration
const isProduction = process.env.NODE_ENV === 'production';
const vercelUrl = process.env.VERCEL_URL;
const netlifyUrl = process.env.URL;

// API base URL configuration
let API_BASE;
if (import.meta.env.VITE_API_URL) {
    // Use VITE_API_URL if set (highest priority)
    API_BASE = import.meta.env.VITE_API_URL;
} else if (isProduction && vercelUrl) {
    // When deployed on Vercel, use the Render backend
    API_BASE = 'https://humanizer-backend-z7dm.onrender.com';
} else if (isProduction && netlifyUrl) {
    // When deployed on Netlify, use the Render backend
    API_BASE = 'https://humanizer-backend-z7dm.onrender.com';
} else if (isProduction) {
    // Production but not on Vercel or Netlify - use Render backend
    API_BASE = 'https://humanizer-backend-z7dm.onrender.com';
} else {
    // Development - local backend
    API_BASE = 'http://localhost:8080';
}

export { API_BASE };