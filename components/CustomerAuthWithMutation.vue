<template lang="pug">
  .CustomerAuth(:class="{'CustomerAuth--open' : isCustomerAuthOpen}")
    button.CustomerAuth__close(
      @click="closeCustomerAuth(); resetErrorMessages(); resetInputFields();"
    ) ×
    .CustomerAuth__body
      h2.CustomerAuth__heading {{newCustomer ? 'Create your Account' : 'Log in to your account'}}
      .error(v-if="nonFieldErrorMessage") {{nonFieldErrorMessage}}
      label.CustomerAuth__credential
        input.CustomerAuth__input(
          type="email"
          placeholder="Email" 
          name="email"
          v-model="model.email"
        )
        .error(v-if="emailErrorMessage" v-bind="emailErrorMessage")

      label.CustomerAuth__credential
        input.CustomerAuth__input(
          type="password"
          placeholder="Password" 
          name="password"
          v-model="model.password"
        )
        .error(v-if="passwordErrorMessage" v-bind="passwordErrorMessage")

      button.CustomerAuth__submit.button(type="submit" @click="handleSubmit")
        | {{newCustomer ? 'Create Account' : 'Log in'}}
</template>

<script>
import { customerCreate, customerAccessTokenCreate } from "~/apollo/auth";

export default {
  name: "CustomerAuthWithMutation",
  data() {
    return {
      model: {
        email: "",
        password: ""
      },
      nonFieldErrorMessage: null,
      emailErrorMessage: null,
      passwordErrorMessage: null
    };
  },

  props: {
    closeCustomerAuth: Function,
    associateCustomerCheckout: Function,
    showAccountVerificationMessage: Function,
    newCustomer: Boolean,
    isCustomerAuthOpen: Boolean
  },
  methods: {
    resetErrorMessages() {
      this.nonFieldErrorMessage = null;
      this.emailErrorMessage = null;
      this.passwordErrorMessage = null;
    },
    resetInputFields() {
      this.email = "";
      this.password = "";
    },
    handleSubmit() {
      this.resetErrorMessages();
      const email = this.model.email;
      const password = this.model.password;

      if (this.newCustomer) {
        this.createCustomerAccount(email, password);
      } else {
        this.loginCustomerAccount(email, password);
      }
    },
    createCustomerAccount(email, password) {
      const input = {
        email: email,
        password: password
      };
      this.$apollo
        .mutate({
          // Query
          mutation: customerCreate,
          // Parameters
          variables: { input }
        })
        .then(res => {
          if (res.data.customerCreate.customer) {
            this.closeCustomerAuth();
            this.showAccountVerificationMessage();
          } else {
            res.data.customerCreate.userErrors.forEach(
              function(error) {
                if (error.field) {
                  this[error.field + "ErrorMessage"] = error.message;
                } else {
                  this.nonFieldErrorMessage = error.message;
                }
              }.bind(this)
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    loginCustomerAccount(email, password) {
      const input = {
        email: email,
        password: password
      };
      this.$apollo
        .mutate({
          // Query
          mutation: customerAccessTokenCreate,
          // Parameters
          variables: { input }
        })
        .then(res => {
          if (res.data.customerAccessTokenCreate.customerAccessToken) {
            this.associateCustomerCheckout(
              res.data.customerAccessTokenCreate.customerAccessToken.accessToken
            );
          } else {
            res.data.customerAccessTokenCreate.userErrors.forEach(
              function(error) {
                if (error.field != null) {
                  this[error.field + "ErrorMessage"] = error.message;
                } else {
                  this.nonFieldErrorMessage = error.message;
                }
              }.bind(this)
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
