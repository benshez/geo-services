// libs
import {
	Component,
	OnDestroy,
	ViewChild,
	ViewChildren,
	ElementRef,
	Query,
	QueryList,
	Renderer,
	Input,
	EventEmitter,
	Output,
	ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { Config } from '../../core/index';
import { ILocationArguments } from '../../map/index';
import {
	IKeyValue,
	IKeyValueDictionary,
	ISelectedKeyValue
} from '../../core/collections/KeyValuePairs/interfaces';
import {
	KeyValueDictionary,
	KeyValueArray
} from '../../core/collections/index';

import * as _ from 'lodash';  
@Component({
	moduleId: module.id,
	selector: 'sd-typeahead',
	templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
	styleUrls: [Config.COMPONENT_ITEMS.CSS],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeAheadComponent implements OnDestroy {
	public typeAheadSource: Array<any>;
	public typeAheadKeyword: string;
	@Output()
	public typeAheadShownChange: EventEmitter<boolean> = new EventEmitter();
	@Input() public minlength: number = 2;
	@Input() public source: any;
	@Output() onTypeAheadIndexChanged: any = new EventEmitter();
	@ViewChild('typeAheadList') typeAheadList: ElementRef;
	@ViewChild('typeAheadInput') typeAheadInput: ElementRef;

	private typeAheadDictionary: KeyValueDictionary;
	private typeAheadPlaceHolder: string = '';
	private typeAheadErrorMessage: string = '';
	private typeAheadValueChange: Subscription;
	private typeAheadSelectedIndex: number = -1;
	private _typeAheadShown: boolean;

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
	}

	get keyword() {
		return this._keyword.getValue();
	}

	@Input()
	set placeholder(placeholder: string) {
		this.typeAheadPlaceHolder =
			(placeholder && placeholder.trim()) || '<no placeholder text set>';
	}
	get placeholder(): string {
		return this.typeAheadPlaceHolder;
	}

	constructor(private renderer: Renderer) { }

	public ngOnDestroy() { return null; }

	onKeyDownArrow(event: string) {
		this.typeAheadShown = true;
		this.typeAheadListElementScroll(event);
	}

	onTextChange(evt: any) {
		this.subscribeTypeAheadSource(evt.value);
	}

	onInput(evt: any) {
		this.subscribeTypeAheadSource(evt.target.value);
	}

	subscribeTypeAheadSource(value: any) {
		if ((value && value.length <= this.minlength) || this.typeAheadShown) {
			return;
		}

		this.keyword = value;

		this.source(this._keyword).subscribe(results => {
			if (typeof results === 'undefined') {
				this.typeAheadSource = [] as any;
			} else {
				this.typeAheadShown = true;
				this.typeAheadDictionary = results;
				this.typeAheadSource = this.typeAheadDictionary.toArray();
				console.log(JSON.stringify(this.typeAheadDictionary));
			}
		});
	}

	onItemTap(args: any) {
		let item: ISelectedKeyValue = this.typeAheadDictionary.getItemByKey(
			args.index
		);
		let input: any = this.typeAheadInput.nativeElement;
		input.text = item.value;
		input.value = item.value;
		input.focus();
		this.typeAheadShown = false;
		this.onTypeAheadIndexChanged.emit(item.key);
	}

	onKeyDownEnter(args: any) {
		let input: any = this.typeAheadInput.nativeElement;
		this.resetSelectedIndex();
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
		if (typeof tal === 'undefined') return;
		let ul = tal.nativeElement;
		let elems: Array<HTMLUListElement> = ul.getElementsByTagName('li') || null;

		if (!elems || elems.length === 0) return;

		let counter: number = elems.length || 0;

		switch (event as string) {
			case Config.EVENTS.ARROW_DOWN:
				if (this.typeAheadSelectedIndex + 1 >= counter) {
					this.resetSelectedIndex();
				}
				this.typeAheadSelectedIndex++;
				break;
			case Config.EVENTS.ARROW_UP:
				this.typeAheadSelectedIndex--;
				if (this.typeAheadSelectedIndex < 0) {
					this.typeAheadSelectedIndex = counter - 1;
				}	
				break;
			default:
				break;
		}

		let elem = elems[this.typeAheadSelectedIndex];
		this.setTypeAheadInputValue(elem.id, this.typeAheadInput.nativeElement);
		elem.focus();
	}

	resetSelectedIndex() {
		this.typeAheadSelectedIndex = -1;
	}

	public templateShown = (): string => {
		let show: any = this.typeAheadSource && this.typeAheadShown;
		return <string>show;
	}
}
