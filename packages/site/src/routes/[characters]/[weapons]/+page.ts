import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		characters: params.characters,
		weapons: params.weapons
	};
};
