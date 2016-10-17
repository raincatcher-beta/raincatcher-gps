var angular = require('angular');


angular.module('wfm.gps', ['wfm.core.mediator']);

//Setting Up The GPS Service
require('./gps/gps-service');

module.exports = 'wfm.gps';