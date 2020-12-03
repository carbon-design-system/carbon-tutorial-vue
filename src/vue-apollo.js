// Use our access token
const AUTH_TOKEN = process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// Target github api
const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || 'https://api.github.com/graphql';

const defaultOptions = {
  // set wsEndpoint to null
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS,

  // Use the form expected by github for authorisation
  getAuth: (tokenName) => `Bearer ${tokenName}`,
};
