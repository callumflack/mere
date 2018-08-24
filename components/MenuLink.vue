<template lang="pug">
  nuxt-link.MenuLink(
    :to="link"
    :exact="exact"
    v-on:click.native="$emit('emitHandleCartClose')"
  )
    span {{ label }}
</template>

<script>
/* 

  The $emit thing: https://vuejs.org/v2/guide/components.html#Sending-Messages-to-Parents-with-Events

*/
export default {
  name: "MenuLink",
  props: {
    /* external: Boolean, */
    exact: Boolean,
    label: String,
    link: String
  },
  computed: {
    /* classes() {
      return ["currentPage", "MenuLink"];
    },
    currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    } */
  }
};
</script>
