import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService, User, Locker, ApiServiceParametersOptions } from '../../../index';


@Component({
    moduleId: module.id,
    selector: 'sd-app-expired',
    templateUrl: 'tmpl.html',
    styleUrls: ['styles.css']
})

export class ExpiredComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
