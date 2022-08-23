import React from 'react';
import { connect } from "react-redux";
import FacebookLogin from 'react-facebook-login';
import { loginUser } from "../actions/users";

function Login({ loginUser, login }) {

    const responseFacebook = (response) => {
        if (response.accessToken) {
            loginUser(response);
        }
        else {
            loginUser(null);
        }
    }

    return (
        <div>
            <div>
                <div>
                    {!login && <FacebookLogin
                        appId="305279827571865"
                        autoLoad={ true }
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={ responseFacebook }
                        icon="fa-facebook"
                    />}
                </div>
                {login && <div><p>Logged in !!!</p></div>}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    login: state.users.login
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);