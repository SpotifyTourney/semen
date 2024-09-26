const User = require('../models/User');

const { getData } = require('../handlers/getData');
const { getAlbums } = require('../handlers/getAlbums');

const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error('Failed to fetch users');
            }
        }
    },
    Mutation: {
        createUser: async (_, {code}) => {

            const data = await getData(code);
            const albums = await getAlbums(data.access_token)

            for(album in albums){
                console.log(albums[album].album.name);
                console.log(albums[album].album.release_date);
                console.log(albums[album].album.artists[0].name)
                console.log("----------------------------------")
            }

            return true;
        }
    },
};

module.exports = resolvers;
