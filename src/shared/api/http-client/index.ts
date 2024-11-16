import ky from "ky";


export const httpClient = ky.create({
	prefixUrl: "https://{{sensitive_data}}/prod/api"
})
