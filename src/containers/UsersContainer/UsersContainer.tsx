import React from 'react';

import { fetchGetUsers } from '../../redux/reducers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';

import { Users } from '../../components';

export const UsersContainer = () => {
	const { isLoading, users } = useAppSelector(state => state.users)
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchGetUsers());
	}, [dispatch])

	return <Users users={users} isLoading={isLoading} />
};
