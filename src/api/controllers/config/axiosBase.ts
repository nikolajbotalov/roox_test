import axios from "axios";

export const axiosBase = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/users",
	headers: {
		"Content-type": "application/json",
	},
});
