import * as React from 'react';

import NextApp from 'next/app';

export default class App extends NextApp {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
