
// id 21 is the BDFM
// http://datamine.mta.info/mta_esi.php?key=<key>&feed_id=21
//

const mtaUrl =  "http://datamine.mta.info/mta_esi.php?key=&feed_id=21";
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');


export function getFeed(id){

    // var GtfsRealtimeBindings = require('gtfs-realtime-bindings');

    var requestSettings = {
    method: 'GET',
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    };

    fetch(mtaUrl).then(r=>console.log(r))

    // request(requestSettings, function (error, response, body) {
    // if (!error && response.statusCode == 200) {
    //     var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    //     console.log(feed);
    //     feed.entity.forEach(function(entity) {
    //     if (entity.trip_update) {
    //         // console.log(entity.trip_update);
    //     }
    //     });
    // }else{
    //     console.log(error, response)
    // }
    // });
}