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

import { Config, ILocationArguments } from '../../../core/index';
import { IKeyValue, IKeyValueDictionary, ISelectedKeyValue } from '../../../core/collections/KeyValuePairs/interfaces';
import { KeyValueDictionary, KeyValueArray } from '../../../core/collections/index';

@Component({
    moduleId: module.id,
    selector: 'sd-typeahead',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class TypeAheadComponent {

    public typeAheadSource: Array<any>;
    public typeAheadKeyword: string;

    private typeAheadDictionary: KeyValueDictionary
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
        this.typeAheadShown = true;
        this.typeAheadListElementScroll(event);
    }

    subscribeTypeAheadSource(evt) {
        let searchString: string = (evt.target) ? evt.target.value : evt.value;

        if (searchString.length <= this.minlength) return;

        this.keyword = searchString;
        
        this.source(this._keyword).subscribe(results => {
            if (typeof (results) === 'undefined') {
                this.typeAheadSource = [] as any;
            } else {
                this.typeAheadShown = true;
                this.typeAheadDictionary = results;
                this.typeAheadSource = this.typeAheadDictionary.toArray();
                //console.log(JSON.stringify(this.typeAheadDictionary));
            }
        }).unsubscribe;
    }

    onItemTap(args: any) {
        let item: ISelectedKeyValue = this.typeAheadDictionary.getItemByKey(args.index);
        let input: any = this.typeAheadInput.nativeElement;
        input.focus();
        this.typeAheadShown = false;
        this.onTypeAheadIndexChanged.emit(item.key);
    }

    onKeyDownEnter(args: any) {
        let input: any = this.typeAheadInput.nativeElement;
        this.resetTypeAheadSelectedIndex();
        this.setTypeAheadInputValue(args, input, true);
    }

    setTypeAheadInputValue(args: any, input: any, setFocus: boolean = false) {
        let item: ISelectedKeyValue = this.typeAheadDictionary.getItemByKey(args);
        input.value = item.value;
        if (setFocus) {
            input.focus();
            this.typeAheadShown = false;
            this.onTypeAheadIndexChanged.emit(item.key);
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
