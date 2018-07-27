<template lang="pug">
.b-pb2
  .b-py3
    .Container.Container--text
      h1.Heading.Heading--md {{ title }}
      p.c-brand.u-textCenter {{ intro }}

  .Container.Container--hero
    .FlexGrid--block
      product-card(
        v-for="product in products"
        :key="product.name"
        :type="product.type"
        :name="product.name"
        :cost="product.cost"
      )

</template>

<script>
import Logo from "~/components/Logo.vue";
import ProductCard from "~/components/ProductCard.vue";

export default {
  components: {
    Logo,
    ProductCard
  },
  data() {
    return {
      title: "Beyond beautiful",
      intro:
        "Our super natural skin care range champions the natural environment and provides cleaner and safer products of the highest quality",
      products: [
        {
          name: "Activated Dermal Corrective Tonic",
          cost: 69.95
        },
        {
          name: "Super Natural Dermal Serum Vaccine",
          cost: 69.95
        },
        {
          name: "Bio-Repair Night Gaurdian Mask",
          cost: 69.95
        },
        {
          name: "Hydra-Bright Eye Lifting Catalyst Cream",
          cost: 69.95
        },
        {
          name: "Cellular Balance Activated Cleansing Gel",
          cost: 69.95
        },
        {
          name: "Bio-Dicergent Cleansing Oil Complex",
          cost: 69.95
        }
      ]
    };
  },
  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  }
};
</script>

<style>
@import "../../assets/styles/variables.css";
</style>
