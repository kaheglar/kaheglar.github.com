/*
 * Main
 */
var simulation = new Simulation

simulation.clock.subscribe(function(topic, clock) {
  setText(document.getElementById(topic), clock.count);
});

simulation.trafficLight.subscribe(function(topic, trafficLight) {
  setText(document.getElementById(topic), trafficLight.state);
});

simulation.cars.forEach(function(car) {
  car.subscribe(function(topic, car) {
    setText(document.getElementById(topic), car.position);
  });
});

/*
 * innerText shim
 */
function setText(el, text) {
  if ('innerText' in el) {
    el.innerText = text;
  }
  else {
    el.textContent = text;
  }
}
