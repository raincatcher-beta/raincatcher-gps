var angular = require('angular');

angular.module('wfm.gps').service('gps', ['mediator', GpsService]);

/**
 *
 * A service to subscribe to the wfm:gps:location:update topic. This service will then get the current position if available.
 *
 * @param mediator
 * @constructor
 */
function GpsService(mediator) {

  //Subscribing for the `wfm:gps:location:update` topic to get the current location.
  mediator.subscribe('wfm:gps:location:update', function() {

    //The current location is obtained from the navigator (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(location) {
        //The current location has been obtained. Publish the topic done state with the current location.
        mediator.publish('done:wfm:gps:location:update', location);
      }, function(err) {
        //There was an error getting the current position.
        mediator.publish('error:wfm:gps:location:update', new Error(err.message ? err.message : err));
      });
    } else {
      //No geolocation available
      mediator.publish('error:wfm:gps:location:update', {
        code: "GEOLOCATION_UNAVAILABLE",
        message: 'No geolocation service available.'
      });
    }
  });

}