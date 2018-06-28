<template lang="pug">
.b-pb2
  .b-py3
    .Container.Container--text
      h1.Heading.Heading--md {{ title }}
      p.c-brand.u-textCenter {{ intro }}

  .Container.Container--hero
    .FlexGrid--block(v-for="post in posts" v-bind:key="i")
      .Product.w-sm-1x2.w-lg-1x3
        .Product-inner
          h5.Heading.Heading--md.fs-textSm {{ post.categories }}
          h2.Product-heading {{ post.title }}
          figure.Product-image
            img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")
        a.Product-button.Heading.fs-textMd.c-brand.u-noVisualLink(href="#") $69.95 AUD

</template>

<script>
import Logo from "~/components/Logo2.vue";
import ProductCard from "~/components/ProductCard2.vue";
import { postsRepository } from "~/shared/repositories";

export default {
  components: {
    Logo,
    ProductCard
  },
  data() {
    return {
      title: "Beyond beautiful",
      intro:
        "Our super natural skin care range champions the natural environment and provides cleaner and safer products of the highest quality"
    };
  },
  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    }
  },
  head() {
    return {
      title: "Posts"
    };
  },
  async asyncData() {
    const posts = await postsRepository.list();
    return { posts };
  }
};
</script>

<style>
@import "../../assets/styles/variables.css";

.Product-inner {
  background-color: var(--c-neutral);
  padding: var(--s-4) var(--s-4);
}

.Product-heading {
  /* @mixin ff-title;
  @mixin fs-textLg; */
  font-family: var(--ff-title), var(--ff-stack-heading);
  font-size: var(--fs-textLg);

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
