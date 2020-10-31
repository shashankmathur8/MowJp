import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu  } from '../pages/menu/menu';
import {HttpModule} from'@angular/http'

import { Login } from '../pages/login/login';
import {ProductDetails} from '../pages/product-details/product-details'

import { Signup } from '../pages/signup/signup';

import {Cart} from '../pages/cart/cart'
import {Checkout} from '../pages/checkout/checkout'

import { ProductsByCategory } from '../pages/products-by-category/products-by-category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu ,
    ProductsByCategory,
    ProductDetails,
    Cart,
    Signup,
    Login,
    Checkout
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu ,
    ProductsByCategory,
    ProductDetails,
    Cart,
    Signup,
    Login,
    Checkout

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
