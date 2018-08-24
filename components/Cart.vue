<template lang="pug">
  .Cart(:class="[{'u-hidden': !isCartVisible}]")
    .Container.Container--xl
      .b-py2
        .Cart-content(v-if="$store.state.checkout")
          .Cart-content-labels.Heading.fs-text-sm.c-brand.f.m-b3(v-if="checkout.totalPrice > 0")
            span.Cart-item-img.--withName Item
            span.Cart-item-quantity.Text Quantity
            span.Cart-item-price.Text Unit price
            span.Cart-item-quantityPrice.Text Total price

          .Cart-items.m-b4.p-t1
            .Cart-item.f.f-alignItemsCenter.f-justifyCenter.h-100.bg-neutral(v-if="checkout.totalPrice < 1")
              div
                .Title.m-b4 Your cart is empty
                p.u-textCenter
                  button.Button(@click="handleCartClose") Close cart
            CartLineItem(
              v-for="line_item in items"
              :removeLineItemInCart="removeLineItemInCart"
              :updateLineItemInCart="updateLineItemInCart"
              :key="line_item.node.id.toString()"
              :line_item="line_item.node"
            )

          .Cart-footer.f.f-justifyEnd(v-if="checkout.totalPrice > 0")
            .Cart-total.u-textRight
              .Heading.fs-text-sm.fw-medium.c-brand Total
              .Account-title.fw-regular.u-textRight.m-b2 ${{checkout.subtotalPrice}} AUD
              .Account-title.fw-regular.u-textRight.m-b2 ${{checkout.totalTax}} TAX
              .Account-title.fw-regular.u-textRight.m-b2 ${{checkout.totalPrice}} TAX
              button.Button(@click="openCheckout") Check out
</template>

<script>
import CartLineItem from "~/components/CartLineItem.vue";
import IconBase from "~/components/IconBase.vue";
import IconCloseSm from "~/components/icons/IconCloseSm.vue";
import IconTick from "~/components/icons/IconTick.vue";

export default {
  components: {
    CartLineItem,
    IconBase,
    IconCloseSm,
    IconTick
  },
  props: {
    /* checkout: Object,
    isCartOpen: Boolean,
    handleCartClose: Function, */
    removeLineItemInCart: Function,
    updateLineItemInCart: Function,
    customerAccessToken: String
  },
  data() {
    return {
      // turning this off used to error, even tho unused…
      // CartNav: []
    };
  },
  computed: {
    isCartVisible() {
      return this.$store.state.isCartVisible;
    },
    checkout() {
      return this.$store.state.checkout;
    },
    items() {
      return this.$store.state.checkout.lineItems ? this.$store.state.checkout.lineItems.edges : [];
    }
  },
  methods: {
    openCheckout() {
      window.open(this.checkout.webUrl, "_self");
    },
    handleCartClose() {
      this.$store.commit("SET_CART_VISIBILITY", false);
    }
  }
};
</script>

<style lang="css" scoped>
/* @import "../assets/styles/variables.css"; */

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
