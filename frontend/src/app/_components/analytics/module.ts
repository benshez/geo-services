import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
import { AnalyticsService } from '../../_services';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [Angulartics2Module.forRoot([Angulartics2Segment])],
    providers: [AnalyticsService]
})
export class AnalyticsModule {}
