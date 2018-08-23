<template lang="pug">
  nav(
    :class="navBar"
    :style="fixMobileNav"
    v-on:mobileNavIsVisible="fixMobileNav"
  )
    slot
</template>

<script>
/*

  Fixed menu functions taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/
export default {
  components: {},
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
      scrollState: 0
    };
  },
  computed: {
    fixMobileNav() {
      return this.$store.state.isMobileNavVisible && `animation:initial;`;
    }
  },
  methods: {
    scrollDetect(home, down, up, fixed) {
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

    // Called when scrolled up
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

.collapse {
  animation: collapse 0.25s var(--transition-easing-cubic-state) forwards;
}

.open {
  animation: open 0.5s ease-in-out forwards;
  /* box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.25), 0 19px 70px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15); */
}

.static,
.noMenuAnimation {
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
</style>
