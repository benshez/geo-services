import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ApiService, User, Locker, ApiServiceParametersOptions } from '../../../index';


@Component({
    moduleId: module.id,
    selector: 'sd-app-login',
    templateUrl: 'tmpl.html',
    styleUrls: ['styles.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    errorMessage: string;
    user: User;
    public loginUser: FormGroup;
    public form: FormGroup;
    public email = new FormControl('', Validators.required);
    public password = new FormControl('', Validators.required);

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions) { }

    ngOnInit() {
        this.form = this.fb.group({
            email: this.email,
            password: this.password
        });
    }

    login() {
        this.apiOptions.cacheKey = 'user';
        this.apiOptions.url = 'user/login';
        this.apiOptions.parameters = this.form.value;
        this.apiOptions.concatApi = true;

        this.apiService.post(this.apiOptions)
            .subscribe(
            (json: any) => this.user = json.user,
            (error: any) => this.errorMessage = <any>error,
            () => this.locker.set('USER_DETAIL', JSON.stringify(this.user)));
    }
}
