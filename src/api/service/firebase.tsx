import { initializeApp } from "firebase/app";
import {
 getAuth,
} from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBy8RQu03PKuiuuA3HpTyL5e3YNmKUdkIo",
 authDomain: "yartisan-1a1cd.firebaseapp.com",
 projectId: "yartisan-1a1cd",
 storageBucket: "yartisan-1a1cd.appspot.com",
 messagingSenderId: "644263223169",
 appId: "1:644263223169:web:1b8e90e3f17114cf395280"
};

export const firebaseApplication = initializeApp(firebaseConfig);
export const firebaseAuthentication = getAuth(firebaseApplication);
