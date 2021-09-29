<<<<<<< HEAD
const path = require('path');

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env');
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local')
]);
=======
const path = require('path')

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env')
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local')
])
>>>>>>> c1001190dd4817bd65f746f7ccc325af6fa3c589

module.exports = {
  client: {
    service: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}']
  },
  service: {
    name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
<<<<<<< HEAD
    localSchemaFile: path.resolve(
      __dirname,
      './node_modules/.temp/graphql/schema.json'
    )
=======
    localSchemaFile: path.resolve(__dirname, './node_modules/.temp/graphql/schema.json')
>>>>>>> c1001190dd4817bd65f746f7ccc325af6fa3c589
  },
  engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: env.VUE_APP_APOLLO_ENGINE_KEY
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> c1001190dd4817bd65f746f7ccc325af6fa3c589
