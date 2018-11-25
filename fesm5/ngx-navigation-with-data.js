import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ NgxNavigationWithDataService.ngInjectableDef = defineInjectable({ factory: function NgxNavigationWithDataService_Factory() { return new NgxNavigationWithDataService(inject(Router)); }, token: NgxNavigationWithDataService, providedIn: "root" });
    return NgxNavigationWithDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxNavigationWithDataComponent = /** @class */ (function () {
    function NgxNavigationWithDataComponent(navigation) {
        this.navigation = navigation;
    }
    /**
     * @return {?}
     */
    NgxNavigationWithDataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(NgxNavigationWithDataComponent.prototype, "data", {
        get: /**
         * data() method
         * returns the whole data object of previouse page if any else undefined
         * For getting the data of previous pagem eg: 'name'
         * @return {?}
         */
        function () {
            return this.navigation.data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * get(keyName:String) method
     * returns the key value of data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     * @param {?} value
     * @return {?}
     */
    NgxNavigationWithDataComponent.prototype.get = /**
     * get(keyName:String) method
     * returns the key value of data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.navigation.get(value);
    };
    /**
     * navigate(page:String, data:Object) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    NgxNavigationWithDataComponent.prototype.navigate = /**
     * navigate(page:String, data:Object) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    function (page, data) {
        if (data === void 0) { data = {}; }
        this.navigation.navigate(page, data);
    };
    NgxNavigationWithDataComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ngx-navigation-with-data',
                    template: "\n    <p>\n      ngx-navigation-with-data works!\n      Thanks https://www.npmjs.com/~yrun\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxNavigationWithDataComponent.ctorParameters = function () { return [
        { type: NgxNavigationWithDataService }
    ]; };
    return NgxNavigationWithDataComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxNavigationWithDataModule = /** @class */ (function () {
    function NgxNavigationWithDataModule() {
    }
    NgxNavigationWithDataModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [NgxNavigationWithDataComponent],
                    exports: [NgxNavigationWithDataComponent]
                },] },
    ];
    return NgxNavigationWithDataModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxNavigationWithDataService, NgxNavigationWithDataComponent, NgxNavigationWithDataModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEvbGliL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEvbGliL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS5jb21wb25lbnQudHMiLCJuZzovL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGRhdGEgPSB7fTtcbiAgcHVibGljIHBhZ2VzID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjpSb3V0ZXIpIHsgfVxuICBwdWJsaWMgZ2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt2YWx1ZV07XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGUocGFnZSwgZGF0YT17fSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYWdlcy5wdXNoKHtwYWdlLCBkYXRhfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhZ2VdKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB9IGZyb20gJy4vbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YSB3b3JrcyFcbiAgICAgIFRoYW5rcyBodHRwczovL3d3dy5ucG1qcy5jb20vfnlydW5cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hdmlnYXRpb246IE5neE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIC8qKlxuICAgKiBkYXRhKCkgbWV0aG9kXG4gICAqIHJldHVybnMgdGhlIHdob2xlIGRhdGEgb2JqZWN0IG9mIHByZXZpb3VzZSBwYWdlIGlmIGFueSBlbHNlIHVuZGVmaW5lZFxuICAgKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5kYXRhO1xuICB9XG5cbiAgLyoqXG4gKiBnZXQoa2V5TmFtZTpTdHJpbmcpIG1ldGhvZFxuICogcmV0dXJucyB0aGUga2V5IHZhbHVlIG9mIGRhdGEgb2JqZWN0IG9mIHByZXZpb3VzZSBwYWdlIGlmIGFueSBlbHNlIHVuZGVmaW5lZFxuICogRm9yIGdldHRpbmcgdGhlIGRhdGEgb2YgcHJldmlvdXMgcGFnZW0gZWc6ICduYW1lJ1xuICovXG4gIHB1YmxpYyBnZXQodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldCh2YWx1ZSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBuYXZpZ2F0ZShwYWdlOlN0cmluZywgZGF0YTpPYmplY3QpIG1ldGhvZFxuICAgKiBwYXJhbXMgOiAxLiBOYW1lIG9mIHJvdXRlIHBhdGggYXQgYXBwLXJvdXRpbmcubW9kdWxlLnRzXG4gICAqIHBhcmFtcyA6IDIuIERhdGEgdG8gYmUgc2VuZCB0byBuZXh0IHBhZ2UgZWcgOiB7bmFtZTpcIlZpcmVuZHJhXCIsIGxhc3ROYW1lOlwiWWFkYXZcIn1cbiAgICovXG4gIFxuICBwdWJsaWMgbmF2aWdhdGUocGFnZSwgZGF0YT17fSkge1xuICAgIHRoaXMubmF2aWdhdGlvbi5uYXZpZ2F0ZShwYWdlLCBkYXRhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hOYXZpZ2F0aW9uV2l0aERhdGFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4TmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBVUUsc0NBQW1CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUhsQixFQUFFO3FCQUNELEVBQUU7S0FFb0I7Ozs7O0lBQzlCLDBDQUFHOzs7O2NBQUMsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUduQiwrQ0FBUTs7Ozs7Y0FBQyxJQUFJLEVBQUUsSUFBTztRQUFQLHFCQUFBLEVBQUEsU0FBTztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztnQkFmaEMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxNQUFNOzs7dUNBRGY7Ozs7Ozs7QUNBQTtJQWNFLHdDQUFtQixVQUF3QztRQUF4QyxlQUFVLEdBQVYsVUFBVSxDQUE4QjtLQUFLOzs7O0lBRWhFLGlEQUFROzs7SUFBUjtLQUNDOzBCQU1VLGdEQUFJOzs7Ozs7OztZQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztJQVF2Qiw0Q0FBRzs7Ozs7OztjQUFDLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBUzdCLGlEQUFROzs7Ozs7OztjQUFDLElBQUksRUFBRSxJQUFPO1FBQVAscUJBQUEsRUFBQSxTQUFPO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7O2dCQXhDeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSwwR0FLVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztnQkFYUSw0QkFBNEI7O3lDQURyQzs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzFDOztzQ0FSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9