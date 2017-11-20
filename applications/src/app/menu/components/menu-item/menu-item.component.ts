import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../../common/interfaces/index';

@Component({
    moduleId: module.id,
    selector: 'geoservice-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    @Input() item: IMenuItem;

}
