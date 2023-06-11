import { PUBLIC_HOST_API } from '$env/static/public';
import MarkdownIt from 'markdown-it';
let md = new MarkdownIt();
const endpoint = `${PUBLIC_HOST_API}/items/legals/2`;


export const load = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    const donnees = data.data;

    donnees.contenu = md.render(donnees.contenu);


    return {
        donnees: donnees
    };
};