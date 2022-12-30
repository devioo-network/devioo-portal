<template>
  <div
    class="w-full max-w-md rounded-lg bg-slate-900 px-4 py-8 shadow-md drop-shadow-lg sm:px-10"
  >
    <div class="mt-4 text-center">
      <h2 class="mb-4 text-3xl font-extrabold text-white">{{ title }}</h2>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
