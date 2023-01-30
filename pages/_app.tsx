import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();
  const chakraTheme = extendTheme({
    colors: {
      nftwhite: {
        50: "#f2f2f2",
        100: "#d9d9d9",
        200: "#bfbfbf",
        300: "#a6a6a6",
        400: "#8c8c8c",
        500: "#808080",
        600: "#737373",
        700: "#595959",
        800: "#404040",
        900: "#262626",
      },
    },
  });
  const emotionCache = createCache({
    key: "emotion-cache",
    prepend: true,
  });

  return (
    <React.Fragment>
      <Head>
        <title>TimeFeed</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
