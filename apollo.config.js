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
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7

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
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
  },
  engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: env.VUE_APP_APOLLO_ENGINE_KEY
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
