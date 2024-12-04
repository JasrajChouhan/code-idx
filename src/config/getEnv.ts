import { z } from 'zod';

export const environmentSchema = z.object({
  VITE_NODE_ENV: z.enum(['production', 'development']),
  VITE_BACKEND_URL: z.string().url(),
});

export type Environment = z.infer<typeof environmentSchema>;

const parsedEnv = environmentSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Environment validation failed.');
}

const validatedEnv = parsedEnv.data;
export const getEnv = <K extends keyof Environment>(
  key: K,
  fallback?: Environment[K],
): Environment[K] => {
  const value = validatedEnv[key];
  if (value === undefined) {
    if (fallback !== undefined) {
      return fallback;
    } else {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }
  return value;
};
