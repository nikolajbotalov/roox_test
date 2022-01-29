import React from 'react';

import type { ICurrentProfile } from '../../types/CurrentProfile';
import { ProfileContainer } from '../../containers';

interface IProps {
	currentProfileOption: ICurrentProfile;
}

export const ProfilePage = ({ currentProfileOption }: IProps) => {
	return <ProfileContainer currentProfileOption={currentProfileOption} />;
};
