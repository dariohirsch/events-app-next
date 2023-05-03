import Image from "next/image"
import Link from "next/link"

const EventsPerCityPage = ({ data, pageName }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<h1>Events in {pageName}</h1>
			<div>
				{data.map((event) => (
					<Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref>
						<a>
							<Image width={300} height={300} alt={event.title} src={event.image} />
							<h2>{event.title}</h2>
							<p>{event.description}</p>
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default EventsPerCityPage

export async function getStaticPaths() {
	const { events_categories } = await import("/data/data.json")

	const allPaths = events_categories.map((event) => {
		return {
			params: {
				categories: event.id.toString(),
			},
		}
	})

	return {
		paths: allPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const id = context.params.categories
	const { allEvents } = await import("/data/data.json")

	const data = allEvents.filter((event) => event.city === id)

	return { props: { data, pageName: id } }
}
