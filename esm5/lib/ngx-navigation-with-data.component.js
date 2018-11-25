/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NgxNavigationWithDataService } from './ngx-navigation-with-data.service';
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
export { NgxNavigationWithDataComponent };
if (false) {
    /** @type {?} */
    NgxNavigationWithDataComponent.prototype.navigation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQWFoRix3Q0FBbUIsVUFBd0M7UUFBeEMsZUFBVSxHQUFWLFVBQVUsQ0FBOEI7S0FBSzs7OztJQUVoRSxpREFBUTs7O0lBQVI7S0FDQzswQkFNVSxnREFBSTs7Ozs7Ozs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztJQVF2Qiw0Q0FBRzs7Ozs7OztjQUFDLEtBQUs7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFTN0IsaURBQVE7Ozs7Ozs7O2NBQUMsSUFBSSxFQUFFLElBQU87UUFBUCxxQkFBQSxFQUFBLFNBQU87UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Z0JBeEN4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDBHQUtUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O2dCQVhRLDRCQUE0Qjs7eUNBRHJDOztTQWFhLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmd4LW5hdmlnYXRpb24td2l0aC1kYXRhIHdvcmtzIVxuICAgICAgVGhhbmtzIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9+eXJ1blxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2aWdhdGlvbjogTmd4TmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgLyoqXG4gICAqIGRhdGEoKSBtZXRob2RcbiAgICogcmV0dXJucyB0aGUgd2hvbGUgZGF0YSBvYmplY3Qgb2YgcHJldmlvdXNlIHBhZ2UgaWYgYW55IGVsc2UgdW5kZWZpbmVkXG4gICAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAgICovXG4gIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmRhdGE7XG4gIH1cblxuICAvKipcbiAqIGdldChrZXlOYW1lOlN0cmluZykgbWV0aG9kXG4gKiByZXR1cm5zIHRoZSBrZXkgdmFsdWUgb2YgZGF0YSBvYmplY3Qgb2YgcHJldmlvdXNlIHBhZ2UgaWYgYW55IGVsc2UgdW5kZWZpbmVkXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKi9cbiAgcHVibGljIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0KHZhbHVlKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIG5hdmlnYXRlKHBhZ2U6U3RyaW5nLCBkYXRhOk9iamVjdCkgbWV0aG9kXG4gICAqIHBhcmFtcyA6IDEuIE5hbWUgb2Ygcm91dGUgcGF0aCBhdCBhcHAtcm91dGluZy5tb2R1bGUudHNcbiAgICogcGFyYW1zIDogMi4gRGF0YSB0byBiZSBzZW5kIHRvIG5leHQgcGFnZSBlZyA6IHtuYW1lOlwiVmlyZW5kcmFcIiwgbGFzdE5hbWU6XCJZYWRhdlwifVxuICAgKi9cbiAgXG4gIHB1YmxpYyBuYXZpZ2F0ZShwYWdlLCBkYXRhPXt9KSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKHBhZ2UsIGRhdGEpO1xuICB9XG5cbn1cbiJdfQ==