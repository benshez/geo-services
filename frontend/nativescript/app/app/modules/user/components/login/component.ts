// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// app
import { User } from '../../index';
import { StorageService, StorageKey, Config, ApiServiceParametersOptions } from '../../../core/index';
import { ApiService } from '../../../core/services/api/services';

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    providers: [ApiService]
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

    constructor(public apiService: ApiService, private storage: StorageService, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_PARAMETERS.LOGIN_RETURN_URL] || '/';
        this.form = this.fb.group({
            email: this.email,
            password: this.password
        });
    }

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
                this.storage.setItem(StorageKey.USER_DETAIL, JSON.stringify(this.user));
                this.router.navigate([this.returnUrl]);
            });
    }
}
