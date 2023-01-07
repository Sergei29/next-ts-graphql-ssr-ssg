import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className="px-4 py-5">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
