import { useQuery } from "react-query"
import { getAllEvents } from "~/shared/api/event"
import { UserContext } from "~/app"
import { useContext } from "react"
import { Loader } from "~/shared/ui/loader"
import { EventType } from "~/shared/api/event/model"
import { EventCard } from "../eventCard"

const EventList = () => {
	const userId = useContext(UserContext)?.data?.userId

	const { data, isLoading, isError } = useQuery('events', () => getAllEvents(userId))
	if (data) {
		if (isLoading) {
			<Loader />
		} else {
			return (
				data.map((event: EventType) => {
					return (
						<div key={event.eventId}>
							<EventCard username={ event.username } event={event}/>
						</div>
					)
				})
			)
		}
	} else if(!isError) {
		return (
			<>
				<p>Нет событий</p>
			</>
		)
	} else {
		return <p>Что-то пошло не так...</p>
	}
}
export { EventList }
