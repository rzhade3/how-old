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
		const url = `/${encodeURIComponent(movieName)}/${encodeURIComponent(actorName)}`;
		// Redirect to URL
		router.replace(url);
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input name="movieName" placeholder="Movie name" />
				<input name="actorName" placeholder="Actor name" />
				<button type="submit">Search</button>
			</form>
		</div>
	)
}
