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
import { Subscription } from 'rxjs/Subscription';

import { Config, ILocationArguments, IKeyValuePair } from '../../../core/index';

// app
@Component({
    moduleId: module.id,
    selector: 'sd-typeahead',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeAheadComponent implements OnInit, AfterViewInit {

    public typeAheadSource: Array<IKeyValuePair[]>;
    public typeAheadKeyword: string;
    public typeAheadShown: boolean = false;

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

    @ViewChildren('typeAheadList') typeAheadList: QueryList<ElementRef>;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;

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

    ngOnInit() {
        this.subscribeTypeAheadSourse();
    }

    ngAfterViewInit() {
        //this.typeAheadList.changes
        //    .debounceTime(this.delay)
        //    .subscribe((changes: any) => {
        //        this.typeAheadShown = this.typeAheadList.length !== 0;
        //        debugger
        //    });

        this.subscribeTypeAheadUpDownEvents();
    }

    onKeyDownArrow(event: string) {
        if (this.typeAheadList.length === 0) return;
        this.typeAheadUpDownEvents.next(event);
    }

    onKeyDownEnter(args: any): void {
        this.onTypeAheadIndexChanged.emit(args);
        this.typeAheadEnterPresses.next(null);
        this.renderer.invokeElementMethod(this.typeAheadInput.nativeElement, Config.EVENTS.FOCUS, []);       
        this.typeAheadInputFormControl.setValue(args.value, {
            onlySelf: true,
            emitEvent: false,
            emitModelToViewChange: true,
            emitViewToModelChange: true
        });
        this.typeAheadShown = false;
    }

    subscribeTypeAheadSourse() {
        if (this.typeAheadValueChange) {
            this.typeAheadValueChange.unsubscribe;
        }

        let args: ILocationArguments = {
            keyword: this.typeAheadInputFormControl.valueChanges,
            key: this.key,
            value: this.value,
            delay: this.delay,
            apiOptions: null,
            minQueryLength: this.minlength,
            cacheKey: this.cache.concat('_').concat('{query}'),
            DeepObjectName: this.typeAheadDeepObjectName
        };

        this.typeAheadSource = this.source(args);

        this.typeAheadValueChange = this.typeAheadInputFormControl.valueChanges
            .subscribe((value: any) => { this.typeAheadShown = value.length >= this.minlength;});
    }

    subscribeTypeAheadUpDownEvents() {
        this.typeAheadUpDownEvents
            .withLatestFrom(this.typeAheadSource)
            .subscribe(([event, suggestions]) => {
                for (let suggestion of suggestions) {
                    if (suggestion.key) {
                        switch (<string>event) {
                            case Config.EVENTS.ARROW_UP:
                                this.typeAheadSelectedIndex = (this.typeAheadSelectedIndex < 1) ? 0 : this.typeAheadSelectedIndex - 1;
                                break;
                            case Config.EVENTS.ARROW_DOWN:
                                this.typeAheadSelectedIndex = (this.typeAheadSelectedIndex > suggestions.length) ? suggestions.length : this.typeAheadSelectedIndex + 1;
                                break;
                        }

                        if (this.typeAheadSelectedIndex < suggestions.length) {
                            let cSuggestion: HTMLUListElement = null;

                            let industryItem: ElementRef = this.typeAheadList
                                .filter(x => {
                                    cSuggestion = x.nativeElement;
                                    return cSuggestion.id === suggestions[this.typeAheadSelectedIndex].key.toString();
                                })[0];

                            if (this.typeAheadList.length > 0) {
                                this.renderer.invokeElementMethod(industryItem.nativeElement, Config.EVENTS.FOCUS, []);
                            }
                        }

                        return;
                    }
                }
            });
    }
}
