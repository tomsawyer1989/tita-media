import { optionsGET } from './config/options';
import { getPosts } from './config/endpoints';

export const fetchPosts = async () => {
    try {
        const response = await fetch(getPosts(), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}