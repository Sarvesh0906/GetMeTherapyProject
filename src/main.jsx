import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <GoogleOAuthProvider clientId="your-google-client-id">
        <App />
    </GoogleOAuthProvider>,
);