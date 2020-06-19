import Vue from 'vue'
import VueApollo from 'vue-apollo'
import {
  createApolloClient,
  restartWebsockets
} from 'vue-cli-plugin-apollo/graphql-client';

// Use our access token
Vue.use(VueApollo)

// Name of the localStorage item
const AUTH_TOKEN = process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// Target github api
const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || 'https://api.github.com/graphql';

// Config
const defaultOptions = {
  // set wsEndpoint to null
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS,

  // Use the form expected by github for authorisation
  getAuth: tokenName => `Bearer ${tokenName}`
};

// Call this in the Vue app file
export function createProvider (options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  })
  apolloClient.wsClient = wsClient

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
