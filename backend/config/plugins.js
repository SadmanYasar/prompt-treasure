const armor = require('@escape.tech/graphql-armor');

const ApolloArmor = new armor.ApolloArmor();
module.exports = {
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
};