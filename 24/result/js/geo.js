const button = document.querySelector("#getLocation");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition, errorPostion);
});

function showPosition(position) {
  document.querySelector("#lat").value = position.coords.latitude;
  document.querySelector("#lng").value = position.coords.longitude;
}

function errorPostion() {
  alert(error.message);
}
