<template>
  <div
    class="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-slate-800 py-2 sm:px-6 lg:px-8"
  >
    <Card title="Connexion">
      <OauthButtons isConnection />

      <form>
        <InputPrimary
          id="email"
          type="email"
          label="Adresse e-mail / Nom d'utilisateur"
          placeholder="exemple@email.com"
        />

        <InputPrimary
          id="password"
          type="password"
          label="Mot de passe"
          placeholder="********"
        />

        <CheckboxPrimary id="remember" label="Se souvenir de moi" />

        <ButtonPrimary text="Ouvrir une session" />

        <FormLinks :links="links" />
      </form>
    </Card>
  </div>
</template>

<script lang="ts">
import { useHead } from "#head";
import ButtonPrimary from "~/components/atoms/ButtonPrimary.vue";
import InputPrimary from "~/components/atoms/InputPrimary.vue";
import CheckboxPrimary from "~/components/atoms/CheckboxPrimary.vue";
import Card from "~/components/atoms/Card.vue";
import OauthButtons from "~/components/molecules/OauthButtons.vue";
import FormLinks from "~/components/atoms/FormLinks.vue";

export default {
  name: "Login",
  components: {
    FormLinks,
    OauthButtons,
    Card,
    CheckboxPrimary,
    InputPrimary,
    ButtonPrimary,
  },
  setup() {
    useHead({
      title: "Connexion",
    });
  },
  data() {
    return {
      links: [
        {
          label: "Mot de passe oublié ?",
          to: "/reset",
        },
        {
          label: "Créer un compte",
          to: "/signup",
        },
      ],
    };
  },
};
</script>
