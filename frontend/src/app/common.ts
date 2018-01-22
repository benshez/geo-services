import { AppRoutingModule } from './routing.module';
import { HomeModule } from './home/module';
import { MenuModule } from './menu/module';

export const SHARED_MODULES: any[] = [AppRoutingModule, HomeModule, MenuModule];

export * from './routing.module';
