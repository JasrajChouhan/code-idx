import { Outlet } from 'react-router';
import { DashboardLayout } from '../components/organisms/dashboard-layout';

export const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
