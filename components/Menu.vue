<template lang="pug">
  nav.Nav(:class="navBar")
    .u-lg-hidden.h-100
      .u-absolutePin.p-r4
        .f.f-justifyEnd.h-100
          a.u-noVisualLink.c-text(href="#" @click.prevent="handleNavToggle")
            icon-base.MenuLink(icon-name="icon-hamburger-close" v-if="isVisible")
              icon-hamburger-close
            icon-base.MenuLink(icon-name="icon-hamburger" v-else)
              icon-hamburger
    
    .u-hidden.f-lg.f-justifyBetween
      .Nav-left
        menu-link.Heading.Heading--md.c-brand(
          v-for="item in menuRightLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
          :exact="item.exact"
        )
      .Nav-right
        menu-link.Heading.Heading--md.fs-textSm.c-brand(
          v-for="item in menuLeftLinks"
          :key="item.label"
          :label="item.label"
          :link="item.link"
          :currentPage="currentPage"
          :exact="item.exact"
        )

    .Nav-logo.u-fixedCenter.f-childrenCenter
      nuxt-link(to="/" exact)
        logo.MenuLink.c-text(width="99" height="23")
    
    menu-mobile

</template>

<script>
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
    MenuLink,
    MenuMobile,
    Logo,
    IconBase,
    IconHamburger,
    IconHamburgerClose
  },
  props: {
    currentPage: String,
    index: Boolean
  },
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
    isVisible: function() {
      return this.$store.state.isMobileNavVisible;
    }
  },
  methods: {
    handleNavToggle() {
      this.$store.commit("SET_MODAL_VISIBILITY", !this.$store.state.isMobileNavVisible);
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

<style scoped lang="postcss">
@import "../assets/styles/variables.css";

.Nav {
  background-color: var(--c-bg);
  background-color: var(--c-brand-bg);
  height: var(--s-5);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  -webkit-backface-visibility: hidden;
}

.collapse {
  animation: collapse 0.5s ease forwards;
}

.open {
  animation: open 1s ease forwards;
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
</style>
