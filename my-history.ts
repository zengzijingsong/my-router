const his = window.history;
class History {
  listeners: any[] = [];
  currentParams: Object = {};

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

const history = new History();

export default history;

export const useParams = <T extends Object>(): T => {
  return history.currentParams as T;
};
