import { useAuthStore } from '../store';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected Dashboard page!</p>
      <h1>{user?.userId}</h1>
      <h2>{user?.username}</h2>
      <h1>{user?.userId}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};
