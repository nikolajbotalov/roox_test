import React, { FC, TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	errors?: string;
	touched?: boolean;
}

export const Textarea: FC<IProps> = ({ touched, errors, ...rest }) => {
	return (
		<>
			<label htmlFor={rest.name}>{rest.name}</label>
			<textarea {...rest} id={rest.name} />
			{touched && errors ? <span>{errors}</span> : null}
		</>
	);
};
