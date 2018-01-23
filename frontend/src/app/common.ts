import { AppRoutingModule } from './routing.module';
import { AboutModule } from './_components/about/module';
import { HomeModule } from './_components/home/module';
import { MenuModule } from './_components/menu/module';

export const SHARED_MODULES: Array<any> = [
    AppRoutingModule,
    AboutModule,
    HomeModule,
    MenuModule
];

export * from './routing.module';
