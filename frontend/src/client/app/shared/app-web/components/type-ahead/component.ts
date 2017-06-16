// libs
import {
    Component,
    OnDestroy,
    ViewChild, ViewChildren,
    ElementRef, Query, QueryList,
    Renderer, Input,
    EventEmitter, Output
} from '@angular/core';

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
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class TypeAheadComponent {

    public typeAheadSource: IKeyValueDictionary;
    public typeAheadKeyword: string;

    private typeAheadPlaceHolder: string = '';
    private typeAheadErrorMessage: string = '';
    private typeAheadValueChange: Subscription;
    private typeAheadSelectedIndex: number = -1;
    private _typeAheadShown: boolean;

    @Output() public typeAheadShownChange: EventEmitter<boolean> = new EventEmitter();

    @Input()
    public get typeAheadShown(): boolean {
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

    @Input() minlength: number = 2;
    @Input() source: any;

    @Input()
    set placeholder(placeholder: string) {
        this.typeAheadPlaceHolder = (placeholder && placeholder.trim()) || '<no placeholder text set>';
    }
    get placeholder(): string { return this.typeAheadPlaceHolder; }

    @Output() onTypeAheadIndexChanged: any = new EventEmitter();

    @ViewChild('typeAheadList') typeAheadList: ElementRef;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;

    constructor(private renderer: Renderer) { }

    onKeyDownArrow(event: string) {
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
