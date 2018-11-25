/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NgxNavigationWithDataService } from './ngx-navigation-with-data.service';
export class NgxNavigationWithDataComponent {
    /**
     * @param {?} navigation
     */
    constructor(navigation) {
        this.navigation = navigation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * data() method
     * returns the whole data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     * @return {?}
     */
    get data() {
        return this.navigation.data;
    }
    /**
     * get(keyName:String) method
     * returns the key value of data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     * @param {?} value
     * @return {?}
     */
    get(value) {
        return this.navigation.get(value);
    }
    /**
     * navigate(page:String, data:Object) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    navigate(page, data = {}) {
        this.navigation.navigate(page, data);
    }
}
NgxNavigationWithDataComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-navigation-with-data',
                template: `
    <p>
      ngx-navigation-with-data works!
      Thanks https://www.npmjs.com/~yrun
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NgxNavigationWithDataComponent.ctorParameters = () => [
    { type: NgxNavigationWithDataService }
];
if (false) {
    /** @type {?} */
    NgxNavigationWithDataComponent.prototype.navigation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBWWxGLE1BQU07Ozs7SUFDSixZQUFtQixVQUF3QztRQUF4QyxlQUFVLEdBQVYsVUFBVSxDQUE4QjtLQUFLOzs7O0lBRWhFLFFBQVE7S0FDUDs7Ozs7OztRQU1VLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7OztJQVF2QixHQUFHLENBQUMsS0FBSztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQVM3QixRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksR0FBQyxFQUFFO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztZQXhDeEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7O1lBWFEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UgfSBmcm9tICcuL25neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1uYXZpZ2F0aW9uLXdpdGgtZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZ3gtbmF2aWdhdGlvbi13aXRoLWRhdGEgd29ya3MhXG4gICAgICBUaGFua3MgaHR0cHM6Ly93d3cubnBtanMuY29tL355cnVuXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neE5hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZpZ2F0aW9uOiBOZ3hOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICAvKipcbiAgICogZGF0YSgpIG1ldGhvZFxuICAgKiByZXR1cm5zIHRoZSB3aG9sZSBkYXRhIG9iamVjdCBvZiBwcmV2aW91c2UgcGFnZSBpZiBhbnkgZWxzZSB1bmRlZmluZWRcbiAgICogRm9yIGdldHRpbmcgdGhlIGRhdGEgb2YgcHJldmlvdXMgcGFnZW0gZWc6ICduYW1lJ1xuICAgKi9cbiAgcHVibGljIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZGF0YTtcbiAgfVxuXG4gIC8qKlxuICogZ2V0KGtleU5hbWU6U3RyaW5nKSBtZXRob2RcbiAqIHJldHVybnMgdGhlIGtleSB2YWx1ZSBvZiBkYXRhIG9iamVjdCBvZiBwcmV2aW91c2UgcGFnZSBpZiBhbnkgZWxzZSB1bmRlZmluZWRcbiAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAqL1xuICBwdWJsaWMgZ2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXQodmFsdWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGUocGFnZTpTdHJpbmcsIGRhdGE6T2JqZWN0KSBtZXRob2RcbiAgICogcGFyYW1zIDogMS4gTmFtZSBvZiByb3V0ZSBwYXRoIGF0IGFwcC1yb3V0aW5nLm1vZHVsZS50c1xuICAgKiBwYXJhbXMgOiAyLiBEYXRhIHRvIGJlIHNlbmQgdG8gbmV4dCBwYWdlIGVnIDoge25hbWU6XCJWaXJlbmRyYVwiLCBsYXN0TmFtZTpcIllhZGF2XCJ9XG4gICAqL1xuICBcbiAgcHVibGljIG5hdmlnYXRlKHBhZ2UsIGRhdGE9e30pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24ubmF2aWdhdGUocGFnZSwgZGF0YSk7XG4gIH1cblxufVxuIl19