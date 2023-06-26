import { getAgeAtMovie } from "@/lib/age";
import Result from "@/app/components/result";
import Searchbar from "@/app/components/searchbar";

type Params = {
	movieName: string
	actorName: string
}

export default async function Page({ params }: { params: Params }) {
	const { movieName, actorName } = params;
	// Turn above route params into proper strings by URL unencoding them
	const movieQ = decodeURIComponent(movieName);
	const actorQ = decodeURIComponent(actorName);
	
	try {
		const { person, movie, age } = await getAgeAtMovie(actorQ, movieQ);
		return <main>
			<Searchbar />
			<Result person={person} movie={movie} age={age} />
		</main>
	} catch (error) {
		if (error instanceof Error) {
			return <main>
				<Searchbar />
				<p>{error.message}</p>
			</main>
		}
	}
}
