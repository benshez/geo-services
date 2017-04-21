// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// app
import { ApiService, Locker } from '../../../../core/services/index';
import { User, ApiServiceParametersOptions } from '../../../../core/models/index';
import { Config } from '../../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'component.html',
    styleUrls: ['component.css']
})
export class LoginComponent implements OnInit {
    public loginUser: FormGroup;
    public form: FormGroup;
    public email = new FormControl('', Validators.required);
    public password = new FormControl('', Validators.required);

    private model: any = {};
    private errorMessage: string;
    private user: User;
    private returnUrl: string;

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';
        this.form = this.fb.group({
            email: this.email,
            password: this.password
        });
    }

    /*
     * 
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
    login() {
        this.apiOptions.cacheKey = Config.CACHE_KEYS.USER_KEY;
        this.apiOptions.url = Config.API_END_POINTS.USER_LOGIN;
        this.apiOptions.parameters = this.form.value;
        this.apiOptions.concatApi = true;

        this.apiService.post(this.apiOptions)
            .subscribe(
            (json: any) => { this.user = json; },
            (error: any) => this.errorMessage = <any>error,
            () => {
                this.locker.set(Config.LOCKER_KEYS.USER_DETAIL, JSON.stringify(this.user));
                this.router.navigate([this.returnUrl]);
            });
    }
}
