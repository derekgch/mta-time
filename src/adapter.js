// id 21 is the BDFM
// http://datamine.mta.info/mta_esi.php?key=<key>&feed_id=21
//

const url =  "http://datamine.mta.info/mta_esi.php?key=";

export function getFeed(id){

    var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
    var request = require('request');

    var requestSettings = {
    method: 'GET',
    url: 'http://datamine.mta.info/mta_esi.php?key=',
    encoding: null
    };
    request(requestSettings, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
        feed.entity.forEach(function(entity) {
        if (entity.trip_update) {
            // console.log(entity.trip_update);
        }
        });
    }
    });
}