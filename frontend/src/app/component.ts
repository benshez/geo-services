import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from './menu/common';

@Component({
    moduleId: module.id,
    selector: 'geoservices-app',
    templateUrl: './component.html'
})
export class AppComponent {
    menuItems: MenuItem[] = [
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
