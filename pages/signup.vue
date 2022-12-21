<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2 sm:px-6 lg:px-8"
  >
    <div
      class="w-full max-w-md rounded-lg border-2 border-gray-300 bg-white px-4 py-8 shadow-md sm:px-10"
    >
      <div class="mt-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex w-full justify-center">
          <button
            type="submit"
            class="bg-brilliantAzure focus:ring-blue group relative flex justify-center rounded-3xl border border-transparent p-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <Icon name="circum:login" height="40" width="40"/>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useHead } from "#head";

export default {
  name: "Signup",
  setup() {
    useHead({
      title: "Signup",
    });
  },
};
</script>
