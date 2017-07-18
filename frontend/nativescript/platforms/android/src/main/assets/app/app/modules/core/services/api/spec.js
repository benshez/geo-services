/*import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './service';

export function main() {
    describe('Api Service', () => {
        let apiService: ApiService;
        let mockBackend: MockBackend;
        let initialResponse: any;

        beforeEach(() => {

            let injector = ReflectiveInjector.resolveAndCreate([
                ApiService,
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
            ]);
            apiService = injector.get(ApiService);
            mockBackend = injector.get(MockBackend);

            let connection: any;
            mockBackend.connections.subscribe((c: any) => connection = c);
            initialResponse = apiService.get('');
            connection.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
        });

        it('should return an Observable when get called', () => {
            expect(initialResponse).toEqual(jasmine.any(Observable));
        });

        it('should resolve to list of names when get called', () => {
            let names: any;
            initialResponse.subscribe((data: any) => names = data);
            expect(names).toEqual(['Dijkstra', 'Hopper']);
        });
    });
}*/

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBpL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q0ciLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9hcGkvc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHsgUmVmbGVjdGl2ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VSZXF1ZXN0T3B0aW9ucywgQ29ubmVjdGlvbkJhY2tlbmQsIEh0dHAsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTW9ja0JhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICBkZXNjcmliZSgnQXBpIFNlcnZpY2UnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwaVNlcnZpY2U6IEFwaVNlcnZpY2U7XHJcbiAgICAgICAgbGV0IG1vY2tCYWNrZW5kOiBNb2NrQmFja2VuZDtcclxuICAgICAgICBsZXQgaW5pdGlhbFJlc3BvbnNlOiBhbnk7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xyXG4gICAgICAgICAgICAgICAgQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIE1vY2tCYWNrZW5kLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEh0dHAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZnVuY3Rpb24gKGJhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogQmFzZVJlcXVlc3RPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbTW9ja0JhY2tlbmQsIEJhc2VSZXF1ZXN0T3B0aW9uc11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBhcGlTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KEFwaVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBtb2NrQmFja2VuZCA9IGluamVjdG9yLmdldChNb2NrQmFja2VuZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29ubmVjdGlvbjogYW55O1xyXG4gICAgICAgICAgICBtb2NrQmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGM6IGFueSkgPT4gY29ubmVjdGlvbiA9IGMpO1xyXG4gICAgICAgICAgICBpbml0aWFsUmVzcG9uc2UgPSBhcGlTZXJ2aWNlLmdldCgnJyk7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQobmV3IFJlc3BvbnNlKG5ldyBSZXNwb25zZU9wdGlvbnMoeyBib2R5OiAnW1wiRGlqa3N0cmFcIiwgXCJIb3BwZXJcIl0nIH0pKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGFuIE9ic2VydmFibGUgd2hlbiBnZXQgY2FsbGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoaW5pdGlhbFJlc3BvbnNlKS50b0VxdWFsKGphc21pbmUuYW55KE9ic2VydmFibGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoJ3Nob3VsZCByZXNvbHZlIHRvIGxpc3Qgb2YgbmFtZXMgd2hlbiBnZXQgY2FsbGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZXM6IGFueTtcclxuICAgICAgICAgICAgaW5pdGlhbFJlc3BvbnNlLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiBuYW1lcyA9IGRhdGEpO1xyXG4gICAgICAgICAgICBleHBlY3QobmFtZXMpLnRvRXF1YWwoWydEaWprc3RyYScsICdIb3BwZXInXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSovXHJcbiJdfQ==
