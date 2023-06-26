import { MovieResponse, Person } from "moviedb-promise";
import Link from "next/link";

export default function Result(props: { age: number, movie: MovieResponse, person: Person }) {
	const movieLink = `https://themoviedb.org/movie/${props.movie.id}`;
	const personLink = `https://themoviedb.org/person/${props.person.id}`;

	return (
		<div>
			<p>
				<Link href={personLink}>{props.person.name}</Link> was {props.age} years old when <Link href={movieLink}>{props.movie.title}</Link> was released.
			</p>
		</div>
	)
}
