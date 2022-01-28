import React from 'react';

import type { IUser } from '../../types/User';

import { Title } from '../../shared'
import { Card } from '../../components';

import styles from './Users.module.scss';

interface IProps {
	users: IUser[] | null;
	isLoading: boolean;
}

export const Users = ({ users, isLoading }: IProps) => {
	return (
		<div className={styles.Users}>
			<Title className={styles.Users__Title} text='Список пользователей' />

			{
				!isLoading
					? (
						users?.map(user => (
							<Card key={user.id} name={user.name} city={user.address.city} company={user.company.name} />
						))
					) : null
			}
		</div>
	)
};
