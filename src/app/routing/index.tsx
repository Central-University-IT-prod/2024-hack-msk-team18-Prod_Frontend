import { createBrowserRouter } from "react-router-dom";
import { CreateEventPage } from "~/pages/createEventPage";
import Home from "~/pages/home";
import Profile from "~/pages/profile";
import { MainLayout } from "~/shared/ui";

const routes = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/profile",
				element: <Profile />
			},
			{
				path: "/create-event",
				element: <CreateEventPage />
			}
		]
	},
]

// export const router = createBrowserRouter(routes, { basename: '/prod-frontend' })
export const router = createBrowserRouter(routes)
