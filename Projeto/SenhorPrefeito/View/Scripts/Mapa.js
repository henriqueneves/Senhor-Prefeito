var geocoder;
var map;

//Inicializando Mapa
function initMap() {

    //Inicializando mapa em Rio Preto
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -20.8, lng: -49.38 },
        zoom: 14
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });
    geocoder = new google.maps.Geocoder();
    // Geolocalização para startar mapa perto de onde está o usuário
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Você está aqui.');

            map.setCenter(pos);
            map.setZoom(15);


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    //Marker Personalizado
    var image = '../Images/MapaIcon/red.png';
    var marker = new google.maps.Marker({
        position: { lat: -20.8, lng: -49.38 },
        map: map,
        icon: image
    });

    //Exibir Janela ao clicar no marker
    marker.addListener('click', function () {
        var contentString = montarJanela(-20.8, -49.38);
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        infowindow.open(map, marker);
    });


    //Carregar pontos retornados do Json
    map.addListener('click', function (event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        // populate yor box/field with lat, lng
        //alert("Lat=" + lat + "; Lng=" + lng);
    });

    //Buscar pelo endereço do campo
    $("#btnEndereco").click(function () {
        if ($(this).val() != "")
            carregarNoMapa($("#txtEndereco").val());
    })

    //Preencher campo após a busca
    $("#txtEndereco").blur(function () {
        if ($(this).val() != "")
            carregarNoMapa($(this).val());
    });

    //Autosugeste do mapa
    $("#txtEndereco").autocomplete({
        source: function (request, response) {
            geocoder.geocode({ 'address': request.term + ', Brasil', 'region': 'BR' }, function (results, status) {
                response($.map(results, function (item) {
                    return {
                        label: item.formatted_address,
                        value: item.formatted_address,
                        latitude: item.geometry.location.lat(),
                        longitude: item.geometry.location.lng()
                    }
                }));
            })
        },
        select: function (event, ui) {
            $("#txtLatitude").val(ui.item.latitude);
            $("#txtLongitude").val(ui.item.longitude);
            var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
            map.setCenter(location);
            map.setZoom(16);
        }
    });
}

function montarJanela(lat, lng) {

    //Montar janela click  
    return '<div id="InfoWindow">' +
    '<h3 id="tituloInfoWindow" class="firstHeading">Vários buracos na rua</h3>' +
    '<img src="../Images/no-image.jpg" class="left"/>' +
    '<div id="bodyInfoWindow">' +
    '<p><b>Tipo: </b>Buraco</p>' +
    '<p><b>Data de Registro: </b>16/12/2015 - 17:20</p>' +
    '<p><b>Endereço: </b>' + endereco(lat, lng) + '</p>' +
    '<p><b>Descrição: </b>O buraco encontra-se na rua faz semanas, recentemente um motoqueiro caiu nele e se ralou todo. Quando chove fica muito dificil de ver o buraco.</p>' +
    '</div>' +
    '<p class="right"><a href="#">' +
    'Mais Informações</a></p>' +
    '</div>';
}

function endereco(lat, lng) {
    //Retornando de um json o nome do ponto por completo
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ', ' + lng + "&sensor=false";
    var address;
    var request = $.ajax({
        dataType: "json",
        url: url,
        async: false,
        success: function (data) {
            address = data.results[0].formatted_address;
        }
    });
    return address;
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Erro: Geolocalização falhou.' :
                          'Erro: Seu navegador não possui suporte a geolocalização.');
}

function carregarNoMapa(endereco) {
    geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                $('#txtEndereco').val(results[0].formatted_address);
                $('#txtLatitude').val(latitude);
                $('#txtLongitude').val(longitude);

                var location = new google.maps.LatLng(latitude, longitude);
                map.setCenter(location);
                map.setZoom(16);
            }
        }
    });
}
