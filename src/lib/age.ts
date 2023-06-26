import 'server-only'

import { MovieDb, MovieResponse, Person } from 'moviedb-promise';

if (!process.env.TMDB_API_KEY) {
	throw new Error('TMDB_API_KEY environment variable not set!');
}
const moviedb = new MovieDb(process.env.TMDB_API_KEY!);

type AgeAtMovie = {
	person: Person,
	movie: MovieResponse,
	age: number
}

async function getAgeAtMovie(name: string, movie: string): Promise<AgeAtMovie> {
	return Promise.all([getPerson(name), getMovie(movie)])
		.then(async ([person, movie]) => {
			const age = await getAge(movie.release_date!, person.birthday!);
			return {
				person: person,
				movie: movie,
				age: age
			}
		});
}

async function getAge(first: string, second: string): Promise<number> {
	const firstDate = new Date(first);
	const secondDate = new Date(second);

	// Get exact age that person was when movie was released
	var age = firstDate.getFullYear() - secondDate.getFullYear();
	const m = firstDate.getMonth() - secondDate.getMonth();
	if (m < 0 || (m === 0 && secondDate.getDate() < firstDate.getDate())) {
		age--;
	}
	return age
}

async function getMovie(name: string): Promise<MovieResponse> {
	const movieResults = await moviedb.searchMovie({ query: name });

	if (!movieResults.results || movieResults.results.length === 0) {
		throw new Error(`No movie found with name ${name}`);
	}
	
	const movieId = movieResults.results[0].id!;
	return moviedb.movieInfo({ id: movieId });
}

async function getPerson(name: string): Promise<Person> {
	const personResults = await moviedb.searchPerson({ query: name });

	if (!personResults.results || personResults.results.length === 0) {
		throw new Error(`No person found with name ${name}`);
	}

	const personId = personResults.results[0].id!;
	return moviedb.personInfo({ id: personId });
}

export {
	getMovie,
	getPerson,
	getAge,
	getAgeAtMovie
}
