import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './components/menu/component';
import { MenuItemComponent } from './components/menu-item/component';

export const SHARED_MODULES: any = [
	CommonModule,
	TranslateModule
];

export const MENU_COMPONENT_DECLARATIONS: Array<any> = [
	MenuComponent,
	MenuItemComponent
];

export const MENU_COMPONENT_EXPORTS: Array<any> = [
	MenuComponent
];
