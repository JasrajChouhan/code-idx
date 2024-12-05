import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import './index.css';
import { QueryProvider } from './providers/QueryClientProvider.tsx';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root not found.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      {/* <RouterProvider router={router} /> */}
      <App />
    </QueryProvider>
  </StrictMode>,
);
