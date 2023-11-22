let map;

async function initMap() {
  const { Map, Marker, InfoWindow } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 12.9716, lng: 77.5946 },
    zoom: 12,
  });

  const marker = new Marker({
    position: { lat: 12.9716, lng: 77.5946 },
    map: map,
    label: "",
    title: "Bengaluru",
    animation: google.maps.Animation.DROP,
  });

  const infoWindow = new InfoWindow({
    content: "<p>Shipping Address: Your Address Here</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

initMap();
