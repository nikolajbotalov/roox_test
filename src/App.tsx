import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import { ProfilePage, UsersPage } from './pages';

import styles from './App.module.scss';

const App: FC = () => {
	return (
		<div className={styles.Wrapper}>
			<Routes>
				<Route path='/' element={<UsersPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
		</div>
	);
};

export default App;
