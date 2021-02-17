import React from 'react';
import GoogleLogin from "react-google-login";
import { login } from "../../api/googleAuth";
import config from "../../config/config.json";

export default (props) => {
    const responseGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
                const result = await login(authResult['code']);
                console.log(authResult);
                props.login(result);
            }
            else {
                throw new Error(authResult);
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="login-page">
            <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                buttonText="Login with google"
                responseType="code"
                redirectUri="postmessage"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}