import React from 'react';
import Header from './header';

export default function DefaultLayout(props) {
    const { children } = props;

    return (
        <div style={{ marginTop: '80px' }}>
            <Header />
            { children }
        </div>
    );
}