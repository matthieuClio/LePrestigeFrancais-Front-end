// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// React router
import { RouterProvider } from 'react-router';
import { router } from './app/router';

// Style
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
