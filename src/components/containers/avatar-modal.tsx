import React, { useState } from 'react';
import { LoginForm } from '../organisms/login-form';
import { ModelDialog } from '../molecules/model-dialog';
import { Avatar } from '../atoms/avatar';

export const AvatarModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Avatar onClick={() => setIsOpen(true)} />

      {/* Modal Dialog */}
      {isOpen && (
        <ModelDialog
          onClose={() => setIsOpen(false)}
          isCrossIcon={true}
          isOutsideClose={true}
          width="500px"
        >
          <LoginForm />
        </ModelDialog>
      )}
    </>
  );
};
