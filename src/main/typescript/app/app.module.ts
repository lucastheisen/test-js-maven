import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppCesium }  from './app-cesium.component';
import { AppCesiumViewer }  from './app-cesium-viewer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent,
      AppCesium,
      AppCesiumViewer
  ],
  bootstrap:    [ 
      AppComponent,
      AppCesium
  ]
})
export class AppModule { }