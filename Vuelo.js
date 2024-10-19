function searchFlights() {
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const departure = document.getElementById("departure").value;
  const returnDate = document.getElementById("return").value;
  const passengers = document.getElementById("passengers").value;

  alert(`Búsqueda de vuelos:\nOrigen: ${origin}\nDestino: ${destination}\nIda: ${departure}\nVuelta: ${returnDate}\nPasajeros: ${passengers}`);
}
