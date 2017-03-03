import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'sd-app-nav',
    styleUrls: ['styles.css'],
    templateUrl: 'tmpl.html'
})

export class NavigationComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.fb.group({ });
    }
}
