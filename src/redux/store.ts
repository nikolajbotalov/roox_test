import { usersReducer, profileReducer } from './reducers';
import { configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		users: usersReducer,
		profile: profileReducer,
	},
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
