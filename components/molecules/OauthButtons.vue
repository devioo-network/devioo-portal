<template>
  <div class="mb-5 flex w-full flex-col place-items-center">
    <OAuthButton
      focus-ring-class="focus:ring-[#4285F4]/50"
      hover-background-class="hover:bg-[#4285F4]/90"
      background-class="bg-[#4285F4]"
      icon="bxl:google"
      :label="textLabel + ' avec Google'"
    />

    <OAuthButton
      focus-ring-class="focus:ring-[#7289DA]/50"
      hover-background-class="hover:bg-[#7289DA]/90"
      background-class="bg-[#7289DA]"
      icon="ic:baseline-discord"
      :label="textLabel + ' avec Discord'"
    />

    <OAuthButton
      focus-ring-class="focus:ring-[#333]/50"
      hover-background-class="hover:bg-[#333]/90"
      background-class="bg-[#333]"
      icon="mdi:github"
      :label="textLabel + ' avec Github'"
    />
  </div>
</template>

<script lang="ts">
import OAuthButton from "~/components/atoms/OAuthButton.vue";

export default defineComponent({
  name: "OauthButtons",
  components: { OAuthButton },
  props: {
    isConnection: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any) {
    const textLabel = computed(() => {
      return props.isConnection ? "Se connecter" : "S'inscrire";
    });
    return { textLabel };
  },
});
</script>
