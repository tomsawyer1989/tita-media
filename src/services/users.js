import { optionsGET } from './config/options';
import { getUser } from './config/endpoints';

export const fetchUser = async (id) => {
    try {
        const response = await fetch(getUser(id), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};