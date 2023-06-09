import Head from "next/head"
import { HomePage } from "../src/components/home/home-page"

export default function Home({ data }) {
	return (
		<div>
			<Head>
				<title>Envents App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HomePage data={data} />
		</div>
	)
}

//needs to be exported like this
//it will be allways rendered in the server-side
export async function getServerSideProps() {
	const { events_categories } = await import("/tmp/data/data.json")
	return {
		props: {
			data: events_categories,
		},
	}
}
