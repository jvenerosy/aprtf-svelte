import { z } from 'zod';


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
                .nonempty({ message: 'Le nom ne peut pas être vide' }),
            therapeute: z
                .string({ required_error: 'Le nom ne peut pas être vide' })
                .nonempty({ message: 'Le nom ne peut pas être vide' })
                .trim()
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
        return {
            answer,
            step: 4
        };
    },
    step4: async ({request}) => {
        return {
            answer,
            step: 5
        };
    }
};