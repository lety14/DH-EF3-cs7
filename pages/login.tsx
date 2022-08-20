import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import useAuth from "../auth/auth.context";
import withTransition from "../HOC/withTransition";

const Login: NextPage = () => {
  const router = useRouter();
  const { authenticated, login } = useAuth();

  useEffect(() => {
    if (authenticated) {
      router.push("/");
    }
  }, [authenticated]);

  const submitUser = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
    });
    const data = await response.json();
    const token = data.token;
    login(token);
  };

  return (
    <main className={styles.container}>
      <Head>
        <title>RandomIn - Iniciar Sesión</title>
        <meta name="description" content="Iniciar Sesión" />
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h2 className={styles.colorText}>Iniciar Sesión</h2>
          <div className={styles.input}>
            <label>Usuario:</label>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <label>Password:</label>
            <input type="password" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={submitUser}>
              Ingresar
            </button>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
    </main>
  );
};

export default withTransition(Login);
