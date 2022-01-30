import React from 'react';

import { fetchUserProfile } from '../../redux/reducers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import type { ICurrentProfile } from '../../types/CurrentProfile';

import { Profile } from '../../components';

interface IProps {
	currentProfileOption: ICurrentProfile;
}

export const ProfileContainer = ({ currentProfileOption }: IProps) => {
	const { profile, isLoading } = useAppSelector(state => state.profile)
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchUserProfile({ userId: currentProfileOption.currentProfile }));
	}, [dispatch, currentProfileOption.currentProfile])

	return <Profile profile={profile} isLoading={isLoading} />;
};
