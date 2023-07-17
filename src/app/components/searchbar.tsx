'use client'

import { useRouter } from 'next/navigation';

export default function Searchbar() {
	const router = useRouter();

	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const searchParams = new URLSearchParams(formData as any);
		const movieName = searchParams.get("movieName")!;
		const actorName = searchParams.get("actorName")!;
		const url = `/age/${encodeURIComponent(movieName)}/${encodeURIComponent(actorName)}`;
		// Redirect to URL
		router.replace(url);
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				How old was
				<input name="actorName" placeholder="Actor name" />
				in
				<input name="movieName" placeholder="Movie name" />
				?
				<button type="submit">Search</button>
			</form>
		</div>
	)
}
