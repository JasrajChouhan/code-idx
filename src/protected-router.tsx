import React from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from './store/index';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useAuthStore((state) => state);

  if (!user) {
    return <Navigate to="/" replace />; // Redirect unauthenticated users
  }

  return children;
};
