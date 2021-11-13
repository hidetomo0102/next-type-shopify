import "keen-slider/keen-slider.min.css";
import { FC } from "react";
import { AppProps } from "next/app";

import "../assets/main.css";
import { UIProvider } from "../components/ui/context";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
