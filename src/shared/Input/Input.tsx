import React, { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	errors?: string;
	touched?: boolean;
}

export const Input: FC<IProps> = ({ touched, errors, ...rest }) => {
	return (
		<>
			<label htmlFor={rest.name}>{rest.name}</label>
			<input {...rest} id={rest.name} />
			{touched && errors ? <span>{errors}</span> : null}
		</>
	);
};
