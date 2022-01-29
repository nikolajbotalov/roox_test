import React from 'react';

import { UsersContainer } from '../../containers'

import type { ICurrentProfile } from '../../types/CurrentProfile';

interface IProps {
	currentProfileOption: ICurrentProfile;
}

export const UsersPage = ({ currentProfileOption }: IProps) => {
	return <UsersContainer currentProfileOption={currentProfileOption} />;
};
