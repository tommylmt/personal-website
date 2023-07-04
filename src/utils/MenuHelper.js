import About from "@/components/about/About.vue";
import Stack from "@/components/stack/Stack.vue";
import Culture from "@/components/culture/Culture.vue";
import NotFound from "@/components/errors/Error404.vue";

export default class MenuHelper {
  get routes() {
    return [
      { name: 'À propos', path: "/", current: true, },
      { name: 'Stack', path: "/stack", current: false },
      { name: 'Culture', path: "/culture", current: false },
    ];
  }
}