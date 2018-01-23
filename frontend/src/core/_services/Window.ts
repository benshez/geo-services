import { Injectable } from '@angular/core';
import { IWindow } from '../_interfaces';

@Injectable()
export class WindowService implements IWindow {
    public navigator: any = {};
    public location: any = {};
    public alert(_msg: string): void {
        return;
    }
    public confirm(_msg: string): void {
        return;
    }
}
