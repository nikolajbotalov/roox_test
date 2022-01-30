import React, { FC } from "react";

import type { IProfile } from '../../types/Profile';

interface IProps {
	className: string;
	formState: IProfile;
}

export const Form: FC<IProps> = ({ className, formState, children }) => {
	return (
		<form className={className} onSubmit={(e) => {
			e.preventDefault();
			console.log(JSON.stringify(formState, null, 2))
		}}>
			{children}
		</form>
	);
};
