import React, { ButtonHTMLAttributes } from 'react';

export const Button = ({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button className={className} {...rest}></button>;
};
