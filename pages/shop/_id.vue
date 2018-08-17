<template lang="pug">
  h2(v-if="loading > 0") Loading…
  .u-relative(v-else)
    .b-py2
      .Container
        //- h3.Heading.fw-medium.u-textCenter.m-b3 {{ shop.productByHandle.productType }}
        //- h1.Product-title.u-textCenter {{ shop.productByHandle.title }}
    //- .Container.Container--su.b-pb3
      .FlexGrid.mo-FlexGrid--block
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              p.c-brand.u-textCenter.m-b3 $ {{ shop.productByHandle.variants.edges[0].node.price }} AUD
              p.c-brand.u-textCenter {{ shop.productByHandle.description }}
              .u-textCenter.m-t4
                p.c-brand.m-b3
                  a.LinkUnderline(@click="handleToggle")
                    span(v-if="isVisible") Show 
                    span(v-if="!isVisible") Hide 
                    span all ingredients
                p.fs-text-sm.c-brand.u-textCenter.toggle(:class="{ 'is-hidden': isVisible }") product.ingredients

</template>

<script>
import product from "~/apollo/queries/product2";
// import gql from "graphql-tag";
// import schema from "~/apollo/schema";

export default {
  apollo: {
    $loadingKey: 'loading',
    product: {
      query: product,
      prefetch: ({ route }) => {
        return {
          id: route.params.id
        };
        console.log(id);
      },
      variables() {
        return {
          id: this.id
        };
      }
    }
  },
  props: ["id"],
  data() {
    return {
      /* initialise apollo data */
      loading: 0,
      product: {},
    };
  },
  mounted() {
    console.log("$route: ", this.$route.params.id);
  }
};
</script>

<style lang="css" scoped>
@import "../../assets/styles/variables.css";
@import "../../assets/styles/theme/tabs.css";

.Card {
  position: relative;
}

/* flickity wtf */

.Slider-cell {
  width: 420px;
}
.Slider-cell img {
  height: auto;
  margin: auto;
}

/* simple toggle */

.toggle {
  opacity: 1;
  transform: translateY(0);
}

.toggle.is-hidden {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity var(--transition-speed), transform 0s var(--transition-speed);
}

/* utils */

.mo-Extract-fullwidth {
  @media (--mo) {
    left: calc(-50vw + 50%);
    position: relative;
    width: 100vw;
  }
}

/* flex cards */

/* .one,
.two,
.three,
.four,
.five,
.six {
  order: 1;
} */

.six .Card {
  @media (--md) {
    transform: translateY(-12.5vh);
  }
}
</style>
