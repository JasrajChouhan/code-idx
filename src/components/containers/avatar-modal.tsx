import React, { useState } from 'react';
import { LoginForm } from '../organisms/login-form';
import { ModelDialog } from '../molecules/model-dialog';
import { Avatar } from '../atoms/avatar';
import { RegisterForm } from '../organisms/register-form';

export const AvatarModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState<'signin' | 'signup'>('signin');

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
          <div
            className={`transition-all duration-300 transform ${
              currentForm === 'signin'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[-100%]'
            }`}
          >
            {currentForm === 'signin' && (
              <LoginForm
                onSwitch={() => setCurrentForm('signup')} // Switch to Sign Up
                onClose={() => setIsOpen(false)}
              />
            )}
          </div>
          <div
            className={`transition-all duration-300 transform ${
              currentForm === 'signup'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[100%]'
            }`}
          >
            {currentForm === 'signup' && (
              <RegisterForm
                onSwitch={() => setCurrentForm('signin')} // Switch to Sign In
                onClose={() => setIsOpen(false)}
              />
            )}
          </div>
        </ModelDialog>
      )}
    </>
  );
};
