import Link from "next/link"

export const Header = () => {
	return (
		<header>
			<nav>
				<Link href="/" passHref>
					<a>Home</a>
				</Link>
				<Link href="/events" passHref>
					<a>Events</a>
				</Link>
				<Link href="/about-us" passHref>
					<a>About us</a>
				</Link>
			</nav>
		</header>
	)
}
