import Head from "next/head";
import React from "react";
import { FC } from "react";

interface Props {
    children: React.ReactNode;
    title?: string
  }

export const MainLayout: FC<Props> = ({children, title}) => {
  return <>
  <Head>
    <title>{title || 'Pokemon App'}</title>
    <meta name='author' content="Jeronimo Garcia" />
    <meta name="description" content='Info del pokemon xxxxx' />
    <meta name="keywords" content='xxxxx, pokemon, pokedex' />
  </Head>

  {/* {Navbar} */}


    <main>
        {children}
    </main>

  </>;
};

