import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import {
  WindowService,
  StorageService,
  ConsoleService,
  ConsoleTarget,
  LogLevel,
  LogTarget
} from '../core/services/index';

// modules
import {
  SHARED_COMPONENTS,
  SHARED_PROVIDERS
} from './index';

export const SHARED_MODULES: Array<any> = [
  CommonModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

declare var window, console, localStorage;

export function win() {
  return window;
}
export function storage() {
  return localStorage;
}
export function cons() {
  return console;
}
export function consoleLogTarget(consoleService: ConsoleService) {
  return new ConsoleTarget(consoleService, { minLogLevel: LogLevel.Debug });
}

/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */
@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: StorageService, useFactory: (storage) },
      { provide: ConsoleService, useFactory: (cons) },
      { provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true }
    ]),
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    CoreModule,
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ],
  providers: [
    ...SHARED_PROVIDERS
  ]
})
export class SharedModule { }
