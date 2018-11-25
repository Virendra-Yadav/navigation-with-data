import { Router } from '@angular/router';
export declare class NgxNavigationWithDataService {
    router: Router;
    data: {};
    pages: any[];
    constructor(router: Router);
    get(value: any): any;
    navigate(page: any, data?: {}): void;
}
