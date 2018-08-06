<template lang="pug">
  nuxt-link(:to="link")
    icon-base.MenuLink.c-brand(
      :height="height" 
      :width="width" 
      :icon-name="iconName"
      :icon-color="iconColor"
    )
      template(slot-scope="iconName")
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconYoutube from "~/components/icons/IconYoutube.vue";

export default {
  components: {
    IconBase,
    IconInstagram,
    IconFacebook,
    IconYoutube
  },
  props: {
    link: String,
    slotScope: String,
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 20
    },
    height: {
      type: [Number, String],
      default: 20
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>