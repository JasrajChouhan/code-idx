import { RouterProvider } from 'react-router';
import { router } from './router';

export const App: React.FC = () => {
  return (
    <div className="min-w-[400px]">
      <RouterProvider router={router} />;
    </div>
  );
};
