document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationInput');
    const autocomplete = new google.maps.places.Autocomplete(locationInput);
});