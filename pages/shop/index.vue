<template lang="pug">
div
  .Container.b-py2
    h1.Heading.u-textCenter {{ pageTitle }}
    p.c-brand.u-textCenter {{ pageIntro }}

  .Container.Container--su.b-pb3
    .FlexGrid--block
      .Product.w-sm-1x2.w-lg-1x3(
        v-for="item in products" 
        :key="item.title"
      )
        // nuxt-link(:to="`/shop/${item.title}`")
        nuxt-link(to="/shop/id")
          .Product-heading
            h5.Heading.fs-text-sm.u-textCenter.m-b3 {{ item.category }}
            h2.Product-title.fs-text-lg.u-textCenter {{ item.title }}
          .Product-image
            img(:src="item.image")
          .Product-button.Heading.u-textCenter.c-brand.u-noVisualLink 
            | ${{ item.price }} AUD
            span.Product-title.fs-text.u-block.m-t2.m-b0 Buy Now


  .Container
    h3 Applonia
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`" class='link'>
          <div class='placeholder'>
            <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`"/>
          </div>
          <h3>{{post.title}}</h3>
        </router-link>
      </li>
    </ul>

</template>

<script>
import Logo from "~/components/Logo2.vue";
import ProductCard from "~/components/ProductCard2.vue";
import { POSTS_QUERY, POSTS_PER_PAGE } from "~/apollo/queries";

export default {
  components: {
    Logo,
    ProductCard
  },
  apollo: {
    posts: {
      query: POSTS_QUERY,
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE
      }
    }
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

<style lang="css" scoped>
@import "../../assets/styles/variables.css";

.Product-heading {
  background-color: var(--c-neutral);
  padding: var(--s-4) var(--s-4) var(--s-2);

  @media (--lg) {
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
