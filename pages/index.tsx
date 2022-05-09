import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const logData = () => {
    console.log(session);
  };

  const login = () => {
    try {
      signIn();
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tika Taka Toka</title>
        <meta name="description" content="Casual tic-tac-toe with friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session && session.user ? (
        <>
          <button onClick={() => logData()}>Log data</button>
          <button onClick={() => logout()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => login()}>Sign in</button>
      )}
    </div>
  );
};

export default Home;
