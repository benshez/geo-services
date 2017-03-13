import { Component } from '@angular/core';
import {
    async,
    TestBed
} from '@angular/core/testing';

import { LoginModule } from './module';

export function main() {
    describe('Login component', () => {
        // Setting module for testing
        // Disable old forms

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [LoginModule]
            });
        });

        it('should work',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

                        expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<sd-login></sd-login>'
})
class TestComponent { }
