import { RouterProvider } from 'react-router';
import { io } from 'socket.io-client';
import { router } from './router';

export const App: React.FC = () => {
  const socket = io('http://localhost:3000');
  console.log(socket);

  return (
    <div className="min-w-[400px]">
      <RouterProvider router={router} />;
    </div>
  );
};
