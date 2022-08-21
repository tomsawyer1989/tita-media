import { optionsGET } from './config/options';
import { getPostUser } from './config/endpoints';

export const fetchPostUser = async (id) => {
    try {
        const response = await fetch(getPostUser(id), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}