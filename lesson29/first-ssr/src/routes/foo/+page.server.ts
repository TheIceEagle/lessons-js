import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type Pokemon = {
	name: string;
	url: string;
}

type PokemonsList = {
	count: number;
	previous: string | null;
	next: string | null;
	results: Pokemon[];
}

export const load: PageServerLoad<PokemonsList>  = async () => {
	try {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon");

		if (!res.ok) {
			await Promise.reject(`${res.status} - ${res.statusText}`)
		}

		const json: PokemonsList = await res.json();
		return json
	} catch (e) {
		error(400, 'please try later');
	}
}
