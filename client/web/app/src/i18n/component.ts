import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IAppState,
  ILang
} from 'geoservice-shared/modules/i18n/interfaces/index';
import * as multilingual from 'geoservice-shared/modules/i18n/actions/index';
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
    private store: Store<IAppState>,
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
    this.store.dispatch(new multilingual.ChangeAction(lang));
  }

  ngOnInit() {
    this.supportedLanguages = this.languages;
  }
}
