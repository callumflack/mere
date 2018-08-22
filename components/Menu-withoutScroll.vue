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
        menu-link.Heading.fw-medium.c-brand(
          v-for="item in menuRightLinks"
          :exact="item.exact"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          v-on:handleCartClose="handleCartToggle"
        )
      .Nav-right
        button.MenuLink.Heading.fw-medium.c-brand.u-linkNoOutline(@click="handleCartToggle")
          | Cart
          span.Cart-items 1

    .Nav-logo.u-fixedCenter.f-childrenCenter
      nuxt-link(to="/" exact)
        logo.MenuLink.c-text(width="99" height="23")
    
    menu-mobile

</template>

<script>
import MenuFixedOnScroll from "~/components/MenuFixedOnScroll.vue";
import Logo from "~/components/Logo2.vue";
import MenuLink from "~/components/MenuLink.vue";
import MenuMobile from "~/components/MenuMobile.vue";
import IconBase from "~/components/IconBase.vue";
import IconHamburger from "~/components/icons/IconHamburger.vue";
import IconHamburgerClose from "~/components/icons/IconHamburgerClose.vue";

/*

  Fixed menu functions taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/

export default {
  name: "MenuImportingScrollFunction",
  components: {
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
      // checkout: { lineItems: { edges: [] } },
      menuRightLinks: [
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
      ],
      menuLeftLinks: [
        {
          label: "login",
          link: "/login"
        },
        {
          label: "cart",
          link: "/cart"
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
    /* itemsInCart() {
      if (this.checkout) {
        return 0;
      }
      return this.checkout.lineItems.edges.length;
    } */
  },
  methods: {
    surelyCloseCart() {
      if ((this.$store.state.isCartVisible = true)) {
        return this.$store.state.isCartVisible;
      }
    },
    handleCartToggle() {
      this.$store.commit("SET_CART_VISIBILITY", !this.$store.state.isCartVisible);
    },
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isMobileNavVisible);
      /* move this: */
      /* this.navBar.static = this.$store.state.isMobileNavVisible; */
      /* to MenuFixedOnScroll via $emit: */
      this.$emit("mobileNavIsVisible");
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
  background-color: var(--c-bg);
  padding: 0 var(--s-4);
}

.Nav-logo {
  width: 25%;
  position: absolute;
}

.Cart-items {
  background-color: var(--c-brand);
  border-radius: 999px;
  color: var(--c-bg);
  font-size: 0.7em;
  font-weight: 500;
  margin-left: var(--s-2);

  height: 18px;
  line-height: 18px;
  width: 18px;
}
</style>
