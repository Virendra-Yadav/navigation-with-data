/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationWithDataService {
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
    push(page, data = {}) {
        this.data = data;
        this.pages.push({ page, data });
        this.router.navigate([page]);
    }
}
NavigationWithDataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NavigationWithDataService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ NavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationWithDataService_Factory() { return new NavigationWithDataService(i0.inject(i1.Router)); }, token: NavigationWithDataService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NavigationWithDataService.prototype.data;
    /** @type {?} */
    NavigationWithDataService.prototype.pages;
    /** @type {?} */
    NavigationWithDataService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25hdmlnYXRpb24td2l0aC1kYXRhLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLekMsTUFBTTs7OztJQUdKLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUZuQixFQUFFO3FCQUNSLEVBQUU7S0FDNEI7Ozs7O0lBRXRDLEdBQUcsQ0FBQyxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7OztJQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFDLEVBQUU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDOUI7OztZQWhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhID0ge307XG4gIHBhZ2VzID0gW107XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgZ2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt2YWx1ZV07XG4gIH1cblxuICBwdXNoKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFnZXMucHVzaCh7cGFnZSwgZGF0YX0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYWdlXSk7XG4gIH1cbn1cbiJdfQ==