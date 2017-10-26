// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from '../../../../core/utils/config';

@Component({
	moduleId: module.id,
	selector: 'sd-register',
	templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
	styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class RegistrationComponent implements OnInit {
	public registrationUser: FormGroup;
	public form: FormGroup;
	public email = new FormControl('', Validators.required);
	public password = new FormControl('', Validators.required);

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.form = this.fb.group({
			email: this.email,
			password: this.password
		});
	}
}
