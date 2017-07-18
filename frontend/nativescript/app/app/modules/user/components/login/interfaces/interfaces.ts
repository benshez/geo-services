export interface IUser {
    id: number;
    addressId: number;
    industryId: number;
    username: string;
    usersurname: string;
    logo: string;
    enabled: boolean;
    locked: boolean;
    lastLogin: any;
    expiresAt: any;
    email: string;
    about: string;
    website: string;
    facebook: string;
    twitter: string;
    error: boolean;
    message: string;
    roles: any;
}
