const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.CLIENT_SECRET,
    'postmessage'
);

exports.getProfileInfo = async (code) => {
    const r = await client.getToken(code);
    const idToken = r.tokens.id_token;
    
    const ticket = await client_verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return payload;
};