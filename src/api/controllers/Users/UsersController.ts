import { Controller } from "../config/Controller";

class UsersController extends Controller {
	public constructor() {
		super({
			requestUrl: "https://jsonplaceholder.typicode.com/users",
		});
	}

	public async getUsersInfo(url: string) {
		try {
			const response = await this.get(`${url}`); 
			return response.data
		} catch (error) {
			return error;
		}
	}
}

export const UserAPI = new UsersController();
