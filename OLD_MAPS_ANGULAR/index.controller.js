"use strict";

(function(){
  angular
  .module("maptime")
  .controller("mainController", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    function getPoints() {
      var points = [
        new google.maps.LatLng(38.902551, -77.035368),
        new google.maps.LatLng(38.902745, -77.034586),
        new google.maps.LatLng(38.902842, -77.033688),
        new google.maps.LatLng(38.902919, -77.032815),
        new google.maps.LatLng(38.902992, -77.032112),
        new google.maps.LatLng(38.903100, -77.031461),
        new google.maps.LatLng(38.903206, -77.030829),
        new google.maps.LatLng(38.903273, -77.030324),
        new google.maps.LatLng(38.903316, -77.030023),
        new google.maps.LatLng(38.903357, -77.029794),
        new google.maps.LatLng(38.903371, -77.029687)
      ];
      return points;
    };

    function createHeatLayer(heatLayer) {
      var pointArray = new google.maps.MVCArray(getPoints());
      heatLayer.setData(pointArray);
    };

    function updateHeatLayer(heatLayer, newLat, newLong) {
      var points = getPoints();
      points.push(new google.maps.LatLng(newLat, newLong));
      var pointArray = new google.maps.MVCArray(points);
      console.log(newLat)
      console.log(newLong)
      this.heatLayer.setData(pointArray);
    };
    $scope.map = {
                center: {
                latitude: 38.907240,
                longitude: -77.036591
                },
                showHeat: true,
                zoom: 14,
                heatLayerCallback: function (layer) {
                  //set the heat layers backend data
                  var heatLayer = new createHeatLayer(layer);
                },
                toggleHeat: function() {
                  this.showHeat = !this.showHeat;
                }

            };

    uiGmapGoogleMapApi.then(function(maps) {

    });
  });


}());
