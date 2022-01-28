import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../../api/controllers/Users/UsersController";

export const fetchGetUsers = createAsyncThunk(
	"users/getUsers",
	async () => {
		return UserAPI.getUsersInfo(``);
	}
);
