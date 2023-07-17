import Link from "next/link";

export default function Footbar() {
	return (
		<footer className="flex justify-center items-center w-full h-24 border-t">
			<ul className="flex justify-center items-center">
				<li className="mx-2"><Link href="/" className="flex justify-center items-center">Home</Link></li>
				<li className="mx-2"><Link href="/faq" className="flex justify-center items-center">FAQ</Link></li>
			</ul>
		</footer>
	)
}
