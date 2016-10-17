# Feedhenry Raincatcher GPS module

This is a simple Raincatcher module that provides a service that subscribes and publishes location topics.

## Topics

### Subscription

This module subscribes to the `wfm:gps:position:update` topic. This triggers a call to the `navigator.geolocation` functionality in the browser if available.

### Publish

This module publishes the following topics:

| Topic | Parameters |
| ---- | ----------- |
|`done:wfm:gps:position:update` | See [geolocation documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) |
|`error:wfm:gps:position:update`| See [PositionError documentation](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) |

## Client Side Usage

```javascript
angular.module('app', [
require('fh-wfm-gps')
...
])
```