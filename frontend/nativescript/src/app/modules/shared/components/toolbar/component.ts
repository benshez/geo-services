import { Component } from '@angular/core';

// app
import { LogService } from '../../../core/services/logging/log.service';

import { Config } from '../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-toolbar',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class ToolbarComponent {

    constructor(private log: LogService) { }

    public openLanguages(e: any): void {
        this.log.debug('openLanguages');
    }
}
