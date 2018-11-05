import { Injectable, NgModule, defineInjectable, inject, Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ NavigationWithDataService.ngInjectableDef = defineInjectable({ factory: function NavigationWithDataService_Factory() { return new NavigationWithDataService(inject(Router)); }, token: NavigationWithDataService, providedIn: "root" });
    return NavigationWithDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavigationWithDataComponent = /** @class */ (function () {
    function NavigationWithDataComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /**
     * @return {?}
     */
    NavigationWithDataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * get(params) method
     * params : 1. Key of previous page data
     * For getting the data of previous pagem eg: 'name'
     * returns the value at data object from previous page if any else return undefined
     * @param {?} key
     * @return {?}
     */
    NavigationWithDataComponent.prototype.get = /**
     * get(params) method
     * params : 1. Key of previous page data
     * For getting the data of previous pagem eg: 'name'
     * returns the value at data object from previous page if any else return undefined
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.navCtrl.get(key);
    };
    Object.defineProperty(NavigationWithDataComponent.prototype, "data", {
        get: /**
         * data() method
         * returns the whole data object of previouse page if any else undefined
         * For getting the data of previous pagem eg: 'name'
         * @return {?}
         */
        function () {
            return this.navCtrl.data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * navigate(params) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?} data
     * @return {?}
     */
    NavigationWithDataComponent.prototype.navigate = /**
     * navigate(params) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?} data
     * @return {?}
     */
    function (page, data) {
        this.navCtrl.push(page, data);
    };
    NavigationWithDataComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-navigation-with-data',
                    template: "\n    <p>\n      navigation-with-data works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NavigationWithDataComponent.ctorParameters = function () { return [
        { type: NavigationWithDataService }
    ]; };
    return NavigationWithDataComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavigationWithDataModule = /** @class */ (function () {
    function NavigationWithDataModule() {
    }
    NavigationWithDataModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [NavigationWithDataComponent],
                    exports: [NavigationWithDataComponent]
                },] },
    ];
    return NavigationWithDataModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NavigationWithDataService, NavigationWithDataComponent, NavigationWithDataModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25hdmlnYXRpb24td2l0aC1kYXRhL2xpYi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmF2aWdhdGlvbi13aXRoLWRhdGEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgZGF0YSA9IHt9O1xuICBwYWdlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVzaChwYWdlLCBkYXRhPXt9KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhZ2VzLnB1c2goe3BhZ2UsIGRhdGF9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcGFnZV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uYXZpZ2F0aW9uLXdpdGgtZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuYXZpZ2F0aW9uLXdpdGgtZGF0YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuLyoqXG4gKiBnZXQocGFyYW1zKSBtZXRob2RcbiAqIHBhcmFtcyA6IDEuIEtleSBvZiBwcmV2aW91cyBwYWdlIGRhdGFcbiAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAqIHJldHVybnMgdGhlIHZhbHVlIGF0IGRhdGEgb2JqZWN0IGZyb20gcHJldmlvdXMgcGFnZSBpZiBhbnkgZWxzZSByZXR1cm4gdW5kZWZpbmVkXG4gKi9cbiAgcHVibGljIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLmdldChrZXkpO1xuICB9XG5cbi8qKlxuICogZGF0YSgpIG1ldGhvZFxuICogcmV0dXJucyB0aGUgd2hvbGUgZGF0YSBvYmplY3Qgb2YgcHJldmlvdXNlIHBhZ2UgaWYgYW55IGVsc2UgdW5kZWZpbmVkXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKi9cbiAgcHVibGljIGdldCBkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5kYXRhO1xuICB9XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGUocGFyYW1zKSBtZXRob2RcbiAgICogcGFyYW1zIDogMS4gTmFtZSBvZiByb3V0ZSBwYXRoIGF0IGFwcC1yb3V0aW5nLm1vZHVsZS50c1xuICAgKiBwYXJhbXMgOiAyLiBEYXRhIHRvIGJlIHNlbmQgdG8gbmV4dCBwYWdlIGVnIDoge25hbWU6XCJWaXJlbmRyYVwiLCBsYXN0TmFtZTpcIllhZGF2XCJ9XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGUocGFnZSwgZGF0YSkge1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UsIGRhdGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uV2l0aERhdGFDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVNFLG1DQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFGbkIsRUFBRTtxQkFDUixFQUFFO0tBQzRCOzs7OztJQUV0Qyx1Q0FBRzs7OztJQUFILFVBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Ozs7O0lBRUQsd0NBQUk7Ozs7O0lBQUosVUFBSyxJQUFJLEVBQUUsSUFBTztRQUFQLHFCQUFBLEVBQUEsU0FBTztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDOUI7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLE1BQU07OztvQ0FEZjs7Ozs7OztBQ0FBO0lBYUUscUNBQW1CLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO0tBQUs7Ozs7SUFFMUQsOENBQVE7OztJQUFSO0tBQ0M7Ozs7Ozs7OztJQVNNLHlDQUFHOzs7Ozs7OztjQUFDLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzswQkFRcEIsNkNBQUk7Ozs7Ozs7O1lBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztJQVFwQiw4Q0FBUTs7Ozs7Ozs7Y0FBQyxJQUFJLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7OztnQkF6Q2pDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsNERBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBWFEseUJBQXlCOztzQ0FBbEM7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN2Qzs7bUNBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==