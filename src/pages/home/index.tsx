import { Header } from "~/widgits/header"
import { HomeContent } from "~/widgits/homeContent"
import { Login } from "~/widgits/login"
import { createContext, SetStateAction, useState, Dispatch, useContext } from "react"
import { UserContext } from "~/app"
import { useNavigate } from "react-router-dom"

const LoginContext = createContext <Dispatch<SetStateAction<boolean>>>(() => {})

const Home = () => {
	const [loginOpen, setLoginOpen] = useState<boolean>(false)
	const user = useContext(UserContext)
	const navigate = useNavigate()

	const toggleLoginOpen = () => {
		if (user === null) {
			setLoginOpen(!loginOpen)
		} else {
			return navigate("profile")
		}
	}

	return (
		<div className={"w-[100vw] h-[100vh]"}>
			<Login isOpen={loginOpen} setOpen={() => setLoginOpen(!loginOpen)}/>
			<LoginContext.Provider value={toggleLoginOpen}>
				<Header LoginContext={LoginContext}/>
				<HomeContent />
			</LoginContext.Provider>
		</div>
	)
}
export default Home
export { LoginContext }
