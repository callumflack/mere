<template lang="pug">
  nuxt-link.MenuLink.MenuLink--btn.Heading.c-brand(to="/cart")
    | Cart
    span.Cart-items(v-if="itemsInCart > 0") 
      span {{ itemsInCart }}
</template>

<script>
export default {
  data() {
    return {
      checkout: { lineItems: { edges: [] } }
    };
  },
  computed: {
    itemsInCart() {
      // if (this.checkout) {
      // if (this.checkout.lineItems.edges === []) {
      // if (this.checkout.lineItems === null) {
      if (this.$store.state.checkout === null) {
        return 0;
      }
      // return this.checkout.lineItems.edges.length;
      // return this.$store.state.checkout.lineItems.edges.length;
      return this.$store.state.checkout.lineItems.edges.length;
    }
  }
};
</script>

<style scoped>
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

  & span {
    transform: translate(0.5px, -0.5px);
  }
}
</style>
