var searchBox;
var addressInput = document.getElementById("address");

async function initAutocomplete() {

    searchBox = new google.maps.places.SearchBox(addressInput);

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        
        if (places.length < 1) {
            return;
        }

        localStorage.setItem("weatherlocal", JSON.stringify(places[0]));

        window.location = "./index.html";
    });
}