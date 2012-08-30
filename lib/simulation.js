/**
 * Constructor
 */
function Simulation() {
  this.clock = new Clock;
  this.trafficLight = new TrafficLight;
  this.cars = [new Car(0), new Car(12), new Car(24)];
  this.rate = 1;
}

Simulation.prototype.start = function() {
  this.clock.start();
  this.trafficLight.start(this.rate);
  this.cars.forEach(function(car) {
    car.start(this.rate);
  }.bind(this));
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

Simulation.prototype.setRate = function(rate) {
  this.rate = parseInt(rate, 10) || 1;
  this.stop();
  this.start();
};
