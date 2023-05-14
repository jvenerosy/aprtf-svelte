import { z } from 'zod';
import validator from 'validator';
import { PUBLIC_HOST_API } from '$env/static/public';
const endpoint = `${PUBLIC_HOST_API}/items/inscription_therapie`;


let answer: any = {};

//validation du formulaire
/** @type {import('./$types').Actions} */
export const actions = {
    step1: async ({request}) => {
        return {
            step: 2
        };
    },
    step2: async ({request}) => {
        const contactSchema = z.object({
            orientation: z
                .string({ required_error: 'Veuillez selectionner une réponse' })
                .nonempty({ message: 'Veuillez selectionner une réponse' })
                .trim(),
            orienteby: z
                .string({ required_error: 'Le nom ne peut pas être vide' })
                .nonempty({ message: 'Le nom ne peut pas être vide' })
                .trim(),
            demande: z
                .string({ required_error: 'Veuillez selectionner une réponse' })
                .nonempty({ message: 'Le nom ne peut pas être vide' })
        });
        
        const form = Object.fromEntries(await request.formData());
        try {
            const result = contactSchema.parse(form);
            answer = Object.assign(answer, form);
            console.log(answer);

            const { orientation, orienteby, demande, therapeute } = form;
			return {
				orientation,
                orienteby,
                demande,
                therapeute,
                answer,
                step: 3
			};
            
        } catch (err: any) {
            const { fieldErrors: errors } = err.flatten();
            console.log(errors);
			const { orientation, orienteby, demande, therapeute } = form;
			return {
				orientation,
                orienteby,
                demande,
                therapeute,
                answer,
                step: 2,
				errors
			};
        }
    },
    step3: async ({request}) => {
        const contactSchema = z.object({
            family: z
                .string({ required_error: 'Veuillez ajouter au moins une réponse' })
                .nonempty({ message: 'Veuillez ajouter au moins une réponse' })
                .trim(),
        });
        
        const form = Object.fromEntries(await request.formData());
        try {
            const result = contactSchema.parse(form);
            answer = Object.assign(answer, form);
            console.log(answer);

            const { family } = form;
			return {
				family,
                answer,
                step: 4
			};
            
        } catch (err: any) {
            const { fieldErrors: errors } = err.flatten();
            console.log(errors);
			const { orientation, orienteby, demande, therapeute } = form;
			return {
				orientation,
                orienteby,
                demande,
                therapeute,
                answer,
                step: 3,
				errors
			};
        }
    },
    step4: async ({request}) => {
        const contactSchema = z.object({
            problem: z
                .string({ required_error: 'Veuillez saisir une réponse' })
                .nonempty({ message: 'Veuillez saisir une réponse' })
                .trim(),
            firstname: z
                .string({ required_error: 'Le prénom ne peut pas être vide' })
                .nonempty({ message: 'Le prénom ne peut pas être vide' })
                .trim(),
            lastname: z
                .string({ required_error: 'Le nom ne peut pas être vide' })
                .nonempty({ message: 'Le nom ne peut pas être vide' })
                .trim(),
            place: z
                .string({ required_error: 'Veuillez saisir une réponse' })
                .nonempty({ message: 'Veuillez saisir une réponse' })
                .trim(),
            email: z
                .string({ required_error: 'L\'email ne peut pas être vide' })
                .nonempty({ message: 'L\'email ne peut pas être vide' })
                .trim()
                .email({ message: 'L\'adresse email doit être valide' }),
            phone: z
                .string({ required_error: 'Le numéro de téléphone ne peut pas être vide' })
                .nonempty({ message: 'Le numéro de téléphone ne peut pas être vide' })
                .refine(validator.isMobilePhone, 'Le numéro de téléphone n\'est pas valide'),
        });
        
        const form = Object.fromEntries(await request.formData());
        try {
            const result = contactSchema.parse(form);
            answer = Object.assign(answer, form);
            console.log(JSON.stringify(answer));

            try {
                const response = await fetch(endpoint, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(answer),
                });
                
            } catch (error) {
                console.error('Erreur lors de la création de l\'article :', error);
                return {
                    etatSend: "error"
                }
            }

			return {
                step: 5
			};
            
        } catch (err: any) {
            const { fieldErrors: errors } = err.flatten();
            console.log(errors);
			const { problem, firstname, lastname, place, email, phone } = form;
			return {
				problem,
                firstname,
                lastname,
                place,
                email,
                phone,
                answer,
                step: 4,
				errors
			};
        }
    }
};