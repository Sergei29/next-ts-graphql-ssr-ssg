import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@/graphql/client";
import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
