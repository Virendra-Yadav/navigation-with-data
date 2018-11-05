/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NavigationWithDataService } from './navigation-with-data.service';
import { Component } from '@angular/core';
export class NavigationWithDataComponent {
    /**
     * @param {?} navCtrl
     */
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * get(params) method
     * params : 1. Key of previous page data
     * For getting the data of previous pagem eg: 'name'
     * returns the value at data object from previous page if any else return undefined
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.navCtrl.get(key);
    }
    /**
     * data() method
     * returns the whole data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     * @return {?}
     */
    get data() {
        return this.navCtrl.data;
    }
    /**
     * navigate(params) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     * @param {?} page
     * @param {?} data
     * @return {?}
     */
    navigate(page, data) {
        this.navCtrl.push(page, data);
    }
}
NavigationWithDataComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-navigation-with-data',
                template: `
    <p>
      navigation-with-data works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
NavigationWithDataComponent.ctorParameters = () => [
    { type: NavigationWithDataService }
];
if (false) {
    /** @type {?} */
    NavigationWithDataComponent.prototype.navCtrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmF2aWdhdGlvbi13aXRoLWRhdGEvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBV2xELE1BQU07Ozs7SUFDSixZQUFtQixPQUFrQztRQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjtLQUFLOzs7O0lBRTFELFFBQVE7S0FDUDs7Ozs7Ozs7O0lBU00sR0FBRyxDQUFDLEdBQUc7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1FBUXBCLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7SUFRcEIsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztZQXpDakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFYUSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uYXZpZ2F0aW9uLXdpdGgtZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuYXZpZ2F0aW9uLXdpdGgtZGF0YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuLyoqXG4gKiBnZXQocGFyYW1zKSBtZXRob2RcbiAqIHBhcmFtcyA6IDEuIEtleSBvZiBwcmV2aW91cyBwYWdlIGRhdGFcbiAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAqIHJldHVybnMgdGhlIHZhbHVlIGF0IGRhdGEgb2JqZWN0IGZyb20gcHJldmlvdXMgcGFnZSBpZiBhbnkgZWxzZSByZXR1cm4gdW5kZWZpbmVkXG4gKi9cbiAgcHVibGljIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLmdldChrZXkpO1xuICB9XG5cbi8qKlxuICogZGF0YSgpIG1ldGhvZFxuICogcmV0dXJucyB0aGUgd2hvbGUgZGF0YSBvYmplY3Qgb2YgcHJldmlvdXNlIHBhZ2UgaWYgYW55IGVsc2UgdW5kZWZpbmVkXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKi9cbiAgcHVibGljIGdldCBkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5kYXRhO1xuICB9XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGUocGFyYW1zKSBtZXRob2RcbiAgICogcGFyYW1zIDogMS4gTmFtZSBvZiByb3V0ZSBwYXRoIGF0IGFwcC1yb3V0aW5nLm1vZHVsZS50c1xuICAgKiBwYXJhbXMgOiAyLiBEYXRhIHRvIGJlIHNlbmQgdG8gbmV4dCBwYWdlIGVnIDoge25hbWU6XCJWaXJlbmRyYVwiLCBsYXN0TmFtZTpcIllhZGF2XCJ9XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGUocGFnZSwgZGF0YSkge1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UsIGRhdGEpO1xuICB9XG5cbn1cbiJdfQ==