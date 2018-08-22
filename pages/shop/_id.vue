<template lang="pug">

  //- transition(name="slide-fade")
    nuxt-link.ClosePage(
      to="/shop"
      @click.native="showCloseIcon = !showCloseIcon"
      :class="{'u-hidden': !showCloseIcon}"
    )
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
  
  .u-relative(v-if="loading > 0")
    .b-py2
      .Container
        h3.Heading.u-textCenter Loading…

  .u-relative(v-else)
    nuxt-link.ClosePage(to="/shop")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close

    .b-py2
      .Container
        h3.Heading.u-textCenter.m-b3 {{ shop.productByHandle.productType }}
        h1.Product-title.u-textCenter {{ shop.productByHandle.title }}
        pre CHECKOUT: {{ storejson }}

    .Container.Container--su.b-pb3
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
                    span ingredients
                p.fs-text-sm.c-brand.u-textCenter.toggle(:class="{ 'is-hidden': isVisible }") product.ingredients

        .w-5x6.w-sm-1x3.m-mo-xA.p-mo-b5
          //- .Tabs
            input(id="tab-one" type="radio" name="grp" checked="checked")
            label(for="tab-one") #[img(:src="shop.productByHandle.images.edges[0].node.originalSrc")]
            .Tab-content #[img(:src="shop.productByHandle.images.edges[0].node.originalSrc")]

            input(id="tab-two" type="radio" name="grp" checked="checked")
            label(for="tab-two") #[img(:src="shop.productByHandle.images.edges[1].node.originalSrc")]
            .Tab-content #[img(:src="shop.productByHandle.images.edges[1].node.originalSrc")]

            input(id="tab-three" type="radio" name="grp" checked="checked")
            label(for="tab-three") #[img(:src="shop.productByHandle.images.edges[2].node.originalSrc")]
            .Tab-content #[img(:src="shop.productByHandle.images.edges[2].node.originalSrc")]
          .Tabs
            template(v-for="(image, index) in shop.productByHandle.images.edges")
              input(
                :id="`image-${index}`"
                :key="image.node.originalSrc"
                type="radio"
                name="grp"
                checked="checked"
              )
              label(:for="`image-${index}`")
                img(:src="image.node.originalSrc")
              .Tab-content 
                img(:src="image.node.originalSrc")

        .w-sm-1x3
          .f-childrenCenter
            .w-100
              .Product-add.w-sm-3x4.m-xA.m-b4
                .Button.Button--outline.Button--stateless.f.f-justifyBetween.p-x0.m-b3
                  //- button.Button.Button--transparent.w-1x3(v-on:click="addToCart") +
                  //- span.u-textCenter.w-1x3 {{ cart }}
                  //- button.Button.Button--transparent.w-1x3(v-on:click="removeFromCart") -
                  label Quantity
                    input(min="1" type="number" v-model="selectedVariantQuantity")
                button.Button.u-block.w-100(@click="addVariantToCart(shop.productByHandle.variants.edges[0].node.id, selectedVariantQuantity)")
                  | add to cart
              .w-sm-3x4.m-xA
                p.c-brand.u-textCenter
                  | Free shipping on orders over $89
                p.c-brand.u-textCenter.fs-text-sm
                  | Add more than $49 worth of MERE to your bag and receive free shipping on the order

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
import product from "~/apollo/queries/productByHandle";
import { getShopData, checkoutLineItemsAdd, addVariantToCart } from "~/apollo/checkout";

export default {
  apollo: {
    $loadingKey: "loading",
    shop: {
      query: product,
      variables() {
        return {
          handle: this.handle,
          id: this.id
        };
      },
      result({ data }) {
        if (!data) {
          this.$router.push("/404");
        }
      }
    }
  },
  components: {
    IconBase,
    IconClose
  },
  /* props: {
    addVariantToCart: Function,
    id: Array
  }, */
  /* props: ["id"], */
  data() {
    return {
      /* initialise apollo data */
      loading: 0,
      shop: {},
      handle: this.$route.params.id,
      id: this.$route.params.id,
      /* products: [], */
      /* selectedVariantImage: "", */
      selectedVariantQuantity: 1,
      cart: 1,
      ingredients:
        "Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sea Salt (Maris sal), Glycerin, Polysorbate 20, Citrus Nobilis (Mandarin Orange) Peel Oil, Lavandula Angustifolia (Lavender) Oil, Phenoxyethanol, Cananga Odorata Flower Oil, Magnesium Nitrate, Methylchloroisothiazolinone, Magnesium Chloride, Methylisothiazolinone, Citric Acid, Limonene, Linalool, Benzyl Benzoate.",
      showCloseIcon: true
    };
  },
  computed: {
    /* hasImage() {
      return this.product.images.edges.length;
    }, */
    /* variantImage() {
      if (!this.hasImage) {
        return "";
      }
      // return this.selectedVariantImage || this.product.images.edges[0].node.src;
      return this.selectedVariantImage || this.shop.productByHandle.images.edges[0].node.originalSrc;
    }, */
    variant() {
      // return this.selectedVariant || this.product.variants.edges[0].node;
      return this.selectedVariant;
    },
    isVisible() {
      return !this.$store.state.isToggleVisible;
    },
    storejson() {
      return JSON.stringify(this.$store.state.checkout, null ,2);
    },
  },
  methods: {
    //checkoutLineItemsAdd() {},
    addVariantToCart(variantId, quantity) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutLineItemsAdd,
          // Parameters
          variables: {
            checkoutId: this.$store.state.checkout.id,
            lineItems: [{ variantId, quantity: parseInt(quantity, 10) }]
          }
        })
        .then(res => {
          this.$store.commit("SET_CHECKOUT", res.data.checkoutLineItemsAdd.checkout);
        })
        .catch(error => {
          console.error(error);
        });
      // this.handleCartOpen();
    },
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

/* .page-leave-to >>> .ClosePage {
  opacity: 0;
}
.page-leave-active >>> .ClosePage {
  opacity: 1;
  transition: all 150ms var(--transition-easing-theme);
} */

/* .slide-fade-enter-active {
  transition: all 0.3s ease;
  transition-delay: 2s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition-delay: 2s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
} */

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
