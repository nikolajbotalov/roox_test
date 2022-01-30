import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';

import { Input, Textarea, Form, Button } from '../../../shared';

import styles from './ProfileForm.module.scss';

interface IProps {
	formFields: IProfile;
	isEdit: boolean;
}

export const ProfileForm = ({ formFields, isEdit }: IProps) => {
	const formik = useFormik({
		initialValues: {
			checking: '',
			name: formFields.name,
			username: formFields.username,
			email: formFields?.email,
			street: formFields?.street,
			city: formFields?.city,
			zipcode: formFields?.zipcode,
			phone: formFields?.phone,
			website: formFields?.website,
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
		<>
			<Form className={styles.ProfileForm}>
				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Name"
					placeholder="name"
					onChange={formik.handleChange}
					defaultValue={formik.values.name}
					touched={formik.touched.name}
					errors={formik.errors.name}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Username"
					placeholder="username"
					onChange={formik.handleChange}
					defaultValue={formik.values.username}
					touched={formik.touched.username}
					errors={formik.errors.username}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="E-mail"
					placeholder="email"
					onChange={formik.handleChange}
					defaultValue={formik.values.email}
					touched={formik.touched.email}
					errors={formik.errors.email}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Street"
					placeholder="street"
					onChange={formik.handleChange}
					defaultValue={formik.values.street}
					errors={formik.errors.street}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="City"
					placeholder="city"
					onChange={formik.handleChange}
					defaultValue={formik.values.city}
					errors={formik.errors.city}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Zipcode"
					placeholder="zipcode"
					onChange={formik.handleChange}
					defaultValue={formik.values.zipcode}
					errors={formik.errors.zipcode}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Phone"
					placeholder="phone"
					onChange={formik.handleChange}
					defaultValue={formik.values.phone}
					touched={formik.touched.phone}
					errors={formik.errors.phone}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit })
					}
					name="Website"
					placeholder="website"
					onChange={formik.handleChange}
					defaultValue={formik.values.website}
					touched={formik.touched.website}
					errors={formik.errors.website}
					readOnly={isEdit}
				/>

				<Textarea
					name="Comment"
					readOnly={isEdit}
				></Textarea>
			</Form>

			<Button className={cn(styles.ProfileForm__submit,
				{ [styles.ProfileForm__inactiveSubmit]: isEdit })}>Отправить</Button>
		</>
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
