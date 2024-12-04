import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import './index.css';
import { QueryProvider } from './providers/QueryClientProvider.tsx';
import { router } from './router/index.tsx';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root not found.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryProvider>
  </StrictMode>,
);
