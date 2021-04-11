import React from 'react';
import Head from 'next/head';

import Footer from '@layout/Footer';
import Header from '@layout/Header';
import Main from '@layout/Main';

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />

        <title>{title}</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </Head>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Page.defaultProps = {
  title: 'Crunch Accounting',
};

export default Page;
