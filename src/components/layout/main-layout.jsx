import { Footer } from "../footer/footer"
import { Header } from "../header/header"

export const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
