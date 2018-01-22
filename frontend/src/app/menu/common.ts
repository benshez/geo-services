import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './components/menu/component';
import { MenuItemComponent } from './components/menu-item/component';

export const SHARED_MODULES: any = [CommonModule, TranslateModule];

export const COMPONENT_DECLARATIONS: any[] = [MenuComponent, MenuItemComponent];

export const COMPONENT_EXPORTS: any[] = [MenuComponent];

export * from './interfaces/MenuItem';
