"use strict";
var core_1 = require('@angular/core');
// The browser platform with a compiler
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Load i18n providers
// import { TranslationProviders } from './i18n.providers';
// The app module
var module_1 = require('./app/module');
if (String('<%= ENV %>') === 'prod') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.AppModule /*, options*/);
