import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { loginUser } from "../actions/users";

function LoginPage({ loginUser, login }) {

    const navigate = useNavigate();

    const responseFacebook = async (response) => {
        if (response.accessToken) {
            await loginUser(response);
            navigate('/home', { replace: true });
        }
        else {
            loginUser(null);
        }
    }

    return (
        <div style={ styles.container }>
            <div style={ styles.loginContainer }>
                {!login && <FacebookLogin
                    appId="305279827571865"
                    autoLoad={ true }
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={ responseFacebook }
                    icon="fa-facebook"
                />}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '300px',
        borderRadius: '15px',
        backgroundColor: '#1c1e21'
    }
}

const mapStateToProps = state => ({
    login: state.users.login
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);