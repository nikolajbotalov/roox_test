import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../../api/controllers/Users/UsersController";

interface IRequestProps {
	userId: number;
}

export const fetchUserProfile = createAsyncThunk(
	"users/getUserProfile",
	async (data: { userId: IRequestProps["userId"] } ) => {
		return UserAPI.getUsersInfo(`/${data.userId}`);
	}
);
