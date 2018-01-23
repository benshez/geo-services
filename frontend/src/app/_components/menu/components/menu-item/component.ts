import { Component, Input } from '@angular/core';
// app
import { IMenuItem } from '../../../../_interfaces';

@Component({
    moduleId: module.id,
    selector: 'geoservices-menu-item',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuItemComponent {
    @Input() item: IMenuItem;
}
