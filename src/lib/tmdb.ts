import { MovieResponse, Person } from "moviedb-promise";

export async function movieLink(movie: MovieResponse): Promise<string> {
	return `https://themoviedb.org/movie/${movie.id}`;
}

export async function personLink(person: Person): Promise<string> {
	return `https://themoviedb.org/person/${person.id}`;
}
