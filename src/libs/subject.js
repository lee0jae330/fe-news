export class Subject {
  constructor(initialState = null) {
    this.observers = [];
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.notify(newState);
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update(this.state);
    });
  }
}
