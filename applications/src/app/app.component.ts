import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMenuItem } from './common/interfaces/index';

@Component({
    moduleId: module.id,
    selector: 'geoservice-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    menuItems: Array<IMenuItem> = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.about',
            link: ['/about']
        }
    ];

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
