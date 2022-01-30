import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';

import { Input, Textarea, Form, Button } from '../../../shared';

import type { IProfile } from '../../../types/Profile';

import styles from './ProfileForm.module.scss';

interface IProps {
	formFields: IProfile;
	isEdit: boolean;
}

export const ProfileForm = ({ formFields, isEdit }: IProps) => {
	const formik = useFormik({
		initialValues: {
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
			name: yup.string().min(3).required(),
			username: yup.string().min(3).required(),
			email: yup.string().email().required(),
			street: yup.string().min(3).required(),
			city: yup.string().min(3).required(),
			zipcode: yup.string().min(3).required(),
			phone: yup.string().min(5).required(),
			website: yup.string().min(5).required(),
			comment: yup.string().min(5),
		}),
		onSubmit: (values, { resetForm }) => {
			resetForm();
		},
	});

	return (
		<>
			<Form className={styles.ProfileForm} formState={formik.values}>
				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.name })
					}
					labelName="Name"
					name="name"
					onChange={formik.handleChange}
					defaultValue={formik.values.name}
					touched={formik.touched.name}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.username })
					}
					labelName="Username"
					name="username"
					onChange={formik.handleChange}
					defaultValue={formik.values.username}
					touched={formik.touched.username}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.email })
					}
					labelName="E-mail"
					name="email"
					onChange={formik.handleChange}
					defaultValue={formik.values.email}
					touched={formik.touched.email}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.street })
					}
					labelName="Street"
					name="street"
					onChange={formik.handleChange}
					defaultValue={formik.values.street}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.city })
					}
					labelName="City"
					name="city"
					onChange={formik.handleChange}
					defaultValue={formik.values.city}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.zipcode })
					}
					labelName="Zipcode"
					name="zipcode"
					onChange={formik.handleChange}
					defaultValue={formik.values.zipcode}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.phone })
					}
					labelName="Phone"
					name="phone"
					onChange={formik.handleChange}
					defaultValue={formik.values.phone}
					touched={formik.touched.phone}
					readOnly={isEdit}
				/>

				<Input
					className={cn(styles.ProfileForm__field,
						{ [styles.ProfileForm__uneditableField]: isEdit },
						{ [styles.ProfileForm__error]: formik.errors.website })
					}
					labelName="Website"
					name="website"
					onChange={formik.handleChange}
					defaultValue={formik.values.website}
					touched={formik.touched.website}
					readOnly={isEdit}
				/>

				<Textarea
					name="comment"
					readOnly={isEdit}
				></Textarea>

				<Button
					className={cn(styles.ProfileForm__submit,
						{ [styles.ProfileForm__inactiveSubmit]: isEdit })}
					type='submit'
					disabled={isEdit}
				>Отправить</Button>
			</Form>
		</>
	);
};
