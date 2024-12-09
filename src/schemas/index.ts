import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password atleat have 6 characters.',
  }),
  username: z.string().min(3, {
    message: 'Name must have atleat have 3 characters.',
  }),
});

export const createProjectSchema = z.object({
  projectName: z.string(),
  projectTechStack: z.string(),
  description: z
    .string()
    .max(300, 'Project descreption can not exceed by 300 characters.'),
});
