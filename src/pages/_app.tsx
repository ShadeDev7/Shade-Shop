import type { AppProps } from "next/app";
import Head from "next/head";

import AppProvider from "context/AppProvider";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ShadeShop</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
            </Head>

            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}

export default MyApp;
