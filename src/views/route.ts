import HomeView from '@/views/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import { homeRoute } from '@/views/home';

export const NAME = 'base' as const;
export const PATH = '/' as const;

const route: RouteRecordRaw = {
  path: PATH,
  component: DefaultLayout,
  children: [
    homeRoute,
  ],
};

export default route;
