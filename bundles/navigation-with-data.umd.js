(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('navigation-with-data', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['navigation-with-data'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavigationWithDataService = (function () {
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
                if (data === void 0) {
                    data = {};
                }
                this.data = data;
                this.pages.push({ page: page, data: data });
                this.router.navigate([page]);
            };
        NavigationWithDataService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NavigationWithDataService.ctorParameters = function () {
            return [
                { type: i1.Router }
            ];
        };
        /** @nocollapse */ NavigationWithDataService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationWithDataService_Factory() { return new NavigationWithDataService(i0.inject(i1.Router)); }, token: NavigationWithDataService, providedIn: "root" });
        return NavigationWithDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavigationWithDataComponent = (function () {
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
             */ function () {
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
            { type: i0.Component, args: [{
                        selector: 'lib-navigation-with-data',
                        template: "\n    <p>\n      navigation-with-data works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        NavigationWithDataComponent.ctorParameters = function () {
            return [
                { type: NavigationWithDataService }
            ];
        };
        return NavigationWithDataComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavigationWithDataModule = (function () {
        function NavigationWithDataModule() {
        }
        NavigationWithDataModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.NavigationWithDataService = NavigationWithDataService;
    exports.NavigationWithDataComponent = NavigationWithDataComponent;
    exports.NavigationWithDataModule = NavigationWithDataModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZS50cyIsIm5nOi8vbmF2aWdhdGlvbi13aXRoLWRhdGEvbGliL25hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudC50cyIsIm5nOi8vbmF2aWdhdGlvbi13aXRoLWRhdGEvbGliL25hdmlnYXRpb24td2l0aC1kYXRhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGRhdGEgPSB7fTtcbiAgcGFnZXMgPSBbXTtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBnZXQodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3ZhbHVlXTtcbiAgfVxuXG4gIHB1c2gocGFnZSwgZGF0YT17fSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5wYWdlcy5wdXNoKHtwYWdlLCBkYXRhfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhZ2VdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmF2aWdhdGlvbi13aXRoLWRhdGEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmF2aWdhdGlvbi13aXRoLWRhdGEgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbi8qKlxuICogZ2V0KHBhcmFtcykgbWV0aG9kXG4gKiBwYXJhbXMgOiAxLiBLZXkgb2YgcHJldmlvdXMgcGFnZSBkYXRhXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKiByZXR1cm5zIHRoZSB2YWx1ZSBhdCBkYXRhIG9iamVjdCBmcm9tIHByZXZpb3VzIHBhZ2UgaWYgYW55IGVsc2UgcmV0dXJuIHVuZGVmaW5lZFxuICovXG4gIHB1YmxpYyBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5nZXQoa2V5KTtcbiAgfVxuXG4vKipcbiAqIGRhdGEoKSBtZXRob2RcbiAqIHJldHVybnMgdGhlIHdob2xlIGRhdGEgb2JqZWN0IG9mIHByZXZpb3VzZSBwYWdlIGlmIGFueSBlbHNlIHVuZGVmaW5lZFxuICogRm9yIGdldHRpbmcgdGhlIGRhdGEgb2YgcHJldmlvdXMgcGFnZW0gZWc6ICduYW1lJ1xuICovXG4gIHB1YmxpYyBnZXQgZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwuZGF0YTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIG5hdmlnYXRlKHBhcmFtcykgbWV0aG9kXG4gICAqIHBhcmFtcyA6IDEuIE5hbWUgb2Ygcm91dGUgcGF0aCBhdCBhcHAtcm91dGluZy5tb2R1bGUudHNcbiAgICogcGFyYW1zIDogMi4gRGF0YSB0byBiZSBzZW5kIHRvIG5leHQgcGFnZSBlZyA6IHtuYW1lOlwiVmlyZW5kcmFcIiwgbGFzdE5hbWU6XCJZYWRhdlwifVxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGEpIHtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChwYWdlLCBkYXRhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOYXZpZ2F0aW9uV2l0aERhdGFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiUm91dGVyIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNFLG1DQUFtQixNQUFjO1lBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTt3QkFGbkIsRUFBRTt5QkFDUixFQUFFO1NBQzRCOzs7OztRQUV0Qyx1Q0FBRzs7OztZQUFILFVBQUksS0FBSztnQkFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7Ozs7OztRQUVELHdDQUFJOzs7OztZQUFKLFVBQUssSUFBSSxFQUFFLElBQU87Z0JBQVAscUJBQUE7b0JBQUEsU0FBTzs7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCOztvQkFoQkZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQUpRQyxTQUFNOzs7O3dDQURmOzs7Ozs7O0FDQUE7UUFhRSxxQ0FBbUIsT0FBa0M7WUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7U0FBSzs7OztRQUUxRCw4Q0FBUTs7O1lBQVI7YUFDQzs7Ozs7Ozs7O1FBU00seUNBQUc7Ozs7Ozs7O3NCQUFDLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OEJBUXBCLDZDQUFJOzs7Ozs7O2dCQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7UUFRcEIsOENBQVE7Ozs7Ozs7O3NCQUFDLElBQUksRUFBRSxJQUFJO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7OztvQkF6Q2pDQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsUUFBUSxFQUFFLDREQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7Ozt3QkFYUSx5QkFBeUI7OzswQ0FBbEM7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO3dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDdkM7O3VDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9