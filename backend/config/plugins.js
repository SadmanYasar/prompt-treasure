const armor = require('@escape.tech/graphql-armor');

const ApolloArmor = new armor.ApolloArmor();
module.exports = ({ env }) => ({
    graphql: {
        config: {
            playgroundAlways: false,
            defaultLimit: 10,
            maxLimit: 20,
            apolloServer: {
                introspection: false,     // <-- your custom configuration
                ...ApolloArmor.protect()  // <-- add armor protection
            },
        },
    },
    meilisearch: {
        config: {
            // Your meili host
            host: env('MEILI_HOST'),
            // Your master key or private key
            apiKey: env('MEILI_MASTER_KEY'),
        }
    }
});