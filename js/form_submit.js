var marker = {}

function SubmitForm() 
{
    var eventName = document.getElementById('event-name').value
    var eventTags = document.getElementById('request-tags').value
    var userName = document.getElementById('user-name').value
    var groupSize = document.getElementById('group-size').value

    var markerLocation = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    }

    var latLngArray = [];
    latLngArray.push(markerLocation.lng);
    latLngArray.push(markerLocation.lat);

    var tagsArray = eventTags.split("#").slice(1);

    var groupSizeArray = groupSize.split("-")

    console.log(groupSizeArray)

    console.log(tagsArray)

    var data = {
        location: {
            type: 'Point',
            coordinates : latLngArray
        },
        name: userName,
        tags: tagsArray,
        size: parseInt(groupSizeArray[1])

    }

    var request = new XMLHttpRequest()

    request.open('POST', 'http://85ac985e.ngrok.io/api/chats', true);

    request.onload = function() {

    }

    request.send(JSON.stringify(data))
    

}

function myMap() {

    var myLatLng = {lat: 50.440296, lng: -104.611434};

    var mapProp= {
      center:myLatLng,
      zoom:15,
    };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

      marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          draggable:true,
          title:"Drag me!"
      });

      var lat = marker.getPosition().lat();
      var lng = marker.getPosition().lng();

      console.log(lat)
      console.log(lng)

    }

