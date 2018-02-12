import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Store, StateObservable } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { INavigationState } from '../../_interfaces/navigation/INavigation';
import { GetLeftSideNavigationState } from '../../_reducers/navigation/reducer';

@Component({
    moduleId: module.id,
    selector: 'geoservices-main-menu',
    templateUrl: './component.html',
    animations: [trigger(
        'toggleNav',
        [
            state('collapsed, void', style({ transform: 'translateX(-100%)' })),
            state('expanded', style({ transform: 'translateX(0)' })),
            transition('collapsed <=> expanded',
                [
                    animate(200),
                    animate(200)
                ]
            )
        ]
    )],
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../app.style.css'
    ],
    providers: [Store]
})
export class MainMenuComponent {
    private year = new Date().getFullYear();
    public navState: string;

    //constructor(private router: Router) {
    constructor(private router: Router, private store: Store<INavigationState>) {
        this.store.select(GetLeftSideNavigationState).subscribe((state) => {
            debugger;
        });
        if (window.innerWidth < 768) {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }

    @HostBinding('attr.id') protected get id(): string {
        return 'app';
    }

    @HostBinding('class') protected get appClass(): string {
        return 'app container-fluid';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }

    public showNav() {
        return this.router.url !== '/signin';
    }

    public toggleNav() {
        if (this.navState === 'expanded') {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }
}
