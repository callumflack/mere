<template lang="pug">
  // div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  // div(:class="currentPageClass")
  // div(:class="currentPageClass.slice(4)")
  div(:class="currentPageClass.split('-/').join('-')")
    c-menu
    .Content
      nuxt
    c-footer
    cart
</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/MenuBottom.vue";
import Cart from "~/components/Cart.vue";

export default {
  components: {
    "c-menu": Menu,
    "c-footer": Footer,
    Cart
  },
  computed: {
    currentPageClass() {
      // requires middleware function
      // https://nuxtjs.org/guide/routing/#middleware
      return `fs-scale-reset u-relative page-${this.$store.state.currentPage}`;
      // return [{ home: $store.state.currentPage === "/" }];
    }
  }
};
</script>