import { Button } from 'antd';
import { useAuthStore } from '../store';
import { useCreateProject } from '../hooks/api/mutaion/useCreateProject';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { mutateAsync: submitProject } = useCreateProject();
  const handleCreateProject = async () => {
    try {
      const response = await submitProject();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected Dashboard page!</p>
      <h1>{user?.userId}</h1>
      <h2>{user?.username}</h2>
      <h1>{user?.userId}</h1>
      <h1>{user?.email}</h1>

      <div className="react-inti-project-btn">
        <Button variant="dashed" onClick={() => handleCreateProject()}>
          Create
        </Button>
      </div>
    </div>
  );
};
