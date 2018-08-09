<template lang="pug">
  .b-py3
    .Container.Container--xl
      .FlexGrid
        .w-sm-1x3.b-mb3
          h1.Account-title.c-text 
            | Delivery
            br 
            | &amp; Returns
        .w-sm-2x3
          toggle-item(
            v-for="item in faqs"
            :key="item.title"
            :item="item"
          )
</template>

<script>
import ToggleItem from "~/components/ToggleItem";

export default {
  components: {
    ToggleItem
  },
  data() {
    return {
      faqs: [
        {
          title: "Shipping fee",
          info:
            "<p>$6 Standard Ground Shipping on all purchases.</p><p>$9 for Express Shipping for orders outside of Victoria for any orders not containing Dangerous Goods.</p><p>Complimentary Standard Ground Shipping on all purchases above $100.</p>"
        },
        {
          title: "Delivery",
          info:
            "<p>$6 Standard Ground Shipping on all purchases.</p><p>$9 for Express Shipping for orders outside of Victoria for any orders not containing Dangerous Goods.</p><p>Complimentary Standard Ground Shipping on all purchases above $100.</p>"
        },
        {
          title: "Prices and payment",
          info:
            "<p>$6 Standard Ground Shipping on all purchases.</p><p>$9 for Express Shipping for orders outside of Victoria for any orders not containing Dangerous Goods.</p><p>Complimentary Standard Ground Shipping on all purchases above $100.</p>"
        },
        {
          title: "Refunds and returns",
          info:
            "<p>$6 Standard Ground Shipping on all purchases.</p><p>$9 for Express Shipping for orders outside of Victoria for any orders not containing Dangerous Goods.</p><p>Complimentary Standard Ground Shipping on all purchases above $100.</p>"
        }
      ]
    };
  },
  computed: {},
  head() {
    return {
      title: "Shipping and returns"
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";
</style>
