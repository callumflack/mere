<template lang="pug">
.b-pb2
  .b-py3
    .Container.Container--text
      h1.Heading.Heading--md {{ pageTitle }}
      p.c-brand.u-textCenter {{ pageIntro }}

  .Container.Container--hero
    .FlexGrid--block
      .Product.w-sm-1x2.w-lg-1x3(
        v-for="post in posts" 
        :key="post._id"
      )
        nuxt-link(:to="`/shop/${post._id}`")
          .Product-heading
            h5.Heading.Heading--md.fs-textSm.m-b3 {{ post.category }}
            h2.Product-title.Product-title--card {{ post.title }}
          .Product-image
            img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")
          .Product-button.Heading.fs-textMd.c-brand.u-noVisualLink $69.95 AUD

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
      pageTitle: "Beyond beautiful",
      pageIntro:
        "Our super natural skin care range champions the natural environment and provides cleaner and safer products of the highest quality",
      productLabel: "MERE PHYTISPHERE"
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
    console.log(posts);
    return { posts };
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
