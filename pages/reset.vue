<template>
  <div
    class="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-slate-800 py-2 sm:px-6 lg:px-8"
  >
    <!-- Login box -->
    <div
      class="w-full max-w-md rounded-lg bg-slate-900 px-4 py-8 shadow-md sm:px-10"
    >
      <div class="mt-4 text-center">
        <h2 class="mb-4 text-3xl font-extrabold text-white">
          Réinitialisation du mot de passe
        </h2>
      </div>

      <form>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Nouveau mot de passe</label
          >
          <input type="password" id="password" class="input" required />
        </div>
        <div class="mb-6">
          <label
            for="password_confirm"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Confirmation du mot de passe</label
          >
          <input type="password" id="password_confirm" class="input" required />
        </div>

        <div class="mt-6 flex justify-center">
          <button type="submit" class="button">Continuer</button>
        </div>

        <div class="mt-4 text-center text-sm text-blue-600 underline">
          <ul class="list-none">
            <li>
              <NuxtLink to="/login">Se connecter</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/signup">Créer un compte</NuxtLink>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useHead } from "#head";

export default {
  name: "Reset",
  setup() {
    useHead({
      title: "Réinitialiser le mot de passe",
    });
  },
};
</script>
