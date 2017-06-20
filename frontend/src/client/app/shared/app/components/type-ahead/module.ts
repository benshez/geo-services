// angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultilingualModule } from '../../../i18n/multilingual.module';
import { TypeAheadComponent } from './component';

@NgModule({
    imports: [
        CommonModule,
        MultilingualModule
    ],
    declarations: [
        TypeAheadComponent
    ],
    exports: [
        TypeAheadComponent,
        MultilingualModule
    ],
    providers: []
})
export class TypeAheadModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TypeAheadModule,
            providers: []
        };
    }
}
