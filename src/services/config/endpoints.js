const baseUrl = 'https://dummyapi.io/data/v1/';

export const getPosts = () => `${ baseUrl }post`;
export const getCommentsByPost = (id) => `${ baseUrl }post/${ id }/comment`;
export const getPostUser = (id) => `${ baseUrl }user/${ id }`;