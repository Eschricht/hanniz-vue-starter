<template>
  <div class="prose">
    <h1>
      Welcome to hanniz-vue-starter!
    </h1>
    <ul>
      <li>Vite</li>
      <li>Typescript</li>
      <li>Vueuse</li>
      <li>ESLint</li>
      <li>Vue Router</li>
      <li>Vitest</li>
      <li>Cypress</li>
      <li>Custom Context Utility</li>
    </ul>

    <div class="border border-dark-300 px-4 rounded-2xl bg-dark-700">
      <h4>Context data (context is provided from the layout)</h4>
      <p><b>Header height:</b> {{ context.headerHeight }}px</p>
      <p><b>Side bar width:</b> {{ context.navWidth }}px</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExampleComponent from '@/components/ExampleComponent.vue';
import { useBaseLayoutContext } from '@/composition/useBaseLayoutContext';

const context = useBaseLayoutContext();
</script>
