<template lang="pug">
  .u-relative
    nuxt-link.ClosePage(to="/shop")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
    .b-py2.p-msm-b3
      .Container.Container--sm
        h3.Heading.Heading--md.m-b3 {{ category }}
        h1.Product-title {{ title }}
      
    .Container.Container--su.b-pb3
      .FlexGrid
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              p.c-brand.u-textCenter.m-b3 ${{ price }}
              p.c-brand.u-textCenter {{ intro }}
              .u-textCenter.m-t4
                .Heading.c-brand.fw-medium.m-b3
                  a.LinkUnderline(@click="handleToggle") 
                    span(v-if="isVisible") Show 
                    span(v-if="!isVisible") Hide 
                    span all ingredients
                p.c-brand.u-textCenter.toggle(:class="{ 'is-hidden': isVisible }") {{ ingredients }}

        .w-sm-1x3
          flickity.Slider(ref="flickity" :options="flickityOptions")
            .Slider-cell(v-for="image in images" :key="image")
              img(:src="image")
          // p.Heading Super natural properties
            
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
                p.c-brand.u-textCenter.Text--sm
                  | Add more than $49 worth of MERE to your bag and receive free shipping on the order
    
    .Container.Container--su.b-pb3
      .FlexGrid--lg
        .w-sm-1x2.one
          .Card.p-sm-l7.p-sm-b5
            figure.Card-image
              img(src="/images/home-cactus.jpg")
            .Card-block.bg-pale-green
              | Ingredients
              br
              | ---
              br
              | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
        .w-sm-1x2.two
          .Card.p-sm-t5
            figure.Card-image
              img(src="/images/home-girl-1.jpg")

        .w-sm-1x3.three
          .Card
            figure.Card-image
              img(src="/images/home-beach.jpg")
        .w-sm-1x3.four
          .f-childrenCenter(style="height:66%")
            .Card.p-sm-t5
              .Card-block
                | Customer insights
                .Product-title.Product-title--card.m-b0 Emma Rose-Lapthorn
                | Lorem Ipsum Magazine
                .Product-title.Product-title--card
                  | “Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te facilisi”
        .w-sm-1x3.five
          .Card
            .Card-block.p-sm-t4.p-sm-b5
              | Our Active Footprint
              br
              | ---
              br
              | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet oreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequa 
            .w-sm-3x4.m-xA
              figure.Card-image
                img(src="/images/product-card-swimming-woman.jpg")
              .Card-block.bg-pale-purple
                | The Formula
                br
                | ---
                br
                | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. 
        
        .w-sm-9x12.six
          .Card.p-sm-l6.p-sm-r5
            figure.Card-image
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      if (this.cart <= 0) {
        this.cart = 0;
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

.ClosePage {
  position: fixed;
  top: var(--s-5);
  right: 0;
  z-index: 1;
}

.Card {
  position: relative;
}

.Card-block {
  color: var(--c-pale-text);
  padding: var(--s-3b) var(--s-4);
  text-align: center;
}

/* flickity wtf */

.Slider-cell {
  width: 420px;
}
.Slider-cell img {
  height: auto;
  margin: auto;
}

/* comp utils */

.c-pale-text {
  color: var(--c-pale-text);
}
.bg-pale-green {
  background-color: var(--c-pale-green);
}
.bg-pale-purple {
  background-color: var(--c-pale-purple);
}

/* simple toggle */

.toggle {
  opacity: 1;
  transform: translateY(0);
}

.toggle.is-hidden {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity var(--transition-duration),
    transform 0s var(--transition-duration);
}
</style>
