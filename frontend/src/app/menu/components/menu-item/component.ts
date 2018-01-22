import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    moduleId: module.id,
    selector: 'geoservices-menu-item',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuItemComponent {
    @Input() item: MenuItem;
}
