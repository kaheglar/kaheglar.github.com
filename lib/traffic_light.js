/**
 * Constructor
 */
function TrafficLight() {
  this.id = 'traffic_light';
  this.state = 'green';
}

TrafficLight.prototype.start = function(rate) {
  this.interval = this.interval || setInterval(this.change.bind(this), 10000 / (rate || 1));
  this.publish();
};

TrafficLight.prototype.stop = function() {
  clearInterval(this.interval);
  delete this.interval;
};

TrafficLight.prototype.reset = function() {
  this.stop();
  this.state = 'green';
  this.publish();
};

TrafficLight.prototype.change = function() {
  this.state = this.state === 'red' ? 'green' : 'red';
  this.publish();
};

TrafficLight.prototype.publish = function() {
  return publish(this.id, this);
};

TrafficLight.prototype.subscribe = function(fn) {
  return subscribe(this.id, fn);
};

TrafficLight.prototype.unsubscribe = function(token) {
  return unsubscribe(token);
};
