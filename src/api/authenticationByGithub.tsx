import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { axiosInstance } from '../config/axios-instance';
import { app } from '../config/firebase';

export const authenticationByGithub = async () => {
  const provider = new GithubAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const auth = getAuth(app);

  try {
    // Sign in with Google using Firebase
    const response = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = response.user;

    // Post required user data to the backend
    const requiredUserData = {
      username: displayName,
      email,
      avatar: photoURL,
    };

    const apiResponse = await axiosInstance.post(
      '/api/v1/users/google',
      requiredUserData,
      { withCredentials: true },
    );
    console.log(apiResponse);

    return apiResponse.data; // Return the backend response
  } catch (error: any) {
    console.error('Github Authentication Error:', error);
    throw new Error(
      error.message || 'Github Authentication failed. Please try again.',
    );
  }
};
