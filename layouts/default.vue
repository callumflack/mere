<template lang="pug">
  // div(:class="currentPage.substring(currentPage.lastIndexOf('/') + 1)")
  // div(:class="currentPageClass.slice(4)")
  div(
    :class="currentPageClass.split('-/').join('-').split('/').join('-')"
    :style="staticBody"
    v-on:emitCartIsToggled="staticBody"
  )
    c-menu
    .Content
      nuxt
    c-footer
    Cart(
      :removeLineItemInCart="removeLineItemInCart"
      :updateLineItemInCart="updateLineItemInCart"
      :checkout="checkout"
      :isCartOpen="$store.state.isCartOpen"
      :handleCartClose="handleCartClose"
      :customerAccessToken="customerAccessToken"
    )
    //- CustomerAuthWithMutation(
    //-   :closeCustomerAuth="closeCustomerAuth"
    //-   :isCustomerAuthOpen="isCustomerAuthOpen"
    //-   :newCustomer="isNewCustomer"
    //-   :associateCustomerCheckout="associateCustomerCheckout"
    //-   :showAccountVerificationMessage="showAccountVerificationMessage"
    //- )

</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/MenuBottom.vue";
import Cart from "~/components/Cart.vue";
import CustomerAuthWithMutation from "~/components/CustomerAuthWithMutation.vue";
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
      accountVerificationMessage: "",
      checkout: { lineItems: { edges: [] } },
      customerAccessToken: "",
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: []
    };
  },
  computed: {
    currentPageClass() {
      // https://nuxtjs.org/guide/routing/#middleware
      // return [{ home: $store.state.currentPage === "/" }];
      return `fs-scale-reset u-relative body-page-${this.$store.state.currentPage}`;
    },
    staticBody() {
      return this.$store.state.isCartVisible && `height:100vh;overflow:hidden;`;
      // return this.$store.state.isMobileNavVisible && `height:100vh;overflow:hidden;`;
    }
  },
  methods: {
    checkoutLineItemsAdd() {},
    checkoutLineItemsUpdate() {},
    checkoutLineItemsRemove() {},
    checkoutCustomerAssociate() {},

    updateLineItemInCart(lineItemId, quantity) {
      this.$apollo
        .mutate({
          // Query
          mutation: checkoutLineItemsUpdate,
          // Parameters
          variables: {
            checkoutId: this.$store.state.checkout.id,
            lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
          }
        })
        .then(res => {
          console.log(res);
          this.$store.commit("SET_CHECKOUT", res.data.checkoutLineItemsUpdate.checkout);
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
            checkoutId: this.$store.state.checkout.id,
            lineItemIds: [lineItemId]
          }
        })
        .then(res => {
          //this.checkout = res.data.checkoutLineItemsRemove.checkout;
          this.$store.commit("SET_CHECKOUT", res.data.checkoutLineItemsRemove.checkout);
          /* if (!this.itemsInCart) {
            this.handleCartClose();
          } */
        })
        .catch(error => {
          console.error(error);
        });
    },
    /* associateCustomerCheckout(customerAccessToken) {
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
    }, */
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
          //this.checkout = res.data.checkoutCreate.checkout;
          this.$store.commit("SET_CHECKOUT", res.data.checkoutCreate.checkout);
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleCartClose() {
      this.$store.commit("SET_CART_VISIBILITY", false);
    },
    handleCartOpen() {
      this.$store.commit("SET_CART_VISIBILITY", true);
    }
    /* openCustomerAuth(event) {
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
    } */
  },
  mounted() {
    this.createCheckout();
  }
};
</script>
