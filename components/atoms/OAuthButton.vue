<template>
  <button
    type="button"
    class="mr-2 mb-2 inline-flex w-fit items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white outline-none focus:ring-4"
    :class="
      backgroundClass +
      ' hover:' +
      onHoverBackgroundClass +
      ' focus:' +
      onFocusRingClass
    "
  >
    <Icon :name="icon" color="white" class="mr-2 -ml-1 h-5 w-5" />
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  name: "OAuthButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    backgroundClass: {
      type: String,
      required: true,
    },
    onHoverBackgroundClass: {
      type: String,
      required: true,
    },
    onFocusRingClass: {
      type: String,
      required: true,
    },
  },
};
</script>
