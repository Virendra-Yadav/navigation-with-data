/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NgxNavigationWithDataService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.data = {};
        this.pages = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    get(value) {
        return this.data[value];
    }
    /**
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    navigate(page, data = {}) {
        this.data = data;
        this.pages.push({ page, data });
        this.router.navigate([page]);
    }
}
NgxNavigationWithDataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgxNavigationWithDataService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ NgxNavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NgxNavigationWithDataService_Factory() { return new NgxNavigationWithDataService(i0.inject(i1.Router)); }, token: NgxNavigationWithDataService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxNavigationWithDataService.prototype.data;
    /** @type {?} */
    NgxNavigationWithDataService.prototype.pages;
    /** @type {?} */
    NgxNavigationWithDataService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEvIiwic291cmNlcyI6WyJsaWIvbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLekMsTUFBTTs7OztJQUlKLFlBQW1CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUhsQixFQUFFO3FCQUNELEVBQUU7S0FFb0I7Ozs7O0lBQzlCLEdBQUcsQ0FBQyxLQUFLO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7SUFHbkIsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztZQWZoQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhID0ge307XG4gIHB1YmxpYyBwYWdlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7IH1cbiAgcHVibGljIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFnZXMucHVzaCh7cGFnZSwgZGF0YX0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYWdlXSk7XG4gIH1cblxufVxuIl19