<template lang="pug">
  .u-relative
    nuxt-link.ClosePage(to="/shop")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
    .b-py2
      .Container
        h3.Heading.fw-medium.u-textCenter.m-b3 {{ category }}
        h1.Product-title.u-textCenter {{ title }}
      
    .Container.Container--su.b-pb3
      .FlexGrid.mo-FlexGrid--block
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              p.c-brand.u-textCenter.m-b3 ${{ price }}
              p.c-brand.u-textCenter {{ intro }}
              .u-textCenter.m-t4
                p.c-brand.m-b3
                  a.LinkUnderline(@click="handleToggle") 
                    span(v-if="isVisible") Show 
                    span(v-if="!isVisible") Hide 
                    span all ingredients
                p.fs-text-sm.c-brand.u-textCenter.toggle(:class="{ 'is-hidden': isVisible }") {{ ingredients }}

        .w-5x6.w-sm-1x3.m-mo-xA.p-mo-b5
          .Tabs
            input(id="tab-one" type="radio" name="grp" checked="checked")
            label(for="tab-one") #[img(src="/images/products-pack-1.png")]
            .Tab-content #[img(src="/images/products-pack-1.png")]
            
            input(id="tab-two" type="radio" name="grp" checked="checked")
            label(for="tab-two") #[img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")]
            .Tab-content #[img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")]

            input(id="tab-three" type="radio" name="grp" checked="checked")
            label(for="tab-three") #[img(src="/images/products-pack-2.png")]
            .Tab-content #[img(src="/images/products-pack-2.png")]

        .w-sm-1x3
          .f-childrenCenter
            .w-100
              .Product-add.w-sm-3x4.m-xA.m-b4
                .Button.Button--outline.Button--stateless.f.f-justifyBetween.p-x0.m-b3
                  button.Button.Button--transparent.w-1x3(v-on:click="addToCart") +
                  span.u-textCenter.w-1x3 {{ cart }}
                  button.Button.Button--transparent.w-1x3(v-on:click="removeFromCart") -
                button.Button.u-block.w-100 add to cart
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

export default {
  name: "id",
  components: {
    IconBase,
    IconClose
  },
  data() {
    return {
      title: "Activated Dermal Corrective Tonic",
      category: "Mere Phytisphere",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ingredients:
        "Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sea Salt (Maris sal), Glycerin, Polysorbate 20, Citrus Nobilis (Mandarin Orange) Peel Oil, Lavandula Angustifolia (Lavender) Oil, Phenoxyethanol, Cananga Odorata Flower Oil, Magnesium Nitrate, Methylchloroisothiazolinone, Magnesium Chloride, Methylisothiazolinone, Citric Acid, Limonene, Linalool, Benzyl Benzoate.",
      images: [
        "/images/products-pack-1.png",
        "/images/products-super-natural-dermal-serum-vaccine-bottle.png",
        "/images/products-pack-2.png"
      ],
      price: 69.95,
      cart: 1,
      flickityOptions: {
        // autoPlay: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        cellSelector: ".Slider-cell"
      }
    };
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

<style lang="postcss" scoped>
@import "../../assets/styles/variables.css";
@import "../../assets/styles/theme/tabs.css";

.ClosePage {
  position: fixed;
  right: 0.75rem;
  top: calc(1.1 * var(--s-5));
  z-index: 1;

  @media (--mo) {
    & >>> svg {
      height: 2rem;
      width: 2rem;
    }
  }

  @media (--sm) {
    right: 0;
    top: var(--s-5);
  }
}

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
