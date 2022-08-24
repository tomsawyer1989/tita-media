import React from "react";

export default function Modal({ show, onClose, title, children }) {

    if (!show) {
        return null;
    }

    return(
        <div style={ styles.container } show={`${ show }`}>
            <div style={ styles.content }>
                <div style={ styles.header }>
                    <h3 style={{ margin: '0px' }}>{ title }</h3>
                    <button style={ styles.close } onClick={ onClose }>&times;</button>
                </div>
                <div style={{ height: '378px' }}>
                    { children }
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        width: '100%',
        maxWidth: '500px',
        height: '420px',
        padding: '10px 15px',
        borderRadius: '15px',
        color: 'white',
        backgroundColor: '#1c1e21'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    close: {
        cursor: 'pointer',
        border: 'none',
        fontSize: '35px',
        color: 'white',
        backgroundColor: '#1c1e21'
    }
}