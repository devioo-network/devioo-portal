<template>
  <div class="mb-6 flex items-start">
    <div class="flex h-5 items-center">
      <input
        :id="id"
        type="checkbox"
        class="focus:ring-3 h-4 w-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-blue-600"
        :required="required"
      />
    </div>
    <label :for="id" class="ml-2 text-sm font-medium text-gray-300">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "CheckboxPrimary",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
