import createContext from '@/utils/createContext';
import type { Ref } from 'vue';

const context = createContext('base-layout-context', (headerHeight: Ref<number>, navWidth: Ref<number>) => ({
  headerHeight,
  navWidth,
}));

export default context.useProvideContext;

export const useBaseLayoutContext = context.useInjectContext;
