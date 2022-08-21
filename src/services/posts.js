import { optionsGET } from './config/options';
import { getPosts, getPostByTag } from './config/endpoints';

export const fetchPosts = async () => {
    try {
        const response = await fetch(getPosts(), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const fetchPostByTag = async (id) => {
    try {
        const response = await fetch(getPostByTag(id), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}