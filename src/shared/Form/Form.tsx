import React, { FC } from "react";

interface IProps {
	className: string;
}

export const Form: FC<IProps> = ({ className, children }) => {
	return (
		<form className={className}>
			{children}
		</form>
	);
};
