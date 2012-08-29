/**
 * Constructor
 */
function Simulation() {
  this.clock = new Clock;
  this.trafficLight = new TrafficLight;
  this.cars = [new Car(0), new Car(12), new Car(24)];
}

Simulation.prototype.start = function() {
  this.clock.start();
  this.trafficLight.start();
  this.cars.forEach(function(car) {
    car.start();
  });
};

Simulation.prototype.stop = function() {
  this.clock.stop();
  this.trafficLight.stop();
  this.cars.forEach(function(car) {
    car.stop();
  });
};

Simulation.prototype.reset = function() {
  this.clock.reset();
  this.trafficLight.reset();
  this.cars.forEach(function(car) {
    car.reset();
  });
};
