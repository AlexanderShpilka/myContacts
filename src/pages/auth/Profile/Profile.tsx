import { ProfileForm } from 'containers/forms/ProfileForm/ProfileForm';

import { useAuthCleanUp } from 'customHooks/useAuthCleanUp';
import './Profile.css';

export const Profile = () => {
  useAuthCleanUp();

  return (
    <div className="profile-wrapper">
      <ProfileForm />
    </div>
  );
};
