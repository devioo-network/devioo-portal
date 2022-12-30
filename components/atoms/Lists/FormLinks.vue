<template>
  <div class="mt-4 text-center text-sm text-blue-600 underline">
    <ul class="list-none" v-for="link in links">
      <li>
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormLinks",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
