import { z } from 'zod';
import { getEnv } from '../config/getEnv';
import { ChangePasswordFormSchame } from '../schemas';

export const checkPasswordRegexMatch = (
  data: z.infer<typeof ChangePasswordFormSchame>,
) => {
  const passwordRegexPattern = new RegExp(
    getEnv('VITE_PASSWORD_REGEX_PATTERN'),
  );
  const { oldPassword, newPassword } = data;

  const errors: string[] = [];

  // Check if the old password matches the pattern
  if (!passwordRegexPattern.test(oldPassword)) {
    errors.push(
      'Old password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.',
    );
  }

  // Check if the new password matches the pattern
  if (!passwordRegexPattern.test(newPassword)) {
    errors.push(
      'New password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.',
    );
  }

  // If there are errors
  if (errors.length > 0) {
    throw new Error(errors.join(' '));
  }
};
