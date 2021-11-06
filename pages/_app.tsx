import { FC } from "react";
import { AppProps } from "next/app";

import "../assets/main.css";
import { UIProvider, useUI } from "../components/ui/context";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout;
  const ui = useUI();
  console.log(ui);

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
