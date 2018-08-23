<template lang="pug">
  MenuFixedOnScroll.Nav
    .u-lg-hidden.h-100
      .u-absolutePin.p-r4
        .f.f-justifyEnd.h-100
          a.u-noVisualLink.c-text(href="#" @click.prevent="handleNavToggle")
            icon-base.MenuLink(icon-name="icon-hamburger-close" v-if="isMobileNavVisible")
              icon-hamburger-close
            icon-base.MenuLink(icon-name="icon-hamburger" v-else)
              icon-hamburger
    
    .u-hidden.f-lg.f-justifyBetween
      .Nav-left
        menu-link.Heading.c-brand(
          v-for="item in menuLeftLinks"
          :exact="item.exact"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          v-on:handleCartClose="handleCartClose"
        )
      .Nav-right
        CartMenuButton

    .Nav-logo.u-fixedCenter.f-childrenCenter
      nuxt-link(to="/" exact)
        logo.MenuLink.c-text(width="99" height="23")
    
    MenuMobile

</template>

<script>
import MenuFixedOnScroll from "~/components/MenuFixedOnScroll.vue";
import CartMenuButton from "~/components/CartMenuButton.vue";
import Logo from "~/components/Logo2.vue";
import MenuLink from "~/components/MenuLink.vue";
import MenuMobile from "~/components/MenuMobile.vue";
import IconBase from "~/components/IconBase.vue";
import IconHamburger from "~/components/icons/IconHamburger.vue";
import IconHamburgerClose from "~/components/icons/IconHamburgerClose.vue";

export default {
  name: "Menu",
  components: {
    CartMenuButton,
    MenuFixedOnScroll,
    MenuLink,
    MenuMobile,
    Logo,
    IconBase,
    IconHamburger,
    IconHamburgerClose
  },
  props: {},
  data() {
    return {
      menuLeftLinks: [
        {
          label: "shop",
          link: "/shop"
        },
        {
          label: "about",
          link: "/about"
        },
        {
          label: "footprint",
          link: "/footprint"
        }
      ]
    };
  },
  computed: {
    isMobileNavVisible() {
      return this.$store.state.isMobileNavVisible;
    },
    isCartVisible() {
      return this.$store.state.isCartVisible;
    }
  },
  methods: {
    handleCartClose() {
      this.$store.commit("SET_CART_VISIBILITY", false);
    },
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isMobileNavVisible);
      /* move this: */
      /* this.navBar.static = this.$store.state.isMobileNavVisible; */
      /* to MenuFixedOnScroll via $emit: */
      this.$emit("emitMobileNavIsToggled");
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/styles/variables.css";

.Nav {
  background-color: var(--c-brand-bg);
  height: var(--menu-height);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  -webkit-backface-visibility: hidden;
}

.Nav-left {
  padding-left: var(--s-4);
}

.Nav-right {
}

.Nav-logo {
  width: 25%;
  position: absolute;
}
</style>
