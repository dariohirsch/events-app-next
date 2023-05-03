import Image from "next/image"
import Link from "next/link"

const EventsPage = ({ data }) => {
	return (
		<div>
			<h1>Events</h1>
			<div>
				{data.map((event) => (
					<Link href={`/events/${event.id}`} key={event.id} passHref>
						<a>
							<Image src={event.image} width={200} height={180} alt="image" />
							<h2>{event.title}</h2>
						</a>
					</Link>
				))}
				<div />
			</div>
		</div>
	)
}
export default EventsPage

export async function getStaticProps() {
	const { events_categories } = await import("/tmp/data/data.json")
	return {
		props: {
			data: events_categories,
		},
	}
}
