const his = window.history;
class History {
  listeners: any[] = [];

  constructor() {
    this.listeners = [];
  }

  push = (path: string) => {
    his.pushState({}, "", path);
    this.notifyAll();
  };

  listen = (listener) => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((ele) => ele !== listener);
    };
  };

  notifyAll = () => {
    this.listeners.forEach((lis) => {
      lis();
    });
  };
}

export default new History();
