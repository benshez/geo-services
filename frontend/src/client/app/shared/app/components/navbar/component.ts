// app
import { Component } from '@angular/core';

import { Config } from '../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-navbar',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
})
export class NavbarComponent {
}
