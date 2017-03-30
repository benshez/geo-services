import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdlModule } from 'angular2-mdl';

import { ExpiredComponent } from './component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, MdlModule, FormsModule],
    declarations: [ExpiredComponent],
    exports: [ExpiredComponent],
    providers: [MdlModule]
})

export class ExpiredModule { }
