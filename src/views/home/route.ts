import HomeView from '@/views/home/HomeView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import DefaultHeader from '@/components/headers/DefaultHeader.vue';
import type { RouteRecordRaw } from 'vue-router';

export const NAME = 'home' as const;
export const PATH = '/' as const;

const route: RouteRecordRaw = {
  path: PATH,
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: NAME,
      components: {
        default: HomeView,
        header: DefaultHeader,
      },
    },
  ],
};

export default route;
