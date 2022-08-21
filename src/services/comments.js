import { optionsGET } from './config/options';
import { getCommentsByPost } from './config/endpoints';

export const fetchCommentsByPost = async (id) => {
    try {
        const response = await fetch(getCommentsByPost(id), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}