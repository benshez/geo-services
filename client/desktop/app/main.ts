import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app.module';
import { environment } from 'geoservice-shared/environments/environment';

// depending on the env mode, enable prod mode or add debugging modules
if (environment.production) {
	enableProdMode();
}

export function main() {
	return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
	main();
} else {
	document.addEventListener('DOMContentLoaded', main);
}
