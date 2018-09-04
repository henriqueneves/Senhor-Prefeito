$(document).ready(function () {
    //Evento click no mapa
    map.addListener('click', function (event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        // populate yor box/field with lat, lng
        alert("Lat=" + lat + "; Lng=" + lng);
    });
});