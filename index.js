const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect("mongodb+srv://oscardelapresa:TsnqBG28UUeZiU7u@spotifyuserdatabase.fnspe.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyUserDatabase", { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });

