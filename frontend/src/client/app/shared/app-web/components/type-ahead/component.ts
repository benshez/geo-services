// libs
import {
    Component, OnInit, AfterViewInit,
    OnDestroy, ChangeDetectionStrategy,
    ViewChild, ViewChildren,
    ElementRef, Query, QueryList,
    Renderer, Input,
    EventEmitter, Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Subscription } from 'rxjs/Subscription';

import { Config, ILocationArguments, IKeyValuePair } from '../../../core/index';
import { IKeyValue, IKeyValueDictionary, ISelectedKeyValue } from '../../../core/collections/KeyValuePairs/interfaces';
// app
@Component({
    moduleId: module.id,
    selector: 'sd-typeahead',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeAheadComponent implements OnInit, AfterViewInit {

    public typeAheadSource: IKeyValueDictionary;
    public typeAheadKeyword: string;

    private typeAheadInputFormControl = new FormControl();
    private typeAheadPlaceHolder: string = '';
    private typeAheadItemValue: string = '';
    private typeAheadItemKey: string = '';
    private typeAheadErrorMessage: string = '';
    private typeAheadCacheKey: string = '';
    private typeAheadDeepObjectName: string = '';
    private typeAheadUpDownEvents = new Subject<string>();
    private typeAheadEnterPresses = new Subject<any>();
    private typeAheadValueChange: Subscription;
    private typeAheadSelectedIndex: number = -1;
    private _typeAheadShown: boolean;

    @ViewChild('typeAheadList') typeAheadList: ElementRef;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;
    @Output() public typeAheadShownChange: EventEmitter<boolean> = new EventEmitter();
    @Input() public get typeAheadShown(): boolean {
        return this._typeAheadShown;
    }

    public set typeAheadShown(value) {
        this._typeAheadShown = !!value;

        this.typeAheadShownChange.emit(this.typeAheadShown);
    }

    private _keyword = new BehaviorSubject<string>('');

    @Input()
    set keyword(value) {
        this._keyword.next(value);
    };

    get keyword() {
        return this._keyword.getValue();
    }

    private _data = new BehaviorSubject<IKeyValueDictionary>([]);

    @Input()
    set data(value) {
        this._data.next(value);
    };

    get data() {
        return this._data.getValue();
    }

    @Input() source: any;

    @Input() delay: number = 400;

    @Input() minlength: number = 2;

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
    set cache(value: string) {
        this.typeAheadCacheKey = (value && value.trim()) || '';
    }
    get cache(): string { return this.typeAheadCacheKey; }

    @Input()
    set object(value: string) {
        this.typeAheadDeepObjectName = (value && value.trim()) || '';
    }
    get object(): string { return this.typeAheadDeepObjectName; }

    @Output() onTypeAheadIndexChanged: any = new EventEmitter();

    constructor(private renderer: Renderer) { }

    ngOnInit() { }

    ngAfterViewInit() {
        //this.subscribeTypeAheadSource();
    }

    onKeyDownArrow(event: string) {
        //if (!this.typeAheadShown)
        //if (this._data.value.length === 0) this.subscribeTypeAheadSource();
        this.typeAheadListElementScroll(event);
    }

    subscribeTypeAheadSource(evt) {
        if (evt.target.value.length <= this.minlength) return;

        this.keyword = evt.target.value;
        
        this.source(this._keyword);

        this._data.subscribe(results => {
            if (typeof (results) === 'undefined') {
                this.typeAheadSource = [] as any;
            } else {
                this.typeAheadShown = true;
                this.typeAheadSource = results;
            }
        });
    }

    onKeyDownEnter(args: any) {
        let input: any = this.typeAheadInput.nativeElement;
        this.resetTypeAheadSelectedIndex();
        this.setTypeAheadInputValue(args, input, true);
    }

    setTypeAheadInputValue(args: any, input: any, setFocus: boolean = false) {
        let item: ISelectedKeyValue = this.typeAheadSource.getItemByKey(args);
        //this.typeAheadInputFormControl.setValue(item.value, {
        //    onlySelf: true,
        //    emitEvent: false,
        //    emitModelToViewChange: true,
        //    emitViewToModelChange: true
        //});
        input.value = item.value;
        if (setFocus) {
            input.focus();
            this.typeAheadShown = false;
            this.onTypeAheadIndexChanged.emit(item.key);
            this._data.next([]);
        }
    }

    typeAheadListElementScroll(event: string) {
        let tal = this.typeAheadList;
        if (typeof (tal) === 'undefined') return;
        let ul = tal.nativeElement;
        let elems: Array<HTMLUListElement> = ul.getElementsByTagName('li');
        if (elems.length === 0) return;

        switch (<string>event) {
            case Config.EVENTS.ARROW_DOWN:
                if((this.typeAheadSelectedIndex + 1) >= elems.length) this.resetTypeAheadSelectedIndex();
                this.typeAheadSelectedIndex++;
                break
            case Config.EVENTS.ARROW_UP:
                this.typeAheadSelectedIndex--;
                if (this.typeAheadSelectedIndex < 0) this.typeAheadSelectedIndex = (elems.length - 1);
                break
        }

        let elem = elems[this.typeAheadSelectedIndex];
        this.setTypeAheadInputValue(elem.id, this.typeAheadInput.nativeElement);
        elem.focus();
    }

    resetTypeAheadSelectedIndex() {
        this.typeAheadSelectedIndex = -1;
    }
}
