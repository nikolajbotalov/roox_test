import React from 'react';

import type { IUser } from '../../types/User';
import styles from './Profile.module.scss';
import { ProfileForm } from './ProfileForm';
import { Loader, Title, Button } from '../../shared';

interface IProps {
	profile: IUser | null;
	isLoading: boolean;
}

export const Profile = ({ profile, isLoading }: IProps) => {
	let formFields = {
		name: profile?.name,
		username: profile?.username,
		email: profile?.email,
		street: profile?.address?.street,
		city: profile?.address?.city,
		zipcode: profile?.address?.zipcode,
		phone: profile?.phone,
		website: profile?.website,
	};

	return (
		<div className={styles.Profile}>
			<div className={styles.Profile__header}>
				<Title className={styles.Profile__title} text='Профиль пользователя' />
				<Button className={styles.Profile__edit}>Редактировать</Button>
			</div>

			{isLoading
				? <Loader />
				: <ProfileForm className={styles.Profile__form} formFields={formFields} />
			}

			<Button className={styles.Profile__submit}>Отправить</Button>
		</div>
	);
};