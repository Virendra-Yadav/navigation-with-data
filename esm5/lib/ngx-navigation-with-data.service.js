/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var NgxNavigationWithDataService = /** @class */ (function () {
    function NgxNavigationWithDataService(router) {
        this.router = router;
        this.data = {};
        this.pages = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NgxNavigationWithDataService.prototype.get = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.data[value];
    };
    /**
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    NgxNavigationWithDataService.prototype.navigate = /**
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    function (page, data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.pages.push({ page: page, data: data });
        this.router.navigate([page]);
    };
    NgxNavigationWithDataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxNavigationWithDataService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ NgxNavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NgxNavigationWithDataService_Factory() { return new NgxNavigationWithDataService(i0.inject(i1.Router)); }, token: NgxNavigationWithDataService, providedIn: "root" });
    return NgxNavigationWithDataService;
}());
export { NgxNavigationWithDataService };
if (false) {
    /** @type {?} */
    NgxNavigationWithDataService.prototype.data;
    /** @type {?} */
    NgxNavigationWithDataService.prototype.pages;
    /** @type {?} */
    NgxNavigationWithDataService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEvIiwic291cmNlcyI6WyJsaWIvbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0lBU3ZDLHNDQUFtQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFIbEIsRUFBRTtxQkFDRCxFQUFFO0tBRW9COzs7OztJQUM5QiwwQ0FBRzs7OztjQUFDLEtBQUs7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUduQiwrQ0FBUTs7Ozs7Y0FBQyxJQUFJLEVBQUUsSUFBTztRQUFQLHFCQUFBLEVBQUEsU0FBTztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztnQkFmaEMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxNQUFNOzs7dUNBRGY7O1NBTWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhID0ge307XG4gIHB1YmxpYyBwYWdlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7IH1cbiAgcHVibGljIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFnZXMucHVzaCh7cGFnZSwgZGF0YX0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYWdlXSk7XG4gIH1cblxufVxuIl19