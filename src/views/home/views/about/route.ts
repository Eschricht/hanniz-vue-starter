import AboutView from '@/views/home/views/about/AboutView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const NAME = 'about' as const;
export const PATH = '/about' as const;

const route: RouteRecordRaw = {
  path: PATH,
  name: NAME,
  component: AboutView,
};

export default route;
