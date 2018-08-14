<template lang="pug">
div
  .Container.b-py2
    h1.Heading.u-textCenter {{ pageTitle }}
    p.c-brand.u-textCenter {{ pageIntro }}

  .Container.Container--su.b-pb3
    .FlexGrid--block
      .Product.w-sm-1x2.w-lg-1x3(
        v-for="(product, index) in shop.products.edges" 
        :key="product.node.id.toString()"
        :product="product.node"
      )
        //- .f
          .w-1x2 {{ count }}
          .w-1x2
            button.Button(@click="increment") Click here
        //- div(@click="addToProductPage(product, index)")
        //- on nuxt-link, use @click.native: https://github.com/nuxt/nuxt.js/issues/1786
        //- nuxt-link(:to="`/shop/${product.node.handle}`")
        nuxt-link(:to="`/shop/${product.node.handle}`" @click.native="addToProductPage(product, index)")
          .Product-heading
            h5.Heading.fs-text-sm.u-textCenter.m-b3 {{ product.node.productType }}
            h2.Product-title.fs-text-lg.u-textCenter {{ product.node.title }}
          .Product-image
            img(:src="product.node.images.edges[0].node.originalSrc" alt="`${product.node.title}` product picture")
          .Product-button.Heading.u-textCenter.c-brand.u-noVisualLink 
            | ${{ product.node.variants.edges[0].node.price }} AUD
            span.Product-title.fs-text.u-block.m-t2.m-b0 Buy Now
          

</template>

<script>
import Logo from "~/components/Logo2.vue";
import ProductCard from "~/components/ProductCard2.vue";
import shop from "~/apollo/queries/shop";

export default {
  components: {
    Logo,
    ProductCard
  },
  props: {
    /* product: Object */
  },
  apollo: {
    shop: {
      prefetch: true,
      query: shop
    }
  },
  data() {
    return {
      count: 0,
      shop: {},
      pageTitle: "Beyond beautiful",
      pageIntro:
        "Our super natural skin care range champions the natural environment and provides cleaner and safer products of the highest quality",
      productLabel: "MERE PHYTISPHERE"
    };
  },
  methods: {
    addToProductPage(product, index) {
      console.log(product, index);
      this.$nuxt.$emit("add-to-product-page", this.product);
    },
    increment() {
      this.count++;
      this.$root.$emit("increment-count", this.count);
    }
  },
  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    }
    /* variantImage() {
      return this.selectedVariantImage || this.product.images.edges[0].node.src;
    },
    productVariant() {
      return this.node.variants.edges[0].node;
    } */
  },
  head() {
    return {
      title: "Shop"
    };
  }
};
</script>

<style lang="css" scoped>
@import "../../assets/styles/variables.css";

.Product-heading {
  background-color: var(--c-neutral);
  padding: var(--s-4) var(--s-4) var(--s-2);

  @media (--lg) {
    min-height: 132px;

    & > * {
      margin: auto;
      width: 66%;
    }
  }
}

.Product-image {
  background-color: var(--c-neutral);
  height: 240px;
  padding: 0 0 var(--s-3);
  text-align: center;

  @media (--sm) {
    height: 340px;
  }

  & img {
    height: 100%;
    margin: auto;
  }
}

.Product-button {
  background-color: var(--c-neutral);
  border-top: 1px solid var(--c-brand);
  display: block;
  padding: var(--s-4) var(--s-4);
}
</style>
