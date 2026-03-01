import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '$lib/data/projet'; // Remplace par l'export exact de tes données

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Projet introuvable');
	}

	return {
		project
	};
};
