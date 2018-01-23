import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILang, I18NState } from '../../../_interfaces';
import { LogService, Languages } from '../../../_services';
import { LangChangedAction } from '../../../_components/i18n';
import * as fromI18n from '../../i18n';

@Component({
    moduleId: module.id.toString(),
    selector: 'geoservice-i18n',
    templateUrl: 'component.html'
})
export class I18NComponent implements OnInit {
    public lang: string;
    public supportedLanguages: Array<ILang>;

    constructor(
        private store: Store<fromI18n.I18NState>,
        private log: LogService,
        @Inject(Languages) private languages
    ) {
        // this.store.take(1).subscribe((s: any) => {
        //     this.lang = s && s.i18n ? s.i18n.lang : '';
        // });
        this.store.subscribe((s: any) => {
            this.lang = s && s.i18n ? s.i18n.lang : '';
        });
    }

    changeLang(e: any) {
        const lang = e.target.value;

        this.log.debug(`Language change: ${lang}`);

        this.store.dispatch(new fromI18n.LangChangedAction(lang));
    }

    ngOnInit() {
        this.supportedLanguages = this.languages;
    }
}
