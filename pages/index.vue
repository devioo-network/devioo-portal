<template>
  <p>Redirection...</p>
  <p>If redirection doesn't work, <NuxtLink to="/login">here</NuxtLink>.</p>
</template>

<script lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ["login-redirect"],
})

export default {
  name: "Index",
}
</script>

<style lang="scss">
a {
  color: $blue;
}
</style>