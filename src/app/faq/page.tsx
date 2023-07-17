import Footbar from "../components/footbar";

export default async function Page() {
	return <main>
		<h1>FAQ</h1>

		<section>
			<h3>
				<strong>Q: What is this site for?</strong>
			</h3>
			<p>
				Ever wonder how old a movie actor was when they made a movie? This site will calculate that for you, based on the age of the actor at the time the movie was released.
			</p>
		</section>

		<section>
			<h3>
				<strong>Q: Why?</strong>
			</h3>
			<p>
				Why not?
			</p>
		</section>

		<section>
			<h3>
				<strong>Q: But this actor wasn't in that movie?</strong>
			</h3>
			<p>
				This site doesn't check whether a given actor was in a given movie. It just checks whether the actor and movie exist in the database.
			</p>
			<p>	
				Checking whether an actor was in a movie requires an extra API call, and I'm too cheap to pay for that.
			</p>
		</section>
		<Footbar />
	</main>
}
