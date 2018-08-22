<template lang="pug">
  nav.Nav(:class="navBar")
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
    
    menu-mobile

</template>

<script>
import CartMenuButton from "~/components/CartMenuButton.vue";
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
  name: "Menu",
  components: {
    CartMenuButton,
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
      // Classes assigned to nav on scroll
      navBar: {
        collapse: false,
        open: false,
        static: false
      },
      // Used to keep track of scroll position
      scrollState: 0,
      // Menu list
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
    }
  },
  methods: {
    handleCartClose() {
      this.$store.commit("SET_CART_VISIBILITY", false);
    },
    handleNavToggle() {
      this.$store.commit("SET_MOBILENAV_VISIBILITY", !this.$store.state.isMobileNavVisible);
      this.navBar.static = this.$store.state.isMobileNavVisible;
    },
    scrollDetect(home, down, up) {
      // Current scroll position
      const currentScroll = this.scrollTop();

      // Do nothing if scroll position is above the window
      // Handles iOS bounce scrolling
      if (this.scrollState < 0) {
        return;
      }

      if (currentScroll > this.scrollState) {
        down();
      } else if (currentScroll < this.scrollState) {
        up();
      } else {
        home();
      }

      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },
    // Returns current scroll position
    scrollTop() {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome() {},
    // Called when scrolled down
    scrollDown() {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },
    // Called when scolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }
  },
  created() {
    // https://nuxtjs.org/faq/window-document-undefined
    if (process.browser) {
      window.addEventListener("scroll", () => {
        this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
      });
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

.collapse {
  animation: collapse 0.25s var(--transition-easing-cubic-state) forwards;
}

.open {
  animation: open 0.5s ease-in-out forwards;
  /* box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.25), 0 19px 70px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15); */
}

.static {
  animation: initial;
}

@keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    /* top: calc(-1 * var(--fixedMenuHeight)); */
    /* top: -100%; */
  }
}

@keyframes open {
  from {
    opacity: 0;
    /* top: -100%; */
  }
  to {
    opacity: 1;
    top: 0;
  }
}

.Nav-left {
  padding: 0 var(--s-3b);

  @media (--sm) {
    padding: 0 var(--s-4);
  }
}

.Nav-right {
}

.Nav-logo {
  width: 25%;
  position: absolute;
}
</style>
