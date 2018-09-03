export default class EventEmitter {
  constructor() {
    this.eventListeners = {};
  }

  on(event, listener) {
    const listeners = this.eventListeners[event] || [];
    listeners.push(listener);
    this.eventListeners[event] = listeners;
  }

  emit(event, ...args) {
    const listeners = this.eventListeners[event] || [];
    listeners.forEach(listener => listener(...args));
  }
}
