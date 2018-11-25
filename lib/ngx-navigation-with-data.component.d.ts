import { OnInit } from '@angular/core';
import { NgxNavigationWithDataService } from './ngx-navigation-with-data.service';
export declare class NgxNavigationWithDataComponent implements OnInit {
    navigation: NgxNavigationWithDataService;
    constructor(navigation: NgxNavigationWithDataService);
    ngOnInit(): void;
    /**
     * data() method
     * returns the whole data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     */
    readonly data: {};
    /**
   * get(keyName:String) method
   * returns the key value of data object of previouse page if any else undefined
   * For getting the data of previous pagem eg: 'name'
   */
    get(value: any): any;
    /**
     * navigate(page:String, data:Object) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     */
    navigate(page: any, data?: {}): void;
}
