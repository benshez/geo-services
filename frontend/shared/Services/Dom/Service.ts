
export class DomService {

    private DOM: any;

    constructor(private document: Document) {
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

    public render(html: string): DocumentFragment {
        let fragment: DocumentFragment = this.DOM.createDocumentFragment();
        let element: HTMLElement = this.DOM.createElement('div');
        let childNodes: NodeListOf<Node> = element.childNodes;
        element.innerHTML = html;
        for (let i = 0, max = childNodes.length; i < max; i++) {
            fragment.appendChild(childNodes[i]);
        }
        return fragment;
    }
}
