<template>
  <PagePrimary>
    <Card title="Inscription">
      <OauthButtons />

      <form>
        <InputPrimary
          id="username"
          type="text"
          label="Nom d'utilisateur"
          placeholder="pseudo cool"
        />

        <InputPrimary
          id="email"
          type="email"
          label="Adresse e-mail"
          placeholder="exemple@email.com"
        />

        <InputPrimary
          id="password"
          type="password"
          label="Mot de passe"
          placeholder="********"
        />

        <InputPrimary
          id="passwordConfirmation"
          type="password"
          label="Confirmation du mot de passe"
          placeholder="********"
        />

        <ButtonPrimary text="Je me lance" />
      </form>

      <FormLinks :links="links" />
    </Card>
  </PagePrimary>
</template>

<script lang="ts">
import { useHead } from "#head";
import ButtonPrimary from "~/components/atoms/Buttons/ButtonPrimary.vue";
import Card from "~/layouts/Card.vue";
import OauthButtons from "~/components/molecules/OauthButtons.vue";
import InputPrimary from "~/components/atoms/Inputs/InputPrimary.vue";
import FormLinks from "~/components/atoms/Lists/FormLinks.vue";
import PagePrimary from "~/layouts/PagePrimary.vue";

export default {
  name: "Signup",
  components: { PagePrimary, FormLinks, InputPrimary, OauthButtons, Card, ButtonPrimary},
  data() {
    return {
      links: [
        {
          label: "Me connecter",
          to: "/login",
        },
      ],
    };
  },
  setup() {
    useHead({
      title: "Inscription",
    });
  },
};
</script>
