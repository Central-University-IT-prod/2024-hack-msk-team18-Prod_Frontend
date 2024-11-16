import { RouterProvider } from "react-router-dom"
import "./styles/global.css"
import { router } from "./routing"
import { useQuery } from "react-query"
import { getUser } from "~/shared/api/user"
import { createContext } from "react"
import { UserDataType } from "~/entities/user/model"

const UserContext = createContext<UserDataType | null>(null)

const App = () => {
	const { data, isLoading, isError } = useQuery({ queryKey: ["user"], queryFn: getUser })
	const userContextValue = {
		data: data,
		isLoading: isLoading,
		isError: isError
	}

	return (
		<UserContext.Provider value={userContextValue}>
			<RouterProvider router={ router } />
		</UserContext.Provider>
	)
}
export default App
export { UserContext }
