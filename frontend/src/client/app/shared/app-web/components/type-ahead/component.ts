// libs
import {
    Component, OnInit, AfterViewInit,
    OnDestroy, ChangeDetectionStrategy,
    ViewChild, ViewChildren,
    ElementRef, Query, QueryList,
    Renderer, Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { IKeyValuePair } from '../../../core/interfaces';


// app
@Component({
    moduleId: module.id,
    selector: 'sd-auto-typeahead',
    templateUrl: 'component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebTypeAheadComponent implements OnInit, AfterViewInit {

    public typeAheadShow: boolean = true;
    public typeAheadSource: Observable<Array<IKeyValuePair>>;
    public typeAheadKeyword: string;

    private typeAheadInputFormControl = new FormControl();
    private typeAheadPlaceHolder = '';
    private typeAheadItemValue = '';
    private typeAheadItemKey = '';
    private typeAheadErrorMessage = '';

    @ViewChildren('typeAheadList') typeAheadList: QueryList<ElementRef>;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;

    @Input() delay: number = 400;

    @Input()
    set placeholder(placeholder: string) {
        this.typeAheadPlaceHolder = (placeholder && placeholder.trim()) || '<no placeholder text set>';
    }
    get placeholder(): string { return this.typeAheadPlaceHolder; }

    @Input()
    set value(value: string) {
        this.typeAheadItemValue = (value && value.trim()) || '<no value text set>';
    }
    get value(): string { return this.typeAheadItemValue; }

    @Input()
    set key(value: string) {
        this.typeAheadItemKey = (value && value.trim()) || '<no key set>';
    }
    get key(): string { return this.typeAheadItemKey; }

    @Input()
    public source: any;

    constructor(private renderer: Renderer) { }

    ngOnInit() {
        this.typeAheadSource = this.source(this.typeAheadInputFormControl.valueChanges, this.key, this.value, this.delay);
    }

    ngAfterViewInit() {

      
        //Observable.fromEvent(this.typeAheadInput.nativeElement, 'keyup')

        //this.typeAheadSource = this.source(this.typeAheadInputFormControl.valueChanges);
        //this.typeAheadInputFormControl.valueChanges
        //    .debounceTime(this.delay)
        //    .distinctUntilChanged()
        //    .map(keyword => {
        //        return this.source(keyword)
        //    })
        //    //.map((suggestions: any) => {
        //    .subscribe((suggestions: any) => {
        //        //let suggestions: any = this.source(event.target.value);
        //        let arr: any = [];
        //            suggestions.forEach((suggestion: any, index: any) => {
        //                let item: any = [];
        //                this.onAssign(item, 'id', suggestion[this.key]);
        //                this.onAssign(item, 'value', suggestion[this.value]);
        //                arr.push(item);
        //            });
        //            //this.typeAheadSource.complete();
        //        //});
        //        //this.typeAheadSource = suggestions;
        //            this.typeAheadSource = Observable.of(<any>arr);
        //            this.typeAheadShow = true;
        //            //return this.typeAheadSource;
        //    });
        //this.typeAheadInputFormControl.valueChanges
        //    .debounceTime(this.delay)
        //    .distinctUntilChanged()
        //    .switchMap(keyword => {
        //        this.typeAheadShow = true;
        //        return this.source(keyword)
        //    })
        //    .subscribe(
        //    (json: any) => {
        //        this.typeAheadSource = json;
        //        let dataArr: any = [];

        //        json.forEach((suggestion: any, index: any) => {
        //            let item: any = [];
        //            this.onAssign(item, 'id', suggestion[this.key]);
        //            this.onAssign(item, 'value', suggestion[this.value]);
        //            dataArr.push(item);
        //        });

        //        this.typeAheadSource = dataArr;
        //        this.typeAheadShow = true;
        //    },
        //    (error: any) => this.typeAheadErrorMessage = <any>error,
        //    () => { });
    }

    onDelayedLoad(keyword: string) {
        //this.delay(() => this.onLoadSource(keyword), 4000);
    }

    onLoadSource = (keyword: string): Observable<Array<any>> => {
        if (typeof this.source === 'function') {
            this.source(keyword)
                .subscribe(resp => {
                    let dataArr: any = [];

                    resp.forEach((suggestion: any, index: any) => {
                        let item: any = [];
                        this.onAssign(item, 'id', suggestion[this.key]);
                        this.onAssign(item, 'value', suggestion[this.value]);
                        dataArr.push(item);
                    });

                    this.typeAheadSource = dataArr;

                    return dataArr;
                });
        }
        return null;
    }

    onAssign(obj: any, prop: any, value: any) {
        if (typeof prop === 'string')
            prop = prop.split('.');
        obj[prop[0]] = value;
    }

}
