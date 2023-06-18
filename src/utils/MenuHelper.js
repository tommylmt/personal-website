import About from "@/components/about/About.vue";
import Stack from "@/components/stack/Stack.vue";
import Culture from "@/components/culture/Culture.vue";
import NotFound from "@/components/errors/Error404.vue";

export default class MenuHelper {
  constructor() {
    this.listenChanges();
    this.currentPath = window.location.hash;
  }

  get routes() {
    return {
      "/": {name: 'À propos', current: true, path: "#/", component: About},
      "/stack": {name: 'Stack', current: false, path: "#/stack", component: Stack},
      "/culture": {name: 'Culture', current: false, path: "#/culture", component: Culture},
    };
  }

  set currentPath(path) {
    this._currentPath = path;
  }

  listenChanges() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;

      window.dispatchEvent(new CustomEvent("menu.elementchange", {detail: {
        view: this.getCurrentView()
      }}));
    });
  }

  getCurrentView() {
    let element = this.routes[this._currentPath.slice(1) || '/'];

    return element?.component || NotFound;
  }
}