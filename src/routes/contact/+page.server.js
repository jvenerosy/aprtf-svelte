import { z } from 'zod';

const contactSchema = z.object({
	firstName: z
		.string()
        .nonempty({ message: 'Le prénom ne peut pas être vide' })
		.trim(),
	lastName: z
		.string()
        .nonempty({ message: 'Le nom ne peut pas être vide' })
		.trim(),
	raison: z
		.string({ required_error: 'La raison est obligatoire' }),
	email: z
		.string()
        .nonempty({ message: 'L\'adresse email ne peut pas être vide' })
		.trim()
		.email({ message: 'L\'adresse email doit être valide' }),
	message: z
		.string()
        .nonempty({ message: 'Le message ne peut pas être vide' })
		.min(10, { message: 'Le message doit contenir au moins 10 caractères' })
		.trim()
});

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const formData = Object.fromEntries(await request.formData());
		try {
			const result = contactSchema.parse(formData);
			console.log(result);
            return {
                success: true,
            }
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
            console.log(errors);
			const { firstName, lastName, raison, email, message } = formData;
			return {
				firstName,
                lastName,
                raison,
                email,
                message,
				errors
			};
		}
    }
};