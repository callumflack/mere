<template lang="pug">
  footer.Footer
    .f.f-justifyCenter.f-sm-justifyEnd
      div
        menu-link.Heading.fw-medium(
          v-for="item in footerLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
        )
      menu-social-links(style="margin-left:3rem")
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
          label: "T+Cs",
          link: "/terms-and-conditions"
        },
        {
          label: "PRIVACY",
          link: "/privacy"
        },
        {
          label: "DELIVERY + RETURNS",
          link: "/delivery-and-returns"
        },
        {
          label: "FAQs",
          link: "/faqs"
        },
        {
          label: "CONTACT",
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

  /* don't display on mobile */
  @media (--mo) {
    display: none;
  }
}

.page- .Footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  -webkit-backface-visibility: hidden;

  & a {
    color: var(--c-white) !important;
    text-shadow: none;
  }
}
</style>
