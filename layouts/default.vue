<template lang="pug">
  div(:class="currentPageClass")
    c-menu
    nuxt
    .u-hidden.u-sm-block
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
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style>
</style>
