import { fetchGetUsers } from './fetchUsers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../../types/User';

const initialState: IUsersState = {
	isLoading: false,
	users: null
};

const usersSlice = createSlice({
	name: 'recording',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchGetUsers.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchGetUsers.fulfilled.type]: (state, action: PayloadAction<IUsersState['users']>) => {
			state.isLoading = false;
			state.users = action.payload;
		},
		[fetchGetUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
		},
	},
});

export const usersReducer = usersSlice.reducer;

export interface IUsersState {
	isLoading: boolean;
	users: IUser[] | null;
}
