import React from 'react';

export default function Header() {
    return (
        <div style={ styles.container }>
            <h4>Header component</h4>
        </div>
    );
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        color: 'white',
        backgroundColor: '#1c1e21'
    }
}