import { LoginComponent } from './components/login/component';
import { RegistrationComponent } from './components/register/component';

export const USER_COMPONENTS: any[] = [
	LoginComponent,
	RegistrationComponent
];

export const USER_PROVIDERS: any[] = [

];

export * from './components/login/component';
export * from './components/register/component';
export * from './models/models';
export * from './actions/index';
export * from './effects/index';
export * from './reducers/index';
export * from './states/index';
export * from './services/index';
export * from './interfaces/index';
