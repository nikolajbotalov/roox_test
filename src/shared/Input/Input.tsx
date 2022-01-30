import React, { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	errors?: string;
	touched?: boolean;
	labelName?: string;
}

export const Input: FC<IProps> = ({ touched, errors, labelName, ...rest }) => {
	return (
		<>
			<label htmlFor={rest.name}>{labelName}</label>
			<input {...rest} id={rest.name} />
		</>
	);
};
