import { httpClient } from "../http-client"
import { EventType } from "./model"

export const getEventById = (eventId: number, userId: number) => {
	return httpClient.get(`get_event/${userId}/${eventId}`).json<EventType>()
}

export const getAllEvents = (userId: number | undefined) => {
	if (userId) return httpClient.get(`get_all_events/${userId}`).json<EventType[]>()
}
