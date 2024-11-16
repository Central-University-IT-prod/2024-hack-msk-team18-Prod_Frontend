import { httpClient } from "../http-client"
import { UserType } from "./model"


export const getUser = async () => {
	// return await httpClient.post("get_user", { json: { token: "jwt_token" } }).json<UserType>()
	return await httpClient.get("users").json<UserType>()
}

export const updateUser = async (data: object) => {
	// какой-то апдейт пользователя: например изменение депозита (пока нет конкретности)
	return await httpClient.put("update_user", { json: data })
}
