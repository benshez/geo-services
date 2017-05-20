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


// app
@Component({
    moduleId: module.id,
    selector: 'sd-auto-typeahead',
    templateUrl: 'component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebTypeAheadComponent implements OnInit {

    public typeAheadShow: boolean = false;
    public typeAheadSource: any[] = [];
    public typeAheadKeyword: string;

    private typeAheadInputFormControl = new FormControl();
    private typeAheadPlaceHolder = '';
    private typeAheadItemValue = '';
    private typeAheadItemKey = '';

    @ViewChildren('typeAheadList') typeAheadList: QueryList<ElementRef>;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;

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
        Observable.fromEvent<KeyboardEvent>(this.typeAheadInput.nativeElement, 'keyup')
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((event: any) => {
                this.onLoadSource(event.target.value);
                
            });
    }

    onDelayedLoad(keyword: string) {
        this.delay(() => this.onLoadSource(keyword), 4000);
    }

    onLoadSource(keyword: string) {
        if (typeof this.source === 'function') {
            this.source(keyword).subscribe(
                resp => {
                    let dataArr: any = [];
      
                    resp.forEach((suggestion: any, index: any) => {
                        let item: any = [];
                        item['id'] = suggestion[this.key];
                        item['value'] = suggestion[this.value];
                        dataArr.push(item);
                    });

                    this.typeAheadSource = dataArr;
                    this.typeAheadShow = true;
                }
            );
        }
    }


    private delay = (() => {
        let timer = 0;
        return function (callback: any, ms: number) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

}
