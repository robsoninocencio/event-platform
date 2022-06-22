import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4p832za1ire01xt7yep7vus/master",
    cache: new InMemoryCache(),
});
