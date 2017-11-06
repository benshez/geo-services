// angular
import { NgModule } from '@angular/core';

// lib
import { Angulartics2Module, Angulartics2Segment } from 'angulartics2';

// module
import { AnalyticsService } from './analytics.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    Angulartics2Module.forRoot([
      Angulartics2Segment
    ])
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsModule {

}
