import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o45mt90hbg01xmakli7bpt/master',
  cache: new InMemoryCache()
})