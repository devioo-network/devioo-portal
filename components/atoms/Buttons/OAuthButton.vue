<template>
  <button
    type="button"
    class="mr-2 mb-2 inline-flex w-fit items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white outline-none focus:ring-4"
    :class="backgroundClass + ' ' + hoverBackgroundClass + ' ' + focusRingClass"
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
    // DON'T FORGET THE "hover:" PREFIX
    hoverBackgroundClass: {
      type: String,
      required: true,
    },
    // DON'T FORGET THE "focus:" PREFIX
    focusRingClass: {
      type: String,
      required: true,
    },
  },
};
</script>
