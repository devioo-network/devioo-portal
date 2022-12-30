<template>
  <div class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-slate-800 py-2 sm:px-6 lg:px-8">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "PagePrimary",
};
</script>