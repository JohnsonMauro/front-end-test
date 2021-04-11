/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextApp from 'next/app';

import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';

import { globalStyles } from '@styles/global';
import theme from '@styles/theme';
import Page from '@src/Page';

const cache = createCache({ key: 'app' });

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {globalStyles}
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default App;
