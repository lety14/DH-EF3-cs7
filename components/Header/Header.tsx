import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import useAuth from "../../auth/auth.context";

const Header: FC = () => {
  const { authenticated, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image
          src="/red.png"
          layout="fixed"
          width={50}
          height={50}
          alt="logo"
        />
        <Link href="/">Home</Link>
        <Link href="/faqs">Preguntas Frecuentes</Link>
      </div>
      {!authenticated ? (
        <button className={styles.loginButton}>
          <Link href="/login">Login</Link>
        </button>
      ) : (
        <button className={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
