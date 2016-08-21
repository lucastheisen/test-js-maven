/// <reference path="../cesium/cesium.d.ts" />
import { Component } from '@angular/core';

@Component({
  selector: 'cesium-viewer',
  styles: [`
      #cesiumViewerContainer {
          width: 100%; 
          height: 100%; 
          margin: 0; 
          padding: 0; 
          overflow: hidden;
      }
  `],
  template: `
    <div id="cesiumViewerContainer"></div>
  `
})
export class AppCesiumViewer {
  viewer:Cesium.Viewer;

  ngOnInit() {
    this.viewer = new Cesium.Viewer('cesiumViewerContainer', {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
          url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
      }),
      infoBox: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
    });
  }
}
 