import React from 'react';

import { fetchGetUsers } from '../../redux/reducers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';

import { Users } from '../../components';

import type { ICurrentProfile } from '../../types/CurrentProfile';

interface IProps {
	currentProfileOption: ICurrentProfile;
}

export const UsersContainer = ({ currentProfileOption }: IProps) => {
	const { isLoading, users } = useAppSelector(state => state.users)
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchGetUsers());
	}, [dispatch])

	return <Users users={users} isLoading={isLoading} currentProfileOption={currentProfileOption} />
};
