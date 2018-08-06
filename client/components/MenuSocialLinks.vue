<template lang="pug">
  div
    nuxt-link.MenuLink(to="tbc")
      icon-base(icon-name="icon-instagram")
        icon-instagram
    nuxt-link.MenuLink(to="tbc")
      icon-base(icon-name="icon-facebook")
        icon-facebook
    nuxt-link.MenuLink(to="tbc")
      icon-base(icon-name="icon-youtube")
        icon-youtube
</template>

<script scoped>
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
    index: Boolean
  },
  data() {
    return {
      socialLinks: [
        {
          link: "/faq"
        },
        {
          link: "/privacy"
        },
        {
          link: "/terms-and-conditions"
        }
      ]
    };
  }
};
</script>