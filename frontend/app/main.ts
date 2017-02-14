import { enableProdMode } from '@angular/core';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Load i18n providers
// import { TranslationProviders } from './i18n.providers';

// The app module
import { AppModule } from './app/module';

if (String('<%= ENV %>') === 'prod') { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(AppModule/*, options*/);
