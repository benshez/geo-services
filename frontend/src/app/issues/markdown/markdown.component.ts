import { Component, Input, OnChanges } from '@angular/core';
import marked from 'marked';

@Component({
    selector: 'markdown',
    template: '<div [innerHTML]="convertedData"></div>'
})
export class MarkdownComponent implements OnChanges {
    @Input('data') public data: string;
    public convertedData: string;

    ngOnChanges() {
        const md = marked.setOptions({});
        this.convertedData = md.parse(this.data);
    }
}
