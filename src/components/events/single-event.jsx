import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useState } from "react"

export const SingleEvent = ({ data }) => {
	const [message, setMessage] = useState("")

	const inputEmail = useRef()
	const router = useRouter()

	const onSubmit = async (e) => {
		e.preventDefault()
		const emailValue = inputEmail.current.value
		const eventId = router?.query.id
		const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		if (!emailValue.match(validRegex)) {
			setMessage("Please introduce a correct email address")
		}

		try {
			//post to api
			const response = await fetch("/api/email-registration", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: emailValue,
					eventId,
				}),
			})
			if (!response.ok) throw new Error(`Error: ${response.status}`)
			const data = await response.json()
			setMessage(data.message)
			inputEmail.current.value = ""
		} catch (error) {
			console.log("ERROR", error)
		}
	}
	return (
		<div>
			<h1>{data.title}</h1>
			<Image src={data.image} width={1000} height={500} alt={data.title} />
			<p>{data.description}</p>
			<form onSubmit={onSubmit}>
				<label>Get registered for this event!</label>
				<input ref={inputEmail} id="email" />
				<button type="submit">Submit</button>
				<p>{message}</p>
			</form>
		</div>
	)
}
