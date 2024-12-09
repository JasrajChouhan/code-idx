import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  userId: string;
  username: string;
  avatar: string;
  email: string;
  userRole: string;
  accessToken?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

// Create Zustand Store
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      // Set user information
      setUser: (user) => set({ user }),

      // Update access token in user state
      setAccessToken: (token) =>
        set((state) => ({
          user: state.user ? { ...state.user, accessToken: token } : null,
        })),

      // Clear user data and logout
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage', // Local storage key
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
