class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  on(event, callback) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(callback);
  }
  emit(event, data) {
    this.events.get(event)?.forEach(cb => cb(data));
  }
}
module.exports = EventEmitter;
