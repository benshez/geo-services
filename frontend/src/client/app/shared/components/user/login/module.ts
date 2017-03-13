import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdlModule } from 'angular2-mdl';

import { LoginComponent } from './component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, MdlModule, FormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [MdlModule]
})

export class LoginModule { }
