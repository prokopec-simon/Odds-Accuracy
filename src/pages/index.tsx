import type { NextPage } from "next";
import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/react";

export function LoginComponent() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Odds Accuracy</title>
      </Head>
      <div>
        <LoginComponent></LoginComponent>
      </div>
    </>
  );
};

export default Home;
