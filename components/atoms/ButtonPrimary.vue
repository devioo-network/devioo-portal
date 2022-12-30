<template>
  <div class="mt-6 flex justify-center">
    <button
      :type="type"
      @click="onClick"
      class="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600 sm:w-auto"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ButtonPrimary",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "submit",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
