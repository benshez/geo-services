import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../../../_interfaces';

@Component({
    moduleId: module.id,
    selector: 'geoservices-menu',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuComponent {
    @Input() items: IMenuItem[];
}
