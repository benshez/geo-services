import { Component, Input } from '@angular/core';
// app
import { IMenuItem } from '../../../common/interfaces/index';

@Component({
    moduleId: module.id,
    selector: 'geoservice-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    @Input() items: Array<IMenuItem>;

}
