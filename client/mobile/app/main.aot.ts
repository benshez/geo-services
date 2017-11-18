import { platformNativeScript } from "nativescript-angular/platform-static";

import { AppModuleNgFactory } from "./src/app.module.ngfactory";

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);