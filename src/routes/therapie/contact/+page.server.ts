//validation du formulaire
/** @type {import('./$types').Actions} */
export const actions = {
    step1: async ({request}) => {
        return {
            step: 2
        };
    },
    step2: async ({request}) => {
        return {
            step: 3
        };
    }
};