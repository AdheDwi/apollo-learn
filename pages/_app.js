import "../styles/global.css";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const token = "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";
  const client = useApollo(pageProps?.initialApolloState, token);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
