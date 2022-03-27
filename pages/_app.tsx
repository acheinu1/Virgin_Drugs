import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@services/graphql";
import "@styles/global.css";
import { AppProps } from "next/app";
import Layout from "pages/_layout";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default MyApp;
