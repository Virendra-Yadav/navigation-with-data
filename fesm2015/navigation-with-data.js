import { Injectable, NgModule, defineInjectable, inject, Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavigationWithDataService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.data = {};
        this.pages = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    get(value) {
        return this.data[value];
    }
    /**
     * @param {?} page
     * @param {?=} data
     * @return {?}
     */
    push(page, data = {}) {
        this.data = data;
        this.pages.push({ page, data });
        this.router.navigate([page]);
    }
}
NavigationWithDataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NavigationWithDataService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ NavigationWithDataService.ngInjectableDef = defineInjectable({ factory: function NavigationWithDataService_Factory() { return new NavigationWithDataService(inject(Router)); }, token: NavigationWithDataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavigationWithDataComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavigationWithDataModule {
}
NavigationWithDataModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [NavigationWithDataComponent],
                exports: [NavigationWithDataComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NavigationWithDataService, NavigationWithDataComponent, NavigationWithDataModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi13aXRoLWRhdGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25hdmlnYXRpb24td2l0aC1kYXRhL2xpYi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmF2aWdhdGlvbi13aXRoLWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9uYXZpZ2F0aW9uLXdpdGgtZGF0YS9saWIvbmF2aWdhdGlvbi13aXRoLWRhdGEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgZGF0YSA9IHt9O1xuICBwYWdlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIGdldCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICB9XG5cbiAgcHVzaChwYWdlLCBkYXRhPXt9KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhZ2VzLnB1c2goe3BhZ2UsIGRhdGF9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcGFnZV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOYXZpZ2F0aW9uV2l0aERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXdpdGgtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uYXZpZ2F0aW9uLXdpdGgtZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuYXZpZ2F0aW9uLXdpdGgtZGF0YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdmlnYXRpb25XaXRoRGF0YVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuLyoqXG4gKiBnZXQocGFyYW1zKSBtZXRob2RcbiAqIHBhcmFtcyA6IDEuIEtleSBvZiBwcmV2aW91cyBwYWdlIGRhdGFcbiAqIEZvciBnZXR0aW5nIHRoZSBkYXRhIG9mIHByZXZpb3VzIHBhZ2VtIGVnOiAnbmFtZSdcbiAqIHJldHVybnMgdGhlIHZhbHVlIGF0IGRhdGEgb2JqZWN0IGZyb20gcHJldmlvdXMgcGFnZSBpZiBhbnkgZWxzZSByZXR1cm4gdW5kZWZpbmVkXG4gKi9cbiAgcHVibGljIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLmdldChrZXkpO1xuICB9XG5cbi8qKlxuICogZGF0YSgpIG1ldGhvZFxuICogcmV0dXJucyB0aGUgd2hvbGUgZGF0YSBvYmplY3Qgb2YgcHJldmlvdXNlIHBhZ2UgaWYgYW55IGVsc2UgdW5kZWZpbmVkXG4gKiBGb3IgZ2V0dGluZyB0aGUgZGF0YSBvZiBwcmV2aW91cyBwYWdlbSBlZzogJ25hbWUnXG4gKi9cbiAgcHVibGljIGdldCBkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5kYXRhO1xuICB9XG4gIFxuICAvKipcbiAgICogbmF2aWdhdGUocGFyYW1zKSBtZXRob2RcbiAgICogcGFyYW1zIDogMS4gTmFtZSBvZiByb3V0ZSBwYXRoIGF0IGFwcC1yb3V0aW5nLm1vZHVsZS50c1xuICAgKiBwYXJhbXMgOiAyLiBEYXRhIHRvIGJlIHNlbmQgdG8gbmV4dCBwYWdlIGVnIDoge25hbWU6XCJWaXJlbmRyYVwiLCBsYXN0TmFtZTpcIllhZGF2XCJ9XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGUocGFnZSwgZGF0YSkge1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKHBhZ2UsIGRhdGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uV2l0aERhdGFDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24td2l0aC1kYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmF2aWdhdGlvbldpdGhEYXRhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmlnYXRpb25XaXRoRGF0YUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbldpdGhEYXRhTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQVNFLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUZuQixFQUFFO3FCQUNSLEVBQUU7S0FDNEI7Ozs7O0lBRXRDLEdBQUcsQ0FBQyxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7SUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksR0FBQyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlCOzs7WUFoQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsTUFBTTs7Ozs7Ozs7QUNEZjs7OztJQWFFLFlBQW1CLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO0tBQUs7Ozs7SUFFMUQsUUFBUTtLQUNQOzs7Ozs7Ozs7SUFTTSxHQUFHLENBQUMsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1FBUXBCLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7O0lBUXBCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7WUF6Q2pDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7O1lBWFEseUJBQXlCOzs7Ozs7O0FDQWxDOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7In0=