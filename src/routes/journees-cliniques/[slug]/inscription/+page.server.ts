import { PUBLIC_HOST_API } from '$env/static/public';
import MarkdownIt from 'markdown-it';
let md = new MarkdownIt();
import { z } from 'zod';
import validator from 'validator';

// affichage des données
export const load = async ({ params }) => {
    const endpoint = `${PUBLIC_HOST_API}/items/colloques/${params.slug}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const donnees = data.data;

    donnees.description = md.render(donnees.description);
    donnees.tarifs = md.render(donnees.tarifs);
    donnees.administratif = md.render(donnees.administratif);
    donnees.animateurs = md.render(donnees.animateurs);
    donnees.public = md.render(donnees.public);
    donnees.modalite = md.render(donnees.modalite);

    function formatDate(date: Date) {
        return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    donnees.date_debut = formatDate(donnees.date_debut);
    donnees.date_fin = formatDate(donnees.date_fin);
    
    return {
        colloque: donnees,
        slug: params.slug
    };
};

let answer: any = {};

//validation du formulaire
/** @type {import('./$types').Actions} */
export const actions = {
    step1: async ({request}) => {
        const contactSchemaStep1 = z.object({
            firstname: z
                .string({ required_error: 'Le prénom ne peut pas être vide' })
                .nonempty({ message: 'Le prénom ne peut pas être vide' })
                .trim(),
            lastname: z
                .string({ required_error: 'Le nom ne peut pas être vide' })
                .nonempty({ message: 'Le nom ne peut pas être vide' })
                .trim(),
            phone: z
                .string({ required_error: 'Le numéro de téléphone est obligatoire' })
                .min(10, {message: 'Le numéro de téléphone n\'est pas valide'})
                .refine(validator.isMobilePhone, 'Le numéro de téléphone n\'est pas valide'),
            email: z
                .string({ required_error: 'L\'adresse email ne peut pas être vide' })
                .nonempty({ message: 'L\'adresse email ne peut pas être vide' })
                .trim()
                .email({ message: 'L\'adresse email doit être valide' }),
            address: z
                .string({ required_error: 'L\'adresse ne peut pas être vide' })
                .nonempty({ message: 'L\'adresse ne peut pas être vide' })
                .trim(),
            postalCode: z
                .string({ required_error: 'Le code postal est obligatoire' })
                .nonempty({ message: 'Le code postal est obligatoire' })
                .trim(),
            city: z
                .string({ required_error: 'La ville ne peut pas être vide' })
                .nonempty({ message: 'La ville ne peut pas être vide' })
                .trim(),
        });
        
        const formStep1 = Object.fromEntries(await request.formData());
        try {
            const result = contactSchemaStep1.parse(formStep1);
            answer = {...formStep1};
            console.log(answer);

            const { firstname, lastname, phone, email, address, postalCode, city } = formStep1;
			return {
				firstname,
                lastname,
                phone,
                email,
                address,
                postalCode,
                city,
                step: 2
			};
            
        } catch (err: any) {
            const { fieldErrors: errors } = err.flatten();
            console.log(errors);
			const { firstname, lastname, phone, email, address, postalCode, city } = formStep1;
			return {
				firstname,
                lastname,
                phone,
                email,
                address,
                postalCode,
                city,
				errors
			};
        }
    },
    step2: async ({request}) => {
        const contactSchemaStep2 = z.object({
            connu: z
                .string({ required_error: 'Veuillez sélectionner une réponse' })
                .nonempty({ message: 'Veuillez sélectionner une réponse' })
                .trim(),
            handicap: z
                .string({ required_error: 'Veuillez sélectionner une réponse' })
                .nonempty({ message: 'Veuillez sélectionner une réponse' })
                .trim(),
        });
        
        const formStep2 = Object.fromEntries(await request.formData());
        try {
            const result = contactSchemaStep2.parse(formStep2);
            answer = {...formStep2};
            console.log(answer);

            const { connu, handicap } = formStep2;
			return {
				connu,
                handicap,
                step: 3
			};
            
        } catch (err: any) {
            const { fieldErrors: errors } = err.flatten();
            console.log(errors);
            console.log(formStep2);
			const { connu, handicap, handicapRythme, handicapPedago } = formStep2;
			return {
				connu,
                handicap,
                handicapRythme,
                handicapPedago,
				errors
			};
        }
    }
};

        

