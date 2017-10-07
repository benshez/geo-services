// libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, RouterExtensions } from '../../modules/core/index';
import { getNames, IAppState } from '../../modules/ngrx/index';
import { NameList } from '../../modules/sample/index';

// app
@Component({
	moduleId: module.id,
	selector: 'sd-home',
	templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
	styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class HomeComponent implements OnInit {
	public names$: Observable<any>;
	public newName: string;

	constructor(private store: Store<IAppState>, public routerext: RouterExtensions) { }

	ngOnInit() {
		this.names$ = this.store.let(getNames);
		this.newName = '';
	}

    /*
     * @param newname  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
	addName(): boolean {
		this.store.dispatch(new NameList.AddAction(this.newName));
		this.newName = '';
		return false;
	}

	readAbout() {
		// Try this in the {N} app
		// {N} can use these animation options
		this.routerext.navigate(['/about'], {
			transition: {
				duration: 1000,
				name: 'slideTop',
			}
		});
	}
}
