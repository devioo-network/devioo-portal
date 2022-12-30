<template>
  <PagePrimary>
    <p>Redirection...</p>
    <p>
      If redirection doesn't work, click <NuxtLink to="/login">here</NuxtLink>.
    </p>
  </PagePrimary>
</template>

<script lang="ts">
import { definePageMeta } from "#imports";
import { useHead } from "#head";
import PagePrimary from "~/layouts/PagePrimary.vue";

definePageMeta({
  middleware: ["login-redirect"],
});

export default {
  name: "Index",
  components: { PagePrimary },
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
