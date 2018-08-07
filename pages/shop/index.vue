<template lang="pug">
.b-pb2
  .b-py3
    .Container.Container--sm
      h1.Heading.fw-medium {{ pageTitle }}
      p.c-brand.u-textCenter {{ pageIntro }}

  .Container.Container--su
    .FlexGrid--block
      .Product.w-sm-1x2.w-lg-1x3(
        v-for="item in products" 
        :key="item.title"
      )
        // nuxt-link(:to="`/shop/${item.title}`")
        nuxt-link(to="/shop/id")
          .Product-heading
            h5.Heading.fw-medium.fs-text-sm.m-b3 {{ item.category }}
            h2.Product-title.fs-text-lg {{ item.title }}
          .Product-image
            img(:src="item.image")
          .Product-button.Heading.fs-textMd.c-brand.u-noVisualLink ${{ item.price }} AUD

</template>

<script>
import Logo from "~/components/Logo2.vue";
import ProductCard from "~/components/ProductCard2.vue";

export default {
  components: {
    Logo,
    ProductCard
  },
  data() {
    return {
      pageTitle: "Beyond beautiful",
      pageIntro:
        "Our super natural skin care range champions the natural environment and provides cleaner and safer products of the highest quality",
      productLabel: "MERE PHYTISPHERE",
      products: [
        {
          title: "Activated Dermal Corrective Tonic",
          category: "Mere Phytisphere",
          image: "/images/products-super-natural-dermal-serum-vaccine-bottle.png",
          price: 69.95
        },
        {
          title: "Super Natural Dermal Serum Vaccine",
          category: "Mere Phytisphere",
          image: "/images/products-super-natural-dermal-serum-vaccine-bottle.png",
          price: 69.95
        }
      ]
    };
  },
  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  },
  head() {
    return {
      title: "Shop"
    };
  }
};
</script>

<style lang="postcss">
@import "../../assets/styles/variables.css";

.Product-heading {
  background-color: var(--c-neutral);
  padding: var(--s-4) var(--s-4) var(--s-2);

  @media (--lg) {
    & .Heading,
    & .Product-title {
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
