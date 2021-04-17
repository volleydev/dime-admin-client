// Hir kommt alles mit Firebase Auth rein

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import firebase from "firebase";
import { postNewUser } from "../stores/user";

interface Credentials {
  email: string;
  password: string;
}

let setters: Dispatch<SetStateAction<firebase.User | undefined>>[] = [];

export const listenToAuthStateChange = (): void => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const auth = await firebase.auth();
      if (auth.currentUser) {
        const idToken = await auth.currentUser.getIdToken(false);
        localStorage.setItem("idToken", idToken);
        setters.forEach((s) => s(user));
      }
    } else {
      localStorage.removeItem("idToken");
      setters.forEach((s) => s(undefined));
    }
  });
};

export const signUp = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // POST -> userTable (email firebaseId)
    if (userCredential.user) {
      await postNewUser({ email, firebaseId: userCredential.user.uid });
    }
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
  } catch (error) {
    console.log("signin error", error);
  }

  return;
};

export const signOut = async (): Promise<void> => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log("error signing out");
  }
};

export const useAuthUser = (): firebase.User | undefined => {
  const [authUser, setter] = useState<firebase.User | undefined>();

  useEffect(() => {
    setters = [...setters, setter];
    return () => {
      setters = setters.filter((s) => s !== setter);
    };
  }, [setter]);

  return authUser;
};
