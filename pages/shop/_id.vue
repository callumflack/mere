<template lang="pug">
  .u-relative
    .b-py2
      .Container
        //- h1.Product-title.u-textCenter {{ shop.productByHandle.title }}

</template>

<script>
import shop from "~/apollo/queries/productByHandle";

export default {
  apollo: {
    shop: {
      query: shop
    }
  },
  data() {
    return {
      /* initialise apollo data */
      shop: {}
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
