export class Observer {
  constructor(updateCallback = null) {
    this.updateCallback = updateCallback;
  }
  update() {
    if (this.updateCallback) {
      this.updateCallback();
    }
  }
}
