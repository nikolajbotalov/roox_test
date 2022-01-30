import React from 'react';

import { sortByCity, sortByCompany } from '../../redux/reducers';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';

import { Button, Title } from '../../shared';

import styles from './Sort.module.scss';

export const Sort = () => {
	const dispatch = useAppDispatch();

	const sortCity = () => {
		dispatch(sortByCity());
	}

	const sortCompany = () => {
		dispatch(sortByCompany());
	};

	return (
		<div className={styles.Sort}>
			<Title className={styles.Sort__Title} text='Сортировка' />
			<Button className={styles.Sort__City} onClick={sortCity}>по городу</Button>
			<Button className={styles.Sort__Company} onClick={sortCompany}>по компании</Button>
		</div>
	);
};
