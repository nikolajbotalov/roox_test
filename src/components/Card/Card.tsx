import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';
import type { ICurrentProfile } from '../../types/CurrentProfile';

interface IProps {
	name?: string;
	city?: string;
	company?: string;
	userId?: number;
	currentProfileOption: ICurrentProfile;
}

export const Card = ({ name, city, company, userId, currentProfileOption }: IProps) => {
	const navigate = useNavigate();

	const goProfilePage = () => {
		navigate(`profile/${userId}`);
		currentProfileOption.setCurrentProfile(userId || 0);
	}

	return (
		<div className={styles.Card}>
			<div className={styles.Card__Info}>
				<span className={styles.Card__Text}>ФИО: <strong className={styles.Card__Data}>{name}</strong></span>
				<span className={styles.Card__Text}>Город: <strong className={styles.Card__Data}>{city}</strong></span>
				<span className={styles.Card__Text}>Компания: <strong className={styles.Card__Data}>{company}</strong></span>
			</div>

			<a className={styles.Card__Link} onClick={goProfilePage}>Подробнее</a>
		</div>
	);
};
