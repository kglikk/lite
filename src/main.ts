import './lib'

import 'reflect-metadata'; //dodałem
import 'zone.js'; //dodałem
import 'bootstrap'; //dodałem

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

var module:any;

//dodałem - uwzglednnij Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
