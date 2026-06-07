import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!emailJsPublicKey) {
  console.warn('Missing EmailJS public key. Add VITE_EMAILJS_PUBLIC_KEY to your .env file.');
} else {
  try {
    emailjs.init(emailJsPublicKey);
    console.log('EmailJS initialized with public key');
  } catch (initError) {
    console.error('Failed to initialize EmailJS:', initError);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
