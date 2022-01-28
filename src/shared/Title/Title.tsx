import React from 'react';

interface IProps {
	className: string;
	text: string;
}

export const Title = ({ className, text }: IProps) => {
	return <h1 className={className}>{text}</h1>;
};
