import { UserType } from "~/shared/api/user/model"

export interface UserDataType {
	data: UserType | undefined,
	isLoading: boolean,
	isError: boolean
}
