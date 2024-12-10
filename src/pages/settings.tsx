import { ChangeEmailLayout } from '../components/organisms/change-email-layout';
import { ChangePasswordLayout } from '../components/organisms/change-password-layout';

function Settings() {
  return (
    <div className="flex flex-col gap-3 ">
      <ChangeEmailLayout />
      <ChangePasswordLayout />
    </div>
  );
}

export default Settings;
