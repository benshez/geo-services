// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable as RxObservable } from 'rxjs/Observable';

import { isAndroid, isIOS } from 'platform';

// app
import { ApiService, Locker } from '../../../../app/shared/core/index';
import { User, ApiServiceParametersOptions } from '../../../../app/shared/core/index';
import { Config, ICoordinates, IMapQuery, IMapFeatures, Mapper, IMapSetup, IMapOptions, IMarker, IPopup } from '../../../../app/shared/core/index';

let mapbox = require('nativescript-mapbox');

class MapFeature {
    constructor(public id: string, public place_name: string, public center: [number, number]) { }
}

@Component({
    moduleId: module.id,
    selector: 'sd-map',
    template: `
    <StackLayout class="p-20">
      <lang-switcher></lang-switcher>
      <StackLayout width="300">
        <TextField hint="Search...(min. 4 chars)" (propertyChange)="onChange($event)"></TextField>
      </StackLayout>
      <GridLayout rows="*">
          <ListView [items]="model | async" (itemTap)="onItemTap($event)">
              <ng-template let-item="item" let-i="index" let-odd="odd" let-even="even">
                  <StackLayout [class.odd]="odd" [class.even]="even">
                      <Label [id]="'lbl' + i" [center]="item.center" [text]="item.place_name"></Label>
                  </StackLayout>
              </ng-template>
          </ListView>
      </GridLayout>
      <ContentView>
        <map:Mapbox></map:Mapbox>
      </ContentView>
    </StackLayout>
    `,
    styleUrls: ['component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NSMapComponent implements OnInit {
    public model: RxObservable<Array<MapFeature>>;
    public features: any = [];
    private errorMessage: string;
    private returnUrl: string;
    private center: [number, number] = [152.994306, -26.612273];

    constructor(
        public apiService: ApiService,
        private locker: Locker,
        private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';
    }

    onItemTap(args) {
        //console.log(args.index); //your code
        //console.log("Item Tapped at cell index: " + args.index);
        //console.log(args.object); // prints something like ListView(137)
        //console.log(args.view); // prints something like StackLayout(265)

        var lbl = <any>args.view.getViewById("lbl" + args.index);
        this.center = lbl.center;
        this.doCreateTnsMap();
        //console.log(lbl.center); // prints the actual text of the tapped label
        //console.log(this.center[0]);
    }

    doCreateTnsMap() {
        mapbox.show({
            accessToken: Config.ENVIRONMENT().MAP_BOX_API_KEY, // see 'Prerequisites' above 
            style: mapbox.MapStyle.DARK, // see the mapbox.MapStyle enum for other options, default mapbox.MapStyle.STREETS 
            margins: {
                left: 10, // default 0 
                right: 10, // default 0 
                top: 300, // default 0 
                bottom: isIOS ? 0 : 0 // default 0, this shows how to override the style for iOS 
            },
            center: { // optional without a default 
                lat: this.center[1],
                lng: this.center[0]
            },
            zoomLevel: 13, // 0-20, default 0 
            showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
            hideAttribution: false, // default true, Mapbox requires `false` if you're on a free plan 
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
            hideCompass: true, // default false 
            disableRotation: false, // default false 
            disableScroll: true, // default false 
            disableZoom: true
        });
    }

    onSetModelSource(keyword: any) {

        this.apiOptions.cacheKey = '';
        this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + keyword + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
        this.apiOptions.parameters = '';
        this.apiOptions.concatApi = false;
        this.apiService.get(this.apiOptions)
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(
            (json: any) => {
                let x: any = json;
                this.features = x.features;
                let items = [];
                this.features.forEach((item, i) => {
                    items.push(new MapFeature(item.id, item.place_name, item.center));
                });

                let subscr;
                this.model = RxObservable.create(subscriber => {
                    subscr = subscriber;
                    subscriber.next(items);
                    return () => {
                        console.log("Unsubscribe called!!!");
                    }
                });
            
                //x.features[0].place_name.forEach((item, i) => {
                //    this.model.push(new MapFeature(x.features.id[i], x.features.place_name[i], x.features.center[i]));
                //    //console.log(JSON.stringify(item));
                //});
                //let jsonObj = JSON.parse(json.features);
                //jsonObj.forEach((item) => {
                //    //console.log("Item: id= " + item.id);
                //    //console.log("Item: name= " + item.name);
                //    //console.log("Item: price= " + item.price);
                //    //console.log("Item: stock= " + item.stock);
                //    this.model.unshift(item);
                //    //console.log("itemsList SIZE 1: " + this.itemsList.length);

                //    //console.log("item: " + item.toString());
                //    //console.log("itemsList SIZE 2: " + this.itemsList.length);
                //});
            },
            (error: any) => this.errorMessage = <any>error,
            () => {

                let output = '';
                ////this.features.forEach((item, i) => {
                ////    this.model.push(new MapFeature(item.id, item.place_name, item.center));
                ////    //output += item;
                ////    console.log(item.place_name);
                ////    //console.log(JSON.stringify(item));
                ////});
                //console.log(JSON.stringify(this.model));
                ////console.log('kkkkk');
                ////let output = '';
                ////for (var property in this.model) {
                ////    output += property + ': ' + this.model[property] + '; ';
                ////}
                ////console.log(JSON.stringify(this.model));

            });
        //this.model = (this.mapper.onSuggest(keyword));

        //for (let i = 0; i < this.model.length; i++) {
        //    console.log(this.model.place_name[i]);
        //};

        //return this.model;
    }

    onChange(event: any) {
        if (event.value.length < 4) return;
        //if (event && event.value && event.value.length > 3) {
        this.onSetModelSource(event.value);
        //if (event !== '') {
        //console.log(event.value); //your code
        //this.options.options.center = event.center;
        //this.onSetCentre(this.options);
        //}
        //}
    }
}
