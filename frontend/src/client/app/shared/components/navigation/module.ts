import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,  FormsModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})

export class NavigationModule { }