<template lang="pug">
  // div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  // div(:class="currentPageClass")
  // div(:class="currentPageClass.slice(4)")
  div(:class="currentPageClass.split('-/').join('-')")
    c-menu
    .Content
      nuxt
      c-footer
</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/MenuBottom.vue";

export default {
  components: {
    "c-menu": Menu,
    "c-footer": Footer
  },
  computed: {
    currentPageClass() {
      // requires middleware function
      // https://nuxtjs.org/guide/routing/#middleware
      return `page-${this.$store.state.currentPage}`;
      // return [{ home: $store.state.currentPage === "/" }];
    }
  }
};
</script>