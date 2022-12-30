<template>
  <PagePrimary>
    <Card title="Réinitialiser mon mot de passe">
      <form>
        <InputPrimary
          id="password"
          label="Nouveau mot de passe"
          type="password"
        />

        <InputPrimary
          id="passwordConfirmation"
          label="Confirmation du mot de passe"
          type="password"
        />

        <CheckboxPrimary
          id="iagree"
          label="J'accepte de ne pouvoir changer de mot de passe qu'une fois tous les 30 jours"
        />

        <ButtonPrimary text="Réinitialiser mon mot de passe" />
      </form>

      <FormLinks :links="links" />
    </Card>
  </PagePrimary>
</template>

<script lang="ts">
import { useHead } from "#head";
import ButtonPrimary from "~/components/atoms/Buttons/ButtonPrimary.vue";
import Card from "~/layouts/Card.vue";
import InputPrimary from "~/components/atoms/Inputs/InputPrimary.vue";
import CheckboxPrimary from "~/components/atoms/Inputs/CheckboxPrimary.vue";
import FormLinks from "~/components/atoms/Lists/FormLinks.vue";
import PagePrimary from "~/layouts/PagePrimary.vue";

export default {
  name: "Reset",
  components: {
    PagePrimary,
    FormLinks,
    CheckboxPrimary,
    InputPrimary,
    Card,
    ButtonPrimary,
  },
  data() {
    return {
      links: [
        {
          label: "Me connecter",
          to: "/login",
        },
        {
          label: "Créer un compte",
          to: "/signup",
        },
      ],
    };
  },
  setup() {
    useHead({
      title: "Réinitialiser le mot de passe",
    });
  },
};
</script>
