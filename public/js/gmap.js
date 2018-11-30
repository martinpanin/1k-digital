function initMap(lat,lng) {
    // The location of Uluru
    console.log(lat,lng);
    var uluru = {
        lat: lat,
        lng: lng
    };
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: {
                lat: lat,
                lng: lng
            }
        });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: map
    });
}