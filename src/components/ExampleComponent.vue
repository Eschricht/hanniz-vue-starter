<template>
  <p>{{ msg }}</p>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
