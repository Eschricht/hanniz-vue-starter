<template>
  <RouterView
    v-slot="{ Component, route }"
    name="header"
  >
    <header
      v-if="!route.meta.disableHeader"
      ref="header"
      class="fixed top-0 -inset-x-0"
    >
      <div class="border-b border-dark-300 py-2 bg-dark-800/80 backdrop-blur-2 text-white">
        <component
          :is="Component || DefaultHeader"
        />
      </div>
    </header>
  </RouterView>
  <RouterView
    v-slot="{ Component, route }"
    name="leftSideBar"
  >
    <nav
      v-if="!route.meta.disableLeftNav"
      ref="nav"
      class="fixed left-0 top-0"
      :style="{ paddingTop: `${headerHeight}px` }"
    >
      <div class="h-screen bg-dark-800/80 backdrop-blur-2 py-4 border-r border-dark">
        <component
          :is="Component || DefaultSideBar"
        />
      </div>
    </nav>
  </RouterView>
  <main
    :style="{ paddingTop: `${headerHeight}px`, marginLeft: `${navWidth}px` }"
  >
    <div class="p-4">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import DefaultHeader from '@/components/headers/DefaultHeader.vue';
import DefaultSideBar from '@/components/side-bars/DefaultSideBar.vue';
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import useProvideBaseLayoutContext from '@/composition/useBaseLayoutContext';

const header = ref<HTMLElement>();
const nav = ref<HTMLElement>();

const { height: headerHeight } = useElementSize(header);
const { width: navWidth } = useElementSize(nav);

useProvideBaseLayoutContext(headerHeight, navWidth);

</script>
