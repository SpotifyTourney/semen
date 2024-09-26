const fetch = require('node-fetch'); 

const getAlbums = async (token) => {
    const response = await fetch('https://api.spotify.com/v1/me/albums?limit=5', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const userData = await response.json();
    return userData.items;
}

module.exports = {getAlbums}
