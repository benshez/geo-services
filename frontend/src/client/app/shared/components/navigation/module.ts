import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { MdlModule } from 'angular2-mdl';

import { NavigationComponent } from './component';

@NgModule({
    //imports: [CommonModule, ReactiveFormsModule, MdlModule, FormsModule],
    imports: [CommonModule, MdlModule, FormsModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    providers: [MdlModule]
})

export class NavigationModule { }