/**
 * Constructor
 */
function Clock() {
  this.id = 'clock';
  this.count = 0;
}

Clock.prototype.start = function() {
  this.interval = this.interval || setInterval(this.tick.bind(this), 1000);
  this.publish();
};

Clock.prototype.stop = function() {
  clearInterval(this.interval);
  delete this.interval;
};

Clock.prototype.reset = function() {
  this.stop();
  this.count = 0;
  this.publish();
};

Clock.prototype.tick = function() {
  this.count++;
  this.publish();
};

Clock.prototype.publish = function() {
  return publish(this.id, this);
};

Clock.prototype.subscribe = function(fn) {
  return subscribe(this.id, fn);
};

Clock.prototype.unsubscribe = function(token) {
  return unsubscribe(token);
};
