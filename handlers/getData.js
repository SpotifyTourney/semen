const clientId = '3dfe1c1bfaa648648a66712b3287ea10';
const clientSecret = '7a5734ab986b4e2182a3fc7e686f5f1a';
const redirectUri = 'http://localhost:3000/home';
const fetch = require('node-fetch');

const getData = async (code) => {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';

    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri
    });

    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
    });
    
    const data = await response.json();

    return data;
}

module.exports = {getData};