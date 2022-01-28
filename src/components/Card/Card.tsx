import React from 'react';

import styles from './Card.module.scss';

interface IProps {
	name: string;
	city: string;
	company: string;
}

export const Card = ({ name, city, company }: IProps) => {
	return (
		<div className={styles.Card}>
			<div className={styles.Card__Info}>
				<span className={styles.Card__Text}>ФИО: <strong className={styles.Card__Data}>{name}</strong></span>
				<span className={styles.Card__Text}>Город: <strong className={styles.Card__Data}>{city}</strong></span>
				<span className={styles.Card__Text}>Компания: <strong className={styles.Card__Data}>{company}</strong></span>
			</div>

			<a href="#" className={styles.Card__Link}>Подробнее</a>
		</div>
	);
};
