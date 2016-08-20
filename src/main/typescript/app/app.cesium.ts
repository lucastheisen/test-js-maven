/// <reference path="../cesium/cesium.d.ts" />
import { Component } from '@angular/core';

@Component({
  selector: 'cesium',
  template: `
    <style>
      @import url(js/node_modules/cesium/Build/Cesium/Widgets/widgets.css);
      html, body, #cesiumContainer {
          width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;
      }
    </style>
    <div id="cesiumContainer" style="width:400px;height:400px;"></div>`
})
export class AppCesium {
  viewer:Cesium.Viewer;

  ngOnInit() {
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
          url : 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
      }),
      baseLayerPicker : false
    });
  }
}
 