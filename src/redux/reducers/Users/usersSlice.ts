import { fetchGetUsers } from './fetchUsers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../../types/User';

const initialState: IUsersState = {
	isLoading: false,
	users: null
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		sortByCity: (state) => {
			if (state.users !== null) {
				state.users.sort((prev, next) => (
					prev.address.city > next.address.city ? 1 : -1
				))
			}
		},
		sortByCompany: (state) => {
			if (state.users !== null) {
				state.users.sort((prev, next) => (
					prev.company.name > next.company.name ? 1 : -1
				))
			}
		},
	},
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
export const { sortByCity, sortByCompany } = usersSlice.actions;

export interface IUsersState {
	isLoading: boolean;
	users: IUser[] | null;
}
