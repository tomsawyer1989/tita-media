import React from 'react';
import { connect } from "react-redux";

function Header({ user }) {
    return (
        <div style={ styles.container }>
            <div style={ styles.userContainer }>
                <img style={ styles.userImage } src={ user.picture.data.url } alt="user"/>
                <div style={ styles.userInfo }>
                    <div><strong>{ user.name }</strong></div>
                    <div style={{ textAlign: 'center' }}><small>{ user.email }</small></div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        color: 'white',
        backgroundColor: '#1c1e21'
    },
    userContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    userImage: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
        borderRadius: '50px'
    },
    userInfo: {
        padding: '7px',
        borderRadius: '15px',
        backgroundColor: '#18191A'
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

export default connect(mapStateToProps)(Header);