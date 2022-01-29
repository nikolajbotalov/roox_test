import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import { ProfilePage, UsersPage } from './pages';
import { Sort } from './components';

import styles from './App.module.scss';

const App: FC = () => {
	const [currentProfile, setCurrentProfile] = React.useState(1);

	return (
		<div className={styles.Wrapper}>
			<Sort />
			<Routes>
				<Route path='/' element={<UsersPage />} />
				<Route path='profile/:userId' element={<ProfilePage currentProfileOption={{ setCurrentProfile, currentProfile }} />} />
			</Routes>
		</div>
	);
};

export default App;
