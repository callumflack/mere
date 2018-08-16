<template lang="pug">
  // div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  // div(:class="currentPageClass.slice(4)")
  div(:class="currentPageClass.split('-/').join('-')")
    c-menu
    .Content
      nuxt
    c-footer
    cart(
      :removeLineItemInCart="removeLineItemInCart"
      :updateLineItemInCart="updateLineItemInCart"
      :checkout="checkout"
      :isCartOpen="isCartOpen"
      :handleCartClose="handleCartClose"
      :customerAccessToken="customerAccessToken"
    )
</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/MenuBottom.vue";
import Cart from "~/components/Cart.vue";
import {
  getShopData,
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from "~/apollo/checkout";

export default {
  components: {
    "c-menu": Menu,
    "c-footer": Footer,
    Cart
  },
  data() {
    return {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      customerAccessToken: "",
      accountVerificationMessage: "",
      products: [],
      checkout: { lineItems: { edges: [] } }
    };
  },
  computed: {
    itemsInCart() {
      if (this.checkout) {
        return 0;
      }
      return this.checkout.lineItems.edges.length;
    },
    currentPageClass() {
      // requires middleware function
      // https://nuxtjs.org/guide/routing/#middleware
      return `fs-scale-reset u-relative page-${this.$store.state.currentPage}`;
      // return [{ home: $store.state.currentPage === "/" }];
    }
  },
  methods: {
    checkoutLineItemsAdd() {},
    checkoutLineItemsUpdate() {},
    checkoutLineItemsRemove() {},
    checkoutCustomerAssociate() {},
    addVariantToCart(variantId, quantity) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutLineItemsAdd,
          // Parameters
          variables: {
            checkoutId: this.checkout.id,
            lineItems: [{ variantId, quantity: parseInt(quantity, 10) }]
          }
        })
        .then(res => {
          this.checkout = res.data.checkoutLineItemsAdd.checkout;
        })
        .catch(error => {
          console.error(error);
        });
      this.handleCartOpen();
    },
    updateLineItemInCart(lineItemId, quantity) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutLineItemsUpdate,
          // Parameters
          variables: {
            checkoutId: this.checkout.id,
            lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
          }
        })
        .then(res => {
          console.log(res);
          this.checkout = res.data.checkoutLineItemsUpdate.checkout;
        })
        .catch(error => {
          console.error(error);
        });
    },
    removeLineItemInCart(lineItemId) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutLineItemsRemove,
          // Parameters
          variables: {
            checkoutId: this.checkout.id,
            lineItemIds: [lineItemId]
          }
        })
        .then(res => {
          this.checkout = res.data.checkoutLineItemsRemove.checkout;
          if (!this.itemsInCart) {
            this.handleCartClose();
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    associateCustomerCheckout(customerAccessToken) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutCustomerAssociate,
          // Parameters
          variables: {
            checkoutId: this.checkout.id,
            customerAccessToken: customerAccessToken
          }
        })
        .then(res => {
          this.checkout = res.data.checkoutCustomerAssociate.checkout;
          this.isCustomerAuthOpen = false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    createCheckout() {
      this.$apollo
        .mutate({
          // Query
          mutation: createCheckout,
          // Parameters
          variables: {
            input: {}
          }
        })
        .then(res => {
          this.checkout = res.data.checkoutCreate.checkout;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleCartClose() {
      this.isCartOpen = false;
    },
    handleCartOpen() {
      this.isCartOpen = true;
    },
    openCustomerAuth(event) {
      if (event.target.getAttribute("data-customer-type") === "new-customer") {
        this.isNewCustomer = true;
        this.isCustomerAuthOpen = true;
      } else {
        this.isNewCustomer = false;
        this.isCustomerAuthOpen = true;
      }
    },
    showAccountVerificationMessage() {
      this.accountVerificationMessage = true;
      setTimeout(() => {
        this.accountVerificationMessage = false;
      }, 5000);
    },
    closeCustomerAuth() {
      this.isCustomerAuthOpen = false;
    }
  },
  mounted() {
    this.createCheckout();
  }
};
</script>