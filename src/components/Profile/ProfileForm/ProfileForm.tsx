import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Input, Textarea, Form } from '../../../shared';

interface IProps {
	formFields: IProfile;
	className: string;
}

export const ProfileForm = ({ formFields, className }: IProps) => {
	const formik = useFormik({
		initialValues: {
			name: formFields?.name || '',
			username: formFields?.username || '',
			email: formFields?.email || '',
			street: formFields?.street || '',
			city: formFields?.city || '',
			zipcode: formFields?.zipcode || '',
			phone: formFields?.phone || '',
			website: formFields?.website || '',
			comment: '',
		},
		validationSchema: yup.object({
			name: yup.string()
				.min(3, "Длина поля должна быть не менее 3 символов")
				.required("Поле обязательно для заполнения"),
			username: yup.string()
				.min(3, "Длина поля должна быть не менее 3 символов")
				.required("Поле обязательно для заполнения"),
			email: yup.string().email("Некорректный email").required("Поле обязательно для заполнения"),
			street: yup.string()
				.min(3, "Длина поля должна быть не менее 3 символов")
				.required("Поле обязательно для заполнения"),
			city: yup.string()
				.min(3, "Длина поля должна быть не менее 3 символов")
				.required("Поле обязательно для заполнения"),
			zipcode: yup.string()
				.min(3, "Длина поля должна быть не менее 3 символов")
				.required("Поле обязательно для заполнения"),
			phone: yup.string()
				.min(5, "Длина поля должна быть не менее 5 символов")
				.required("Поле обязательно для заполнения"),
			website: yup.string()
				.min(5, "Длина поля должна быть не менее 5 символов")
				.required("Поле обязательно для заполнения"),
			comment: yup.string()
				.min(5, "Длина поля должна быть не менее 5 символов"),
		}),
		onSubmit: (values, { resetForm }) => {
			resetForm();
		},
	});

	return (
		<Form className={className}>
			<Input
				name="Name"
				placeholder="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				touched={formik.touched.name}
				errors={formik.errors.name}
				readOnly
			/>

			<Input
				name="Username"
				placeholder="username"
				onChange={formik.handleChange}
				value={formik.values.username}
				touched={formik.touched.username}
				errors={formik.errors.username}
				readOnly
			/>

			<Input
				name="E-mail"
				placeholder="email"
				onChange={formik.handleChange}
				value={formik.values.email}
				touched={formik.touched.email}
				errors={formik.errors.email}
				readOnly
			/>

			<Input
				name="Street"
				placeholder="street"
				onChange={formik.handleChange}
				value={formik.values.street}
				errors={formik.errors.street}
				readOnly
			/>

			<Input
				name="City"
				placeholder="city"
				onChange={formik.handleChange}
				value={formik.values.city}
				errors={formik.errors.city}
				readOnly
			/>

			<Input
				name="Zipcode"
				placeholder="zipcode"
				onChange={formik.handleChange}
				value={formik.values.zipcode}
				errors={formik.errors.zipcode}
				readOnly
			/>

			<Input
				name="Phone"
				placeholder="phone"
				onChange={formik.handleChange}
				value={formik.values.phone}
				touched={formik.touched.phone}
				errors={formik.errors.phone}
				readOnly
			/>

			<Input
				name="Website"
				placeholder="website"
				onChange={formik.handleChange}
				value={formik.values.website}
				touched={formik.touched.website}
				errors={formik.errors.website}
				readOnly
			/>

			<Textarea
				name="Comment"
				readOnly
			></Textarea>
		</Form>
	);
};

export interface IProfile {
	name?: string;
	username?: string;
	email?: string;
	street?: string;
	city?: string;
	zipcode?: string;
	phone?: string;
	website?: string;
	comment?: string;
}