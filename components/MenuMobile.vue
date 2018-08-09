<template lang="pug">
  .MobileNav(
    @click="close"
    :class="[{'u-hidden': !isVisible}]"
  )
    .Container.f.f-col.f-justifyCenter
      div
        .p-y3
          menu-link.MenuLink--block.Heading.Heading--mobile.fw-medium.c-brand.u-textCenter(
            v-for="item in menuPageLinks"
            :key="item.label"
            :label="item.label"
            :link="item.link"
            :currentPage="currentPage"
            :exact="item.exact"
            block
          )

        .p-t1
          hr.bg-brand-rule
          .f.f-justifyCenter.p-y1
            menu-link.MenuLink--wide.Subheading.Subheading--mobile.c-brand(
              v-for="item in menuCartLinks"
              :key="item.label"
              :label="item.label"
              :link="item.link"
              :currentPage="currentPage"
            )
          hr.bg-brand-rule

        .p-t2.p-b3
          .f.f-wrap.f-justifyCenter.p-t3
            menu-link.MenuLink--mobileFooter.Heading.fw-medium.c-brand.u-initialCase(
              v-for="item in menuOtherLinks"
              :key="item.label"
              :label="item.label"
              :link="item.link"
              :currentPage="currentPage"
            )
          .f.f-justifyCenter.c-brand
            nuxt-link.MenuLink(to="tbc")
              icon-base(icon-name="icon-instagram" height="32" width="32")
                icon-instagram
            nuxt-link.MenuLink(to="tbc")
              icon-base(icon-name="icon-facebook" height="32" width="32")
                icon-facebook
</template>

<script>
import MenuLink from "~/components/MenuLink.vue";
import MenuSocialLinks from "~/components/MenuSocialLinks.vue";
import IconBase from "~/components/IconBase.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconYoutube from "~/components/icons/IconYoutube.vue";

export default {
  components: {
    MenuLink,
    MenuSocialLinks,
    IconBase,
    IconInstagram,
    IconFacebook,
    IconYoutube
  },
  data() {
    return {
      menuPageLinks: [
        {
          label: "Shop",
          link: "/shop"
        },
        {
          label: "About",
          link: "/about"
        },
        {
          label: "Footprint",
          link: "/footprint"
        }
      ],
      menuCartLinks: [
        {
          label: "Login",
          link: "/login"
        },
        {
          label: "Cart",
          link: "/cart"
        }
      ],
      menuOtherLinks: [
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
      ],
      menuSocialLinks: [
        {
          iconName: "icon-instagram",
          link: "/tbc"
        },
        {
          iconName: "icon-facebook",
          link: "/tbc"
        }
      ]
    };
  },
  computed: {
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    },
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  },
  methods: {
    close() {
      this.$store.commit("SET_MODAL_VISIBILITY", false);
    }
  }
};
</script>

<style scoped lang="css">
@import "../assets/styles/variables.css";

.MobileNav {
  background-color: var(--c-white);
  height: calc(100vh - 60px);
  height: calc(100vh - var(--menu-height));
  /* padding: var(--s-3a) 0; */
  top: var(--menu-height);
  width: 100%;
}
</style>

