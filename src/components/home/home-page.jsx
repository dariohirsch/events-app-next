import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => {
	return (
		<main>
			{data.map((event) => (
				<Link href={`/events/${event.id}`} key={event.id} passHref>
					<a>
						<Image src={event.image} width={400} height={300} alt="event image" />
						<h2>{event.title}</h2>
						<p>{event.description}</p>
					</a>
				</Link>
			))}
		</main>
	)
}
