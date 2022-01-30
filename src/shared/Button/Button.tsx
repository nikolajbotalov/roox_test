import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
}

export const Button = ({ className, onClick, ...rest }: IProps) => {
	return <button className={className} {...rest} onClick={onClick}></button>;
};
