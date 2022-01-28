import React from 'react';

import { Button, Title } from '../../shared';

import styles from './Sort.module.scss';

export const Sort = () => {
	return (
		<div className={styles.Sort}>
			<Title className={styles.Sort__Title} text='Сортировка' />
			<Button className={styles.Sort__City}>по городу</Button>
			<Button className={styles.Sort__Company}>по компании</Button>
		</div>
	);
};
