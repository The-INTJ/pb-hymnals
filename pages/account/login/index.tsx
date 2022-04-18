import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { NextRouter, useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../lib/context";
import { auth } from "../../../lib/firebase";

import styles from "../../../styles/Login.module.scss";

const emailPassSignIn = async (email: string, password: string, router: NextRouter) => {
  try {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      router.replace("/account");
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  } catch (e) {
    console.log(e.code, e.message);
  }
};

const emailPassRegister = async (email: string, password: string) => {
  try {
    createUserWithEmailAndPassword(auth, email, password).catch(function (
      error
    ) {
      var errorMessage = error.message;
      alert(errorMessage);
    });
  } catch (e) {
    console.log(e.code, e.message);
  }
};

export default function Login() {
  const router = useRouter();
  const { user, username } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.mainContent}>
      <div className={styles.inputs}>
        <input
          className={styles.email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          className="default-button"
          onClick={() => emailPassSignIn(email, password, router)}
        >
          Login
        </button>
        <button
          className="default-button"
          onClick={() => emailPassRegister(email, password)}
        >
          Register
        </button>
      </div>
    </div>
  );
}
