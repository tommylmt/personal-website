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

  listenChanges() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
      this.setCurrentLink(window.location.hash);
    });
  }

  setCurrentLink(hash) {
    let element = this.routes[hash.slice(1) || '/'];
    Object.keys(this.routes).forEach(key => { this.routes[key].current = false });

    element.current = true;
  }

  getCurrentView() {
    let element = this.routes[this.currentPath.slice(1) || '/'];

    console.log(element);
    return element?.component || NotFound;
  }
}