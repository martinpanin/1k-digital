function initMap(lat,lng) {
    console.log(lat,lng);
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: {
                lat: lat,
                lng: lng
            }
        });
    let marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: map
    });
}