import { DeleteAccount } from '../components/molecules/delete-account';
import { UploadAvatar } from '../components/molecules/upload-avatar';
import { ChangeEmailLayout } from '../components/organisms/change-email-layout';
import { ChangePasswordLayout } from '../components/organisms/change-password-layout';

function Settings() {
  return (
    <div className="flex flex-col gap-3 ">
      <UploadAvatar />
      <ChangeEmailLayout />
      <ChangePasswordLayout />
      <DeleteAccount />
    </div>
  );
}

export default Settings;
