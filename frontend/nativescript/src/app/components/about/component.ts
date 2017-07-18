import { Injector, Component } from '@angular/core';
import { Config } from '../../modules/core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-about',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class AboutComponent {

    // Just one way you could handle the {N} `ui/page` Page class
    // in a shared component...
    private _page: any;
    private get page() {
        if (Config.PageClass) {
            if (!this._page) {
                this._page = this.injector.get(Config.PageClass);
            }

            return this._page;
        }
    }

    constructor(private injector: Injector) {
        // This is here as an example
        // if (this.page) {
        //   this.page.actionBarHidden = true;
        // }
    }
}