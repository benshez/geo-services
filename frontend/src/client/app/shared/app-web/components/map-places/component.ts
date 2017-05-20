// libs
import {
    Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, Injectable,
    Inject, ViewChildren, AfterViewInit, ElementRef, Query, QueryList, Renderer
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// app
import { ApiService, Locker } from '../../../core/index';
import { User, ApiServiceParametersOptions } from '../../../core/index';
import { Config, Mapper, RouterExtensions, IMapFeatures, ICoordinates, IIndustries } from '../../../core/index';

import { WebTypeAheadComponent } from '../type-ahead/component';

@Component({
    moduleId: module.id,
    selector: 'sd-map-places',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush,
    //host: {
    //    '(keydown)': 'onKeyDown($event)'
    //}
})
export class WebMapPlacesComponent implements OnInit {
    public loading: boolean = false;
    public showMapPlaces: boolean = false;
    public showIndustries: boolean = false;
    public mapPlaces: Observable<Array<IMapFeatures>>;
    public industries: Observable<Array<IIndustries>>;

    private errorMessage: string;
    private returnUrl: string;
    private industriesSearch = new FormControl();
    private mapPlacesSearch = new FormControl();
    private selectedIndustryIndex: number = -1;

    private upDownEvents = new Subject<string>();
    private enterPresses = new Subject<any>();

    @ViewChildren('industriesSuggestions') industriesSuggestions: QueryList<ElementRef>;
    @ViewChild('search') search: ElementRef;
    constructor(
        private apiService: ApiService,
        private locker: Locker,
        private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper,
        private routerext: RouterExtensions,
        private renderer: Renderer) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_PARAMETERS.LOGIN_RETURN_URL] || '/';

        this.industries = this.industriesSearch.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => {
                this.showIndustries = true;
                return this.mapper.onIndustriesQuery(term);
            })
            .onErrorResumeNext();

        this.mapPlaces = this.mapper.searchMapFeatures(this.mapPlacesSearch.valueChanges);
    }

    onBindIndustries(args: string) {
        return this.mapper.onIndustriesQuery(args)
    }

    ngAfterViewInit() {
        this.upDownEvents
            .withLatestFrom(this.industries)
            .subscribe(([event, industries]) => {
                for (let industry of industries) {
                    if (industry.id) {
                        switch (<string>event) {
                            case 'up':
                                this.selectedIndustryIndex = (this.selectedIndustryIndex < 1) ? 0 : this.selectedIndustryIndex - 1;
                                break;
                            case 'down':
                                this.selectedIndustryIndex = (this.selectedIndustryIndex > industries.length) ? industries.length : this.selectedIndustryIndex + 1;
                                break;
                        }

                        if (this.selectedIndustryIndex < industries.length) {
                            let cIndustriesSuggestion: HTMLUListElement = null;

                            let industryItem: ElementRef = this.industriesSuggestions
                                .filter(x => {
                                    cIndustriesSuggestion = x.nativeElement;
                                    return cIndustriesSuggestion.id === industries[this.selectedIndustryIndex].id.toString();
                                })[0];

                            if (this.industriesSuggestions.length > 0) {
                                this.renderer.invokeElementMethod(industryItem.nativeElement, 'focus', []);
                            }
                        }

                        return;
                    }
                }
            })
    }

    onSetLocation() {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    Config.ROUTE_PARAMETERS.LONGITUDE = position.coords.longitude;
                    Config.ROUTE_PARAMETERS.LATITUDE = position.coords.latitude;
                    self.onNavigate();
                },
                (error: PositionError) => { self.onNavigate(); },
                { maximumAge: 60000, timeout: 10000 }
            );
        } else { self.onNavigate(); }
    }

    onIndustriesChanged(args: IIndustries) {
        this.showMapPlaces = false;
        if (args && args.id) {
            Config.ROUTE_PARAMETERS.INDUSTRY = args.id;
            this.onUpdateModel(args.description);
            this.showIndustries = false;
            this.showMapPlaces = true;
        }
    }

    onUpdateModel(activeSuggestion: string) {
        this.industriesSearch.setValue(activeSuggestion, {
            onlySelf: true,
            emitEvent: false,
            emitModelToViewChange: true,
            emitViewToModelChange: true
        });
    }

    onPlacesChanged(args: IMapFeatures) {
        if (args && args.center && this.showMapPlaces) {
            Config.ROUTE_PARAMETERS.LONGITUDE = args.center[0];
            Config.ROUTE_PARAMETERS.LATITUDE = args.center[1];
            this.onNavigate();
        }
    }

    onNavigate() {
        this.routerext.navigate([Config.ROUTE_ROUTES.MAP], {
            transition: {
                duration: Config.TRANSITION.DURATION,
                name: Config.TRANSITION.SLIDE_TOP,
            }
        });
    }

    onKeyDown(event: string) {
        if (!this.showIndustries) return;
        this.upDownEvents.next(event);
    }

    onKeyDownEnter(args: IIndustries): void {
        this.onIndustriesChanged(args);
        this.enterPresses.next(null);
        this.renderer.invokeElementMethod(this.search.nativeElement, 'focus', []);
        this.showIndustries = false;
    }
}
