import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App.js';

let container = document.getElementById("app");
let root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
