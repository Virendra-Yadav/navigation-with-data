import { Router } from '@angular/router';
export declare class NavigationWithDataService {
    router: Router;
    data: {};
    pages: any[];
    constructor(router: Router);
    get(value: any): any;
    push(page: any, data?: {}): void;
}
