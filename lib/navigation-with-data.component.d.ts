import { NavigationWithDataService } from './navigation-with-data.service';
import { OnInit } from '@angular/core';
export declare class NavigationWithDataComponent implements OnInit {
    navCtrl: NavigationWithDataService;
    constructor(navCtrl: NavigationWithDataService);
    ngOnInit(): void;
    /**
     * get(params) method
     * params : 1. Key of previous page data
     * For getting the data of previous pagem eg: 'name'
     * returns the value at data object from previous page if any else return undefined
     */
    get(key: any): any;
    /**
     * data() method
     * returns the whole data object of previouse page if any else undefined
     * For getting the data of previous pagem eg: 'name'
     */
    readonly data: {};
    /**
     * navigate(params) method
     * params : 1. Name of route path at app-routing.module.ts
     * params : 2. Data to be send to next page eg : {name:"Virendra", lastName:"Yadav"}
     */
    navigate(page: any, data: any): void;
}
