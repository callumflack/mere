<template lang="pug">
  .MobileNav(
    @click="close"
    :class="[{'u-hidden': !isVisible}]"
  )
    .Container
      .p-y1
        menu-link.Heading.Heading--mobile.c-brand.u-textCenter(
          v-for="item in menuPageLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
          :exact="item.exact"
          block
        )
      .p-t3
        hr.bg-brandRule.m-0
        .f.f-justifyCenter.p-y3
          menu-link.Subheading.Subheading--mobile.c-brand(
            v-for="item in menuCartLinks"
            :key="item.label"
            :label="item.label"
            :link="item.link"
            :currentPage="currentPage"
          )
        hr.bg-brandRule.m-0
      .p-t1
        .f.f-justifyCenter.p-y3
          menu-link.Text.Text--md.ff-textMd.c-brand(
            v-for="item in menuOtherLinks"
            :key="item.label"
            :label="item.label"
            :link="item.link"
            :currentPage="currentPage"
          )
        .f.f-justifyCenter.c-brand
          // menu-social-links
          nuxt-link.MenuLink(to="tbc")
            icon-base(icon-name="icon-instagram" height="32" width="32")
              icon-instagram
          nuxt-link.MenuLink(to="tbc")
            icon-base(icon-name="icon-facebook" height="32" width="32")
              icon-facebook
          nuxt-link.MenuLink(to="tbc")
            icon-base(icon-name="icon-youtube" height="32" width="32")
              icon-youtube
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
          label: "Contact",
          link: "/contact"
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
          label: "FAQ",
          link: "/faq"
        },
        {
          label: "Privacy",
          link: "/privacy"
        },
        {
          label: "Ts+Cs",
          link: "/terms-and-conditions"
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
        },
        {
          iconName: "icon-youtube",
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

<style scoped lang="postcss">
@import "../assets/styles/variables.css";

.MobileNav {
  background-color: var(--c-white);
  height: calc(100vh - var(--menuHeight));
  height: calc(100vh - 60px);
  padding: var(--s-3a) 0;
  top: var(--menuHeight);
  width: 100%;
}
</style>

