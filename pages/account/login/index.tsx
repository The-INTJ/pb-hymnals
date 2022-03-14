import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { NextResponse } from "next/server";
import React, { useState } from "react";
import { auth, provider } from "../../../firebase/clientApp";

import styles from "../../../styles/Login.module.scss";

const emailPassSignIn = async (email: string, password: string) => {
  try {
    signInWithEmailAndPassword(auth, email, password).catch(function (error) {
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
          onClick={() => emailPassSignIn(email, password)}
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
