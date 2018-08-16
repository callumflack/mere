<template lang="pug">
  .u-relative
    nuxt-link.ClosePage(to="/shop")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
    .b-py2
      .Container
        h3.Heading.fw-medium.u-textCenter.m-b3 {{ productType }}
        h1.Product-title.u-textCenter {{ title }}

    
    .Container.Container--su.b-mo-pb3
      .FlexGrid--lg.mo-FlexGrid--block
        .w-sm-1x2.one
          .Card.p-sm-l7.p-sm-b5
            .Card-image
              img(src="/images/home-cactus.jpg")
            .Card-block.u-textCenter.bg-pale-green
              | Ingredients
              br
              | ---
              br
              | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
        .w-sm-1x2.two
          .Card.p-sm-t5
            .Card-image.mo-Extract-fullwidth
              img(src="/images/home-girl-1.jpg")

        .w-sm-1x3.three
          .Card
            .Card-image
              img(src="/images/home-beach.jpg")
        .w-sm-1x3.four
          .f-childrenCenter(style="height:66%")
            .Card.p-sm-t5
              .Card-block.u-textCenter.p-x0
                | Customer insights
                p.fs-text-lg.c-text.m-b0.m-t3 Emma Rose-Lapthorn
                | Lorem Ipsum Magazine
                p.fs-text-lg.flh-reduced.c-text.m-t3
                  | “Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te facilisi”
        .w-sm-1x3.five
          .Card
            .Card-block.u-textCenter.p-sm-t4.p-sm-b5.u-mo-hidden
              | Our Active Footprint
              br
              | ---
              br
              | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet oreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequa 
            .w-sm-3x4.m-xA
              .Card-image
                img(src="/images/product-card-swimming-woman.jpg")
              .Card-block.u-textCenter.bg-pale-purple
                | The Formula
                br
                | ---
                br
                | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. 
        
        .w-sm-9x12.six
          .Card.p-sm-l6.p-sm-r5
            .Card-image
              img(src="/images/product-card-blue-texture.jpg")
        .w-sm-3x12.u-hidden.u-sm-block
          .u-hiddenVisually yo!

</template>

<script>
import IconBase from "~/components/IconBase";
import IconClose from "~/components/icons/IconClose";
import product from "~/apollo/queries/product.js";
// import gql from "graphql-tag";

export default {
  name: "id",
  components: {
    IconBase,
    IconClose
  },
  props: ["id"],
  apollo: {
    product: {
      query: product,
      prefetch: ({ route }) => {
        return {
          id: $route.params.id
        };
      },
      variables() {
        return {
          id: this.id
        };
      }
    }
  },
  data() {
    return {
      /* initialise apollo data */
      product: {},
      ingredients:
        "Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sea Salt (Maris sal), Glycerin, Polysorbate 20, Citrus Nobilis (Mandarin Orange) Peel Oil, Lavandula Angustifolia (Lavender) Oil, Phenoxyethanol, Cananga Odorata Flower Oil, Magnesium Nitrate, Methylchloroisothiazolinone, Magnesium Chloride, Methylisothiazolinone, Citric Acid, Limonene, Linalool, Benzyl Benzoate.",
      cart: 1
    };
  },
  created() {
    // $on method will receive the updated count value from the sender component
    /* this.$nuxt.$on("add-to-product-page", data => {
      console.log(this.product);
      this.product = data;
    });
    this.$root.$on("increment-count", data => {
      this.numberOfClicks = data;
    }); */
    console.log("$route: ", this.$route.params.id);
    /* console.log("variable: ", this.id); */
  },
  computed: {
    isVisible() {
      return !this.$store.state.isToggleVisible;
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart <= 1) {
        this.cart = 1;
      } else {
        this.cart -= 1;
      }
    },
    handleToggle() {
      this.$store.commit("SET_TOGGLE_VISIBILITY", !this.$store.state.isToggleVisible);
    }
  },
  head() {
    return {
      title: "Shop product"
    };
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
