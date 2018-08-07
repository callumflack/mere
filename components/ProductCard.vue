<template lang="pug">
.Product.w-sm-1x2.w-lg-1x3
  .Product-inner
    h5.Heading.fw-medium.fs-text-sm {{ type }}
    h2.Product-heading {{ name }}
    figure.Product-image
      img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")
  a.Product-button.Heading.fs-textMd.c-brand.u-noVisualLink(href="#") ${{ cost }} AUD

</template>

<script>
import Logo from "~/components/Logo2.vue";
import ImageCard from "~/components/ImageCard.vue";

export default {
  components: {
    Logo,
    ImageCard
  },
  props: {
    type: {
      type: String,
      default: "Mere Phytisphere"
    },
    name: String,
    cost: {
      type: Number,
      default: 69.95
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Product-inner {
  background-color: var(--c-neutral);
  padding: var(--s-4) var(--s-4);
}

.Product-heading {
  /* @mixin ff-title;
  @mixin fs-textLg; */
  font-family: var(--ff-title), var(--ff-stack-heading);
  font-size: var(--fs-text-lg);

  color: var(--c-text);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.2;
  margin: var(--s-3) auto;
  text-transform: initial;

  @media (--lg) {
    width: 66%;
  }
}

.Product-image {
  height: 340px;
  text-align: center;

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
