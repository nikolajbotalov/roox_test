import React from 'react';

import type { IUser } from '../../types/User';

import { Title, Loader } from '../../shared'
import { Card } from '../../components';

import styles from './Users.module.scss';
import type { ICurrentProfile } from '../../types/CurrentProfile';

interface IProps {
	users: IUser[] | null;
	isLoading: boolean;
	currentProfileOption: ICurrentProfile;
}

export const Users = ({ users, isLoading, currentProfileOption }: IProps) => {
	return (
		<div className={styles.Users}>
			<Title className={styles.Users__Title} text='Список пользователей' />

			{
				!isLoading
					? (
						users?.map(user => (
							<Card
								key={user.id}
								name={user.name}
								city={user.address?.city}
								company={user.company?.name}
								userId={user.id}
								currentProfileOption={currentProfileOption}
							/>
						))
					) : <Loader />
			}
		</div>
	)
};
