import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Provider } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import { NextPageContext } from "next"
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme/theme'
import { Rehydrated } from "aws-appsync-react"
import { initialiseStore } from "../src/stores"
import { getIsServer } from "../src/utils/host"
import { IStore } from "../src/stores";

interface IInitialProps {
  Component: any,
  ctx: NextPageContext
}

export default class MyApp extends App {
  public store: IStore

  static async getInitialProps({ Component, ctx } : IInitialProps) {
    const isServer = getIsServer()
    const store = initialiseStore(isServer)

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps,
    }
  }

  constructor (props: any) {
    super(props)
    this.store = initialiseStore(props.isServer, props.initialState)
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        {/*Material-UI*/}
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {/*Mobx-state-tree*/}
            <Provider store={this.store}>
              <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
