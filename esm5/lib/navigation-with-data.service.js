/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var NavigationWithDataService = /** @class */ (function () {
    function NavigationWithDataService(router) {
        this.router = router;
        this.data = {};
        this.pages = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NavigationWithDataService.prototype.get = /**
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
    NavigationWithDataService.prototype.push = /**
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
    NavigationWithDataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NavigationWithDataService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ NavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationWithDataService_Factory() { return new NavigationWithDataService(i0.inject(i1.Router)); }, token: NavigationWithDataService, providedIn: "root" });
    return NavigationWithDataService;
}());
export { NavigationWithDataService };
if (false) {
    /** @type {?} */
    NavigationWithDataService.prototype.data;
    /** @type {?} */
    NavigationWithDataService.prototype.pages;
    /** @type {?} */
    NavigationWithDataService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25hdmlnYXRpb24td2l0aC1kYXRhLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0lBUXZDLG1DQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFGbkIsRUFBRTtxQkFDUixFQUFFO0tBQzRCOzs7OztJQUV0Qyx1Q0FBRzs7OztJQUFILFVBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7SUFFRCx3Q0FBSTs7Ozs7SUFBSixVQUFLLElBQUksRUFBRSxJQUFPO1FBQVAscUJBQUEsRUFBQSxTQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM5Qjs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsTUFBTTs7O29DQURmOztTQU1hLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgZGF0YSA9IHt9O1xuICBwYWdlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVzaChwYWdlLCBkYXRhPXt9KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhZ2VzLnB1c2goe3BhZ2UsIGRhdGF9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcGFnZV0pO1xuICB9XG59XG4iXX0=