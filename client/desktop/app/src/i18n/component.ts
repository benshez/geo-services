import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ILang
} from 'geoservice-shared/modules/i18n/interfaces/index';
import * as fromI18n from 'geoservice-shared/modules/i18n/index';
import { LogService } from 'geoservice-shared/modules/core/services/index';
import { Languages } from 'geoservice-shared/modules/i18n/services/index';
@Component({
  moduleId: module.id.toString(),
  selector: 'geo-service-i18n',
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
    this.store.take(1).subscribe((s: any) => {
      this.lang = s && s.i18n ? s.i18n.lang : '';
    });
  }

  changeLang(e: any) {
    let lang = e.target.value;
    this.log.debug(`Language change: ${lang}`);

    this.store.dispatch(new fromI18n.LangChangedAction(lang));
  }

  ngOnInit() {
    this.supportedLanguages = this.languages;
  }
}
