import React from 'react';

import type { IUser } from '../../types/User';

interface IProps {
	users: IUser[] | null;
	isLoading: boolean;
}

export const Users = ({ users, isLoading }: IProps) => {
	return <div></div>;
};
