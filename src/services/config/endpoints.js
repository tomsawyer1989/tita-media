const baseUrl = 'https://dummyapi.io/data/v1/';

function serialize(obj) {
    const serialzedParams = Object.keys(obj)
        .reduce((accumulator, currentValue) => {
            accumulator.push(`${ currentValue }=${ obj[currentValue] }`);
            return accumulator;
        }, [])
        .join('&');
  
    return `?${ serialzedParams }`;
}

export const getPosts = () => `${ baseUrl }post`;
export const getCommentsByPost = (id) => `${ baseUrl }post/${ id }/comment`;
export const getPostUser = (id) => `${ baseUrl }user/${ id }`;