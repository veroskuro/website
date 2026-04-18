import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Easter egg for devs who inspect the console
console.log(
  `%c⬡ VEROSKURO %c\n\n` +
  `%cYou opened the console.\n` +
  `That means you're either debugging, curious, or both.\n` +
  `Either way — respect.\n\n` +
  `If you're here to see how this is built:\n` +
  `React + Vite + Tailwind. No magic, just circuits.\n\n` +
  `→ github.com/veroskuro\n`,
  'color: #e9c176; font-size: 20px; font-weight: bold;',
  '',
  'color: #d5c2c0; font-size: 12px; line-height: 1.6;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
