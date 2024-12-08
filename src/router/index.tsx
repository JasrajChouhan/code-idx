import { createBrowserRouter } from 'react-router';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Services } from '../pages/services';
import { Contact } from '../pages/contact';
import { Dashboard } from '../pages/dashboard';
import { Navbar } from '../components/molecules/navbar';
import { ProtectedRoute } from '../protected-router';
import Recent from '../pages/recent';
import Settings from '../pages/settings';
import Playground from '../pages/playground';

// Define the router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          { path: 'recent', element: <Recent /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
      {
        path: '/playground',
        element: (
          <ProtectedRoute>
            <Playground />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
