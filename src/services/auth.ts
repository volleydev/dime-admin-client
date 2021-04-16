// Hir kommt alles mit Firebase Auth rein

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import firebase from "firebase";
interface Credentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  username: string;
}

let setters: Dispatch<SetStateAction<User | undefined>>[] = [];

export const signUp = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // POST -> userTable (email firebaseId)
  } catch (error) {
    console.log("authentication error", error);
  }
};

export const signIn = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    if (setters.length) {
      setters.forEach((s) => {
        s(mockUser);
      });
    }
  } catch (error) {
    console.log("signin error", error);
  }

  return;
};

export const signOut = async (): Promise<void> => {
  await mockRequest;
  if (setters.length) {
    setters.forEach((s) => s(undefined));
  }
  return;
};

const setInitialAuth = () => {
  const data = localStorage.getItem("dime_user_cred");
  if (data) return JSON.parse(data);
  return undefined;
};

export const useAuthUser = () => {
  const [authUser, setter] = useState<User | undefined>(setInitialAuth());

  useEffect(() => {
    setters = [...setters, setter];
    return () => {
      setters = setters.filter((s) => s !== setter);
    };
  }, [setter]);

  return authUser;
};

const mockUser = {
  email: "mock@email.de",
  username: "mockusername",
};

// Für später um password zu resetten
// export const requestResetPassword = async (): Promise<void> => {};
// export const resetPassword = async (): Promise<void> => {};

const mockRequest: Promise<void> = new Promise((res) => {
  // mockt ein request der 2sec geht
  // kannst du für UI loading Verhalten nutzen bevor wir Firebase integriert haben
  setTimeout(() => res(), 2000);
});
