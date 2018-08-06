<template lang="pug">
  footer.Footer
    .f.f-justifyCenter.f-sm-justifyEnd
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
          label: "t+cs",
          link: "/terms-and-conditions"
        },
        {
          label: "privacy policy",
          link: "/privacy"
        },
        {
          label: "delivery & returns",
          link: "/delivery-and-returns"
        },
        {
          label: "faqs",
          link: "/faq"
        },
        {
          label: "contact us",
          link: "/contact"
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
