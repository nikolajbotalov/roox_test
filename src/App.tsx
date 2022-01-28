import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import { ProfilePage, UsersPage } from './pages';

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path='/users' element={<UsersPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
		</>

	);
};

export default App;
