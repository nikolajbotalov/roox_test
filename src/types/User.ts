export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IUserAddress | undefined;
	phone: string;
	website: string;
	company: IUserCompany | null;
	comment: string;
}

export interface IUserAddress {
	street: string;
	suite?: string;
	city?: string;
	zipcode?: string;
	geo?: IUserAddressGeo
}

export interface IUserAddressGeo {
	lat?: string;
	lng?: string;
}

interface IUserCompany {
	name?: string;
	catchPhrase?: string;
	bs?: string;
}
