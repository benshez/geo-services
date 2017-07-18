import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Config } from '../../../core/index';
import { ILoaderState } from './interfaces/interfaces';
import { LoaderService } from './services/services';

@Component({
    moduleId: module.id,
    selector: 'sd-loader',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class LoaderComponent implements OnInit {
    public showMapPlaces: boolean = false;

    show: boolean = false;

    private subscription: Subscription;

    constructor(
        private loaderService: LoaderService
    ) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: ILoaderState) => {
                this.show = state.show;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
