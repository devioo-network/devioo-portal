<template>
  <div class="mb-6">
    <label :for="id" class="mb-2 block text-sm font-medium text-white">
      {{ label }}
    </label>

    <input
      :type="type"
      :id="id"
      class="block w-full rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "InputPrimary",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
