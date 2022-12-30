<template>
  <PagePrimary>
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
  </PagePrimary>
</template>

<script lang="ts">
import { useHead } from "#head";
import ButtonPrimary from "~/components/atoms/Buttons/ButtonPrimary.vue";
import InputPrimary from "~/components/atoms/Inputs/InputPrimary.vue";
import CheckboxPrimary from "~/components/atoms/Inputs/CheckboxPrimary.vue";
import Card from "~/layouts/Card.vue";
import OauthButtons from "~/components/molecules/OauthButtons.vue";
import FormLinks from "~/components/atoms/Lists/FormLinks.vue";
import PagePrimary from "~/layouts/PagePrimary.vue";

export default {
  name: "Login",
  components: {
    PagePrimary,
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
