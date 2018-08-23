<template lang="pug">
.Cart-item.f.f-alignItemsCenter.h-100
  .Cart-item-img
    img(
      :src="line_item.variant.image.src"
      :alt="`${line_item.title} product image`"
    )
  .Cart-item-name.Title.fs-text-md.m-b0 {{ line_item.title }}

  .Cart-item-quantity.Text
    button.Button.Button--transparent.w-1x3(@click="decrementQuantity(line_item.id)") -
    span.u-textCenter.w-1x3 {{ line_item.quantity }}
    button.Button.Button--transparent.w-1x3(@click="incrementQuantity(line_item.id)") +

  .Cart-item-price.Text ${{ lineItemPrice }}
  .Cart-item-quantityPrice.Text $69.95
  button.Cart-item-remove.u-linkNoOutline(@click="removeLineItemInCart(line_item.id)")
    icon-base.c-brand(icon-name="icon-close", height="20", width="20")
      icon-close
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import IconClose from "~/components/icons/IconClose.vue";

export default {
  components: {
    IconBase,
    IconClose
  },
  props: {
    removeLineItemInCart: Function,
    updateLineItemInCart: Function,
    line_item: Object
  },
  computed: {
    /* items() {
      return this.$store.state.checkout.lineItems ? this.$store.state.checkout.lineItems.edges : [];
    }, */
    lineItemPrice() {
      return (this.line_item.quantity * this.line_item.variant.price).toFixed(2);
    }
  },
  methods: {
    decrementQuantity(lineItemId) {
      console.log(lineItemId);
      this.updateLineItemInCart(lineItemId, this.line_item.quantity - 1);
      console.log(line_item.quantity);
    },
    incrementQuantity(lineItemId) {
      console.log(lineItemId);
      this.updateLineItemInCart(lineItemId, this.line_item.quantity + 1);
    }
  }
};
</script>
