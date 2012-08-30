// Static-like variable
Car._seed = 1;

/**
 * Constructor
 */
function Car(startingPosition) {
  this.id = ['car', Car._seed++].join('_');
  this.position = this.startingPosition = startingPosition || 0;
  this.speed = 0;

  subscribe('traffic_light', function(topic, trafficLight) {
    this.trafficLightState = trafficLight.state;
  }.bind(this));
}

Car.prototype.start = function(rate) {
  this.speed = 1;
  this.interval = this.interval || setInterval(this.move.bind(this), 1000 / (rate || 1));
  this.publish();
};

Car.prototype.stop = function() {
  this.speed = 0;
  clearInterval(this.interval);
  delete this.interval;
};

Car.prototype.reset = function() {
  this.stop();
  this.position = this.startingPosition;
  this.publish();
};

Car.prototype.considerLights = function() {
  if (this.trafficLightState === 'red' && (this.position % 50 === 0)) {
    this.speed = 0;
  }
  else {
    this.speed = 1;
  }
};

Car.prototype.move = function() {
  this.considerLights();
  this.position += this.speed;
  this.publish();
};

Car.prototype.publish = function() {
  return publish(this.id, this);
};

Car.prototype.subscribe = function(fn) {
  return subscribe(this.id, fn);
};

Car.prototype.unsubscribe = function(token) {
  return unsubscribe(token);
};
