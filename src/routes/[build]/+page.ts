import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ params }) => {
    return {
        build: params.build
    }

//   throw error(404, 'Not found');
}