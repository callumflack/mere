<template lang="pug">
  footer.Footer.u-hidden.u-sm-block
    .f.f-justifyEnd
      div
        menu-link.Heading.Heading--md.fs-textSm(
          v-for="item in footerLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
        )
      menu-social-links.m-l5
</template>

<script scoped>
import MenuLink from "~/components/MenuLink.vue";
import MenuSocialLinks from "~/components/MenuSocialLinks.vue";

export default {
  name: "Menu",
  components: {
    MenuLink,
    MenuSocialLinks
  },
  props: {
    home: Boolean
  },
  data() {
    return {
      footerLinks: [
        {
          label: "faq",
          link: "/faq"
        },
        {
          label: "privacy",
          link: "/privacy"
        },
        {
          label: "ts+cs",
          link: "/terms-and-conditions"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Footer {
  padding: 0 var(--s-4);

  & a {
    color: var(--c-brand);
  }
}

.page- .Footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  -webkit-backface-visibility: hidden;

  & a {
    color: var(--c-white) !important;
    text-shadow: none;
  }
}
</style>
