/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NavigationWithDataService } from './navigation-with-data.service';
import { Component } from '@angular/core';
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
export { NavigationWithDataComponent };
if (false) {
    /** @type {?} */
    NavigationWithDataComponent.prototype.navCtrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmF2aWdhdGlvbi13aXRoLWRhdGEvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztJQVloRCxxQ0FBbUIsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7S0FBSzs7OztJQUUxRCw4Q0FBUTs7O0lBQVI7S0FDQzs7Ozs7Ozs7O0lBU00seUNBQUc7Ozs7Ozs7O2NBQUMsR0FBRztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7MEJBUXBCLDZDQUFJOzs7Ozs7OztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztJQVFwQiw4Q0FBUTs7Ozs7Ozs7Y0FBQyxJQUFJLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7OztnQkF6Q2pDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsNERBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBWFEseUJBQXlCOztzQ0FBbEM7O1NBWWEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbldpdGhEYXRhU2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi13aXRoLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmF2aWdhdGlvbi13aXRoLWRhdGEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmF2aWdhdGlvbi13aXRoLWRhdGEgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbi8qKlxuICogZ2V0KHBhcmFtcykgbWV0aG9kXG4gKiBwYXJhbXMgOiAxLiBLZXkgb2YgcHJldmlvdXMgcGFnZSBkYXRhXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKiByZXR1cm5zIHRoZSB2YWx1ZSBhdCBkYXRhIG9iamVjdCBmcm9tIHByZXZpb3VzIHBhZ2UgaWYgYW55IGVsc2UgcmV0dXJuIHVuZGVmaW5lZFxuICovXG4gIHB1YmxpYyBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5nZXQoa2V5KTtcbiAgfVxuXG4vKipcbiAqIGRhdGEoKSBtZXRob2RcbiAqIHJldHVybnMgdGhlIHdob2xlIGRhdGEgb2JqZWN0IG9mIHByZXZpb3VzZSBwYWdlIGlmIGFueSBlbHNlIHVuZGVmaW5lZFxuICogRm9yIGdldHRpbmcgdGhlIGRhdGEgb2YgcHJldmlvdXMgcGFnZW0gZWc6ICduYW1lJ1xuICovXG4gIHB1YmxpYyBnZXQgZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwuZGF0YTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIG5hdmlnYXRlKHBhcmFtcykgbWV0aG9kXG4gICAqIHBhcmFtcyA6IDEuIE5hbWUgb2Ygcm91dGUgcGF0aCBhdCBhcHAtcm91dGluZy5tb2R1bGUudHNcbiAgICogcGFyYW1zIDogMi4gRGF0YSB0byBiZSBzZW5kIHRvIG5leHQgcGFnZSBlZyA6IHtuYW1lOlwiVmlyZW5kcmFcIiwgbGFzdE5hbWU6XCJZYWRhdlwifVxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGEpIHtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChwYWdlLCBkYXRhKTtcbiAgfVxuXG59XG4iXX0=