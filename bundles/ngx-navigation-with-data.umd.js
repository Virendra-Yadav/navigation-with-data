(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ngx-navigation-with-data', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['ngx-navigation-with-data'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxNavigationWithDataService = (function () {
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
                if (data === void 0) {
                    data = {};
                }
                this.data = data;
                this.pages.push({ page: page, data: data });
                this.router.navigate([page]);
            };
        NgxNavigationWithDataService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgxNavigationWithDataService.ctorParameters = function () {
            return [
                { type: i1.Router }
            ];
        };
        /** @nocollapse */ NgxNavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NgxNavigationWithDataService_Factory() { return new NgxNavigationWithDataService(i0.inject(i1.Router)); }, token: NgxNavigationWithDataService, providedIn: "root" });
        return NgxNavigationWithDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxNavigationWithDataComponent = (function () {
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
             */ function () {
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
                if (data === void 0) {
                    data = {};
                }
                this.navigation.navigate(page, data);
            };
        NgxNavigationWithDataComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-ngx-navigation-with-data',
                        template: "\n    <p>\n      ngx-navigation-with-data works!\n      Thanks https://www.npmjs.com/~yrun\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        NgxNavigationWithDataComponent.ctorParameters = function () {
            return [
                { type: NgxNavigationWithDataService }
            ];
        };
        return NgxNavigationWithDataComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxNavigationWithDataModule = (function () {
        function NgxNavigationWithDataModule() {
        }
        NgxNavigationWithDataModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.NgxNavigationWithDataService = NgxNavigationWithDataService;
    exports.NgxNavigationWithDataComponent = NgxNavigationWithDataComponent;
    exports.NgxNavigationWithDataModule = NgxNavigationWithDataModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhL2xpYi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZS50cyIsIm5nOi8vbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhL2xpYi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEvbGliL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhID0ge307XG4gIHB1YmxpYyBwYWdlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7IH1cbiAgcHVibGljIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFnZXMucHVzaCh7cGFnZSwgZGF0YX0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYWdlXSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UgfSBmcm9tICcuL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEgd29ya3MhXG4gICAgICBUaGFua3MgaHR0cHM6Ly93d3cubnBtanMuY29tL355cnVuXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZpZ2F0aW9uOiBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICAvKipcbiAgICogZGF0YSgpIG1ldGhvZFxuICAgKiByZXR1cm5zIHRoZSB3aG9sZSBkYXRhIG9iamVjdCBvZiBwcmV2aW91c2UgcGFnZSBpZiBhbnkgZWxzZSB1bmRlZmluZWRcbiAgICogRm9yIGdldHRpbmcgdGhlIGRhdGEgb2YgcHJldmlvdXMgcGFnZW0gZWc6ICduYW1lJ1xuICAgKi9cbiAgcHVibGljIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZGF0YTtcbiAgfVxuXG4gIC8qKlxuICogZ2V0KGtleU5hbWU6U3RyaW5nKSBtZXRob2RcbiAqIHJldHVybnMgdGhlIGtleSB2YWx1ZSBvZiBkYXRhIG9iamVjdCBvZiBwcmV2aW91c2UgcGFnZSBpZiBhbnkgZWxzZSB1bmRlZmluZWRcbiAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAqL1xuICBwdWJsaWMgZ2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXQodmFsdWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGUocGFnZTpTdHJpbmcsIGRhdGE6T2JqZWN0KSBtZXRob2RcbiAgICogcGFyYW1zIDogMS4gTmFtZSBvZiByb3V0ZSBwYXRoIGF0IGFwcC1yb3V0aW5nLm1vZHVsZS50c1xuICAgKiBwYXJhbXMgOiAyLiBEYXRhIHRvIGJlIHNlbmQgdG8gbmV4dCBwYWdlIGVnIDoge25hbWU6XCJWaXJlbmRyYVwiLCBsYXN0TmFtZTpcIllhZGF2XCJ9XG4gICAqL1xuICBcbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24ubmF2aWdhdGUocGFnZSwgZGF0YSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4TmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TmF2aWdhdGlvbldpdGhEYXRhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJSb3V0ZXIiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBVUUsc0NBQW1CLE1BQWE7WUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO3dCQUhsQixFQUFFO3lCQUNELEVBQUU7U0FFb0I7Ozs7O1FBQzlCLDBDQUFHOzs7O3NCQUFDLEtBQUs7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O1FBR25CLCtDQUFROzs7OztzQkFBQyxJQUFJLEVBQUUsSUFBTztnQkFBUCxxQkFBQTtvQkFBQSxTQUFPOztnQkFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztvQkFmaENBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQUpRQyxTQUFNOzs7OzJDQURmOzs7Ozs7O0FDQUE7UUFjRSx3Q0FBbUIsVUFBd0M7WUFBeEMsZUFBVSxHQUFWLFVBQVUsQ0FBOEI7U0FBSzs7OztRQUVoRSxpREFBUTs7O1lBQVI7YUFDQzs4QkFNVSxnREFBSTs7Ozs7OztnQkFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7UUFRdkIsNENBQUc7Ozs7Ozs7c0JBQUMsS0FBSztnQkFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7O1FBUzdCLGlEQUFROzs7Ozs7OztzQkFBQyxJQUFJLEVBQUUsSUFBTztnQkFBUCxxQkFBQTtvQkFBQSxTQUFPOztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7b0JBeEN4Q0MsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw4QkFBOEI7d0JBQ3hDLFFBQVEsRUFBRSwwR0FLVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs7d0JBWFEsNEJBQTRCOzs7NkNBRHJDOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzt3QkFDOUMsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7cUJBQzFDOzswQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==