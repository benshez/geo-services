import { IUser } from '../../../index';
//import { Locker } from '../../../../modules/core/services/locker/index';

export class User implements IUser {
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

    //constructor(private locker: Locker) { }
    constructor() { }

    getStoredUser() {
        //return JSON.parse(this.locker.get('USER_DETAIL'));
    }
}
