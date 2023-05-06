import { PUBLIC_HOST_API } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    return {
        deploymentGitBranch: "develop"
    };
}