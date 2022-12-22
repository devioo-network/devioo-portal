<template>
  <p>Redirection...</p>
  <p>
    If redirection doesn't work, click <NuxtLink to="/login">here</NuxtLink>.
  </p>
</template>

<script lang="ts">
import { definePageMeta } from "#imports";
import { useHead } from "#head";

definePageMeta({
  middleware: ["login-redirect"],
});

export default {
  name: "Index",
  setup() {
    useHead({
      title: "Redirection...",
    });
  },
};
</script>

<style scoped>
a {
  color: var(--blue);
}
</style>
