<template lang="pug">
  .Cart(:class="[{'u-hidden': !isCartVisible}]")
    //- .u-relative
      button.ClosePage(@click="closeCart")
        icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
          icon-close
    .Container.Container--xl
      //- .b-py2
        .Nav.f.f-justifyBetween
          .Nav-item.f.f-col(v-for="(item) in CartNav" :key="item.label") 
            .Heading.fw-medium.fs-text-sm.c-brand.p-b2 {{ item.label }}
            //- .Nav-item-index.f.f-childrenCenter.m-aA(:class="[{'is-active': isCartSummaryVisible}]")
            .Nav-item-index.f.f-childrenCenter.m-aA
              icon-base.c-neutral(icon-name="icon-tick", height="20", width="20")
                icon-tick
      .b-py2
        .Cart-content
          .Cart-content-labels.Heading.fs-text-sm.fw-medium.c-brand.f.m-b4
            span.Cart-item-img.--withName Item
            span.Cart-item-quantity.Text Quantity
            span.Cart-item-price.Text Unit price
            span.Cart-item-quantityPrice.Text Total price

          .Cart-items.m-b4.p-t1
            .Cart-item.f.f-alignItemsCenter.h-100
              .Cart-item-img
                img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png", alt="")
              .Cart-item-name.Title.fs-text-md.m-b0 Bio-Repair Night Guardian Mask
              .Cart-item-quantity.Text 1
              .Cart-item-price.Text $69.95
              .Cart-item-quantityPrice.Text $69.95
              button.Cart-item-remove
                icon-base.c-brand(icon-name="icon-close", height="20", width="20")
                  icon-close
          
          .f.f-justifyBetween
            .Cart-promo
              form
                .form-entry
                  input(type="text" id="promo-code" placeholder="Enter promo code")
                  label(for="promo-code") Enter promo code
            .Cart-total.u-textRight
              .Heading.fs-text-sm.fw-medium.c-brand Total
              .Account-title.fw-regular.u-textRight.m-b2 $139.95 AUD
              .Text.fs-text-sm.c-brand.p-b3 Your discount of $37.50 has been applied 
              button.Button Check out
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconClose from "~/components/icons/IconClose.vue";
import IconTick from "~/components/icons/IconTick.vue";

export default {
  components: {
    IconBase,
    IconClose,
    IconTick
  },
  data() {
    return {
      CartNav: [
        {
          label: "cart"
        },
        {
          label: "billing"
        },
        {
          label: "delivery"
        },
        {
          label: "shipping"
        },
        {
          label: "payment"
        },
        {
          label: "confirm"
        }
      ]
    };
  },
  computed: {
    isCartVisible() {
      return this.$store.state.isCartVisible;
    },
    isCartSummaryVisible() {
      return this.$store.state.isCartSummaryVisible;
    }
  },
  methods: {
    closeCart() {
      this.$store.commit("SET_CART_VISIBILITY", false);
    }
  }
};
</script>

<style lang="css" scoped>
/* @import "../assets/styles/variables.css"; */

.Cart {
  /* @mixin fullScreen; */
  bottom: 0;
  height: 100%;
  left: 0;
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;

  background-color: var(--c-neutral);
  height: calc(100vh - var(--menu-height));
  top: var(--menu-height);
  width: 100%;
  z-index: 1001;
}

.Cart-item {
  background-color: var(--c-bg);
  padding: 2.5rem 0;
}
.Cart-item-img {
  width: 15%;

  & img {
    margin: auto;
    width: 4rem;
  }
}
.--withName {
  margin-right: 40%;
}
.Cart-item-name {
  width: 40%;
}
.Cart-item-quantity,
.Cart-item-price,
.Cart-item-quantityPrice {
  /* @mixin Text; */
}
.Cart-item-quantity,
.Cart-item-price,
.Cart-item-quantityPrice,
.Cart-item-remove {
  width: calc(45% / 4);
}
.Cart-item-img,
.Cart-item-quantity,
.Cart-item-price,
.Cart-item-quantityPrice,
.Cart-item-remove {
  text-align: center;
}

/* 

  NAV

 */

.Nav {
  position: relative;

  &:before {
    background-color: var(--c-brand);
    content: "";
    height: 1px;
    margin: auto;
    position: absolute;
    transform: translateY(50%);
    top: 67%;
    width: 96%;
  }
}

.Nav-item {
  cursor: pointer;
  height: 4rem;
}

.Nav-item-index {
  background-color: var(--c-neutral);
  border: 1px solid var(--c-brand);
  border-radius: 999px;
  box-shadow: var(--c-neutral) 0 0 0 0.5rem;
  color: var(--c-bg);
  height: 1.5rem;
  line-height: 1.5rem;
  position: relative;
  text-align: center;
  width: 1.5rem;

  &.is-active {
    background-color: var(--c-brand);
  }
}
</style>

