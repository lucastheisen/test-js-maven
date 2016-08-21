/// <reference path="../cesium/cesium.d.ts" />
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'cesium',
  styles: [`
      @import url(js/node_modules/cesium/Build/Cesium/Widgets/widgets.css);
      #cesiumContainer {
        width: 800px;
        height: 800px;
      }
  `],
  template: `
    <div id="cesiumContainer">
      <cesium-viewer></cesium-viewer>
    </div>
  `
})
export class AppCesium {
}
 