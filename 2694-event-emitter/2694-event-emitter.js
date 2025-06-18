class EventEmitter {
  constructor() {
    this.events = new Map(); // Map of event name to array of {callback}
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    const listener = { callback };

    listeners.push(listener);

    return {
      unsubscribe: () => {
        const idx = listeners.indexOf(listener);
        if (idx !== -1) {
          listeners.splice(idx, 1);
        }
        return undefined;
      }
    };
  }

  emit(eventName, args = []) {
    const listeners = this.events.get(eventName);
    if (!listeners) return [];

    return listeners.map(({ callback }) => callback(...args));
  }
}
