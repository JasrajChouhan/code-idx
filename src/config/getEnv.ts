import { z } from 'zod';

export const environmentSchema = z.object({
  NODE_ENV: z.enum(['production', 'development']),
  BACKEND_URL: z.string().url(),
});

export type Environment = z.infer<typeof environmentSchema>;

export const getEnv = <K extends keyof Environment>(
  key: K,
  fallback?: Environment[K],
): Environment[K] => {
  const rawValue = import.meta.env[key] as unknown;
  const parsed = environmentSchema.safeParse({ [key]: rawValue });

  if (!parsed.success || parsed.data[key] === undefined) {
    if (fallback !== undefined) {
      return fallback;
    } else {
      throw new Error(`Missing or invalid environment variable: ${key}.`);
    }
  }

  return parsed.data[key];
};
