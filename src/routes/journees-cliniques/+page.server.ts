import { PUBLIC_HOST_API } from '$env/static/public';
const endpoint = `${PUBLIC_HOST_API}/items/colloques?fields=titre,slug,statut,date_debut,date_fin,lieu,illustration_colloque&sort=date_debut`;


export const load = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    const donnees = data.data;

    return {
        donnees: donnees
    };
};