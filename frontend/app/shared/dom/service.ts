import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class DomService {

    private DOM: any;

    /**
     * Inject the Angular 2 Title Service
     * @param titleService
     */
    constructor(@Inject(DOCUMENT) private document: any) {
        this.DOM = document;
    }

    public query(selector: string): HTMLElement {
        let el: HTMLElement = this.DOM.querySelector(selector);
        return el;
    }

    public createElement(name: string, parent: HTMLElement): any {
        const el = this.DOM.createElement(name);
        el.setAttribute('name', name);
        parent.appendChild(el);
        return el;
    }
}
