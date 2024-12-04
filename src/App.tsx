import { Navbar } from './components/molecules/navbar';
import { LoginForm } from './components/organisms/login-form';

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <LoginForm />
    </div>
  );
};
