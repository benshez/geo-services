import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './user/login/login.component';

export const SHARED_COMPONENTS: any[] = [
    NavbarComponent,
    ToolbarComponent,
    LoginComponent
];

export * from './navbar/navbar.component';
export * from './toolbar/toolbar.component';
export * from './user/login/login.component';
