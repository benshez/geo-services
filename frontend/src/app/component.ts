import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMenuItem } from './_interfaces';

@Component({
    moduleId: module.id,
    selector: 'geoservices-app',
    templateUrl: './component.html'
})
export class AppComponent {
    menuItems: IMenuItem[] = [
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
