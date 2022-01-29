import { fetchUserProfile } from './fetchUserProfile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../../types/User';

const initialState: IProfileState = {
	isLoading: false,
	profile: null
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserProfile.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchUserProfile.fulfilled.type]: (state, action: PayloadAction<IProfileState['profile']>) => {
			state.isLoading = false;
			state.profile = action.payload;
		},
		[fetchUserProfile.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
		},
	},
});

export const profileReducer = profileSlice.reducer;

export interface IProfileState {
	isLoading: boolean;
	profile: IUser | null;
}
