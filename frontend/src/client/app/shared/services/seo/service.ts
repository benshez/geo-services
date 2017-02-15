import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomService } from '../dom/service';


@Injectable()
export class SeoService {
    /**
     * Angular 2 Title Service
     */
    private titleService: Title;
    /**
     * <head> Element of the HTML document
     */
    private headElement: HTMLElement;
    /**
     * <head> Element of the HTML document
     */
    private metaDescription: HTMLElement;
    /**
     * <head> Element of the HTML document
     */
    private robots: HTMLElement;

    private keywords: HTMLElement;

    /**
     * Inject the Angular 2 Title Service
     * @param titleService
     */
    constructor(titleService: Title, private dom: DomService) {
        this.titleService = titleService;
        this.headElement = this.dom.query('head');
        this.metaDescription = this.getOrCreateMetaElement('description');
        this.robots = this.getOrCreateMetaElement('robots');
        this.keywords = this.getOrCreateMetaElement('keywords');
    }

    public getTitle(): string {
        return this.titleService.getTitle();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public getMetaDescription(): string {
        return this.metaDescription.getAttribute('content');
    }

    public setMetaDescription(description: string) {
        this.metaDescription.setAttribute('content', description);
    }

    public getMetaRobots(): string {
        return this.robots.getAttribute('content');
    }

    public setMetaRobots(robots: string) {
        this.robots.setAttribute('content', robots);
    }

    public getMetaKeyWords(): string {
        return this.keywords.getAttribute('content');
    }

    public setMetaKeyWords(keywords: string) {
        this.keywords.setAttribute('content', keywords);
    }
    /**
     * get the HTML Element when it is in the markup, or create it.
     * @param name
     * @returns {HTMLElement}
     */
    private getOrCreateMetaElement(name: string): HTMLElement {
        let selector = `meta[name="${name}"]`;
        let el: HTMLElement = this.dom.query(selector);
        if (el === null) this.dom.createElement(name, this.headElement);
        return el;
    }
}
