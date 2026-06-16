import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider()

export const googleLogin = () => {
  return signInWithPopup(auth, googleProvider)
}

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await updateProfile(userCredentials.user, {
    displayName: `${firstName} ${lastName}`,
  })

  return userCredentials;
};

export const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const guestLogin = () => {
  return signInAnonymously(auth);
}

export const logOut = () => signOut(auth);
