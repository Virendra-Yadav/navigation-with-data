# Description
This package is for navigate with data in angular, angular 2, 3, 4, 5.<br>
This package is for send data from one component to other in angular 2, 3, 4, 5.<br>
This package is mainly for beginner of Angular developement.<br>
This help you to navigate through components with some data.

## Quick Start

All you need to do is one angular project.<br>
You can create the project by open your terminal.<br>
**ng new PROJECT_NAME --routing**<br>
Here routing flag will auto generate the app-routing.module.ts file where we keep our routing paths.<br>
Install **ngx-navigation-with-data**<br>
```npm i ngx-navigation-with-data --save```
## Use of package
1. First you need to import the **NgxNavigationWithDataComponent** class in you app.module.ts<br>
2. Define some path in app-routing.module.ts file<br>
3. Import the **NgxNavigationWithDataComponent** class in your componet where you want to use this package<br>
Now you can use the package's methods.
### app.module.ts
```
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
    {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
### home.component.ts
```
import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit() {
  }

  navigateToABout() {
  this.navCtrl.navigate('about', {name:"virendta"});
  }
  
}
```

### about.component.ts
```
import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public navCtrl: NgxNavigationWithDataComponent) {
    console.log(this.navCtrl.get('name')); // it will console Virendra
    console.log(this.navCtrl.data); // it will console whole data object here
  }

  ngOnInit() {
  }

}
```

## Properties

* get(key) : method<br>
It will return the value of data object from previous component
* data : get property<br>
It will give the whole data object of previous component
* navigate(page, data) : method<br>
It will navigate to the component name of page, in routing.module file, with data
## Author

Source code can be found on [github](https://github.com/Virendra-Yadav/navigation-with-data/)

Developed by [Virendra Yadav](https://www.linkedin.com/in/virendraayadav/)
