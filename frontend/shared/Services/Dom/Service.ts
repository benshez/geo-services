
export class DomService {

    private DOM: any;

    constructor(private document: any) {
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
