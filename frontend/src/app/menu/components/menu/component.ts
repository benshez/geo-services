import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    moduleId: module.id,
    selector: 'geoservices-menu',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})
export class MenuComponent {
    @Input() items: MenuItem[];
}
