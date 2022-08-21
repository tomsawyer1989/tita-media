const headers = jwt => {
    const session = JSON.parse(localStorage.getItem('session'));
    return {
        'Content-Type': 'application/json',
        Authorization: jwt ? `Bearer ${session.jwt}` : null,
        'app-id': '6301b76bbfc6129df3304440'
    };
};

export const optionsGET = (jwt = false) => ({
    method: 'GET',
    headers: headers(jwt),
});