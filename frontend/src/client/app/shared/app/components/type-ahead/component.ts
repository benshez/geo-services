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

import { IDictionary, ILocationArguments } from '../../../core/interfaces';


// app
@Component({
    moduleId: module.id,
    selector: 'sd-auto-typeahead',
    templateUrl: 'component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeAheadComponent implements OnInit, AfterViewInit {

    public typeAheadSource: Array<IDictionary>;
    public typeAheadKeyword: string;

    private typeAheadInputFormControl = new FormControl();
    private typeAheadPlaceHolder = '';
    private typeAheadItemValue = '';
    private typeAheadItemKey = '';
    private typeAheadErrorMessage = '';

    @ViewChildren('typeAheadList') typeAheadList: QueryList<ElementRef>;
    @ViewChild('typeAheadInput') typeAheadInput: ElementRef;

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
    public source: any;

    constructor(private renderer: Renderer) { }

    ngOnInit() {
        let args: ILocationArguments = {
            keyword: this.typeAheadInputFormControl.valueChanges,
            key: this.key,
            value: this.value,
            delay: this.delay,
            apiOptions: null,
            minQueryLength: this.minlength
        };

        this.typeAheadSource = this.source(args);
    }

    ngAfterViewInit() {

    }

}
