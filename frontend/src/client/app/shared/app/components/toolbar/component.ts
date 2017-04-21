import { Component } from '@angular/core';

// app
import { LogService } from '../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-toolbar',
    templateUrl: 'component.html',
    styleUrls: [
        'component.css',
    ],
})
export class ToolbarComponent {

    constructor(private log: LogService) { }

    public openLanguages(e: any): void {
        this.log.debug('openLanguages');
    }
}
