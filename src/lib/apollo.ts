import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4q42frs2pmj01xn48l71mkk/master",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPH_CMS_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
