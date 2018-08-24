<template lang="pug">
  .b-py3
    .Container
      .Card-block.bg-sm-brand-bg.p-mo-a0(v-if="!formSubmitted")
        .b-mb1
          h1.Product-title.c-text.u-sm-textCenter We would love to hear from you.
          p.c-brand.u-sm-textCenter.m-a0 Please enter your details below and we will be in touch.
        .c-block-brand
          form(@submit="handleSubmit")
            .form-entry
              input(
                type="text"
                id="firstName"
                name="firstName"
                v-model="firstName"
                placeholder="First name*"
                required
              )
              label(for="firstName") First name*
              span.help-text

            .form-entry
              input(
                type="text"
                name="lastName"
                v-model="lastName"
                placeholder="Last name*"
                required
              )
              label Last name*

            .form-entry
              input(
                type="email"
                name="_replyto"
                v-model="email"
                placeholder="Email*"
                required
              )
              label Email*

            .form-entry
              input(
                type="tel"
                name="phoneNumber"
                v-model="phoneNumber"
                placeholder="Phone number*"
                required
              )
              label Phone*

            .form-entry
              textarea(
                id="textarea"
                name="message"
                v-model="message"
                placeholder="Enter your message*"
                rows="4"
              )

            p.u-textCenter.m-y5
              button.Button(type="submit") Submit

          p.u-textCenter.fs-text-sm
            span.ff-title.fs-text.c-text.m-r3 DERMACO PTY LTD
            | Po Box 663 NSW 1655 Australia

      //- submitted state
      .Card-block.bg-brand-bg(v-else)
        .f-childrenCenter
          .m-b5
            h2.Product-title.c-text.fs-supertitle Thank you
            p.c-brand.u-textCenter.m-b5 Our team will be in touch soon.
            p.u-textCenter
              nuxt-link.Button(to="/shop") Return to shop

</template>

<script>
const FORMSPREE_ID = "xjrqnwax";

export default {
  layout: "shopifyless",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "Mere website inquiry",
      message: "",
      formSubmitted: false
    };
  },
  methods: {
    async handleSubmit() {
      const response = await fetch(`https://formspree.io/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          subject: this.subject,
          message: this.message,
          formSubmitted: true
        })
      });
    }
  },
  head() {
    return {
      title: "Contact"
    };
  }
};
</script>

<style lang="css" scoped>
/* @import "../assets/styles/variables.css"; */

.Card-block {
  /* padding: calc(1.5 * var(--s-4)) calc(1.666 * var(--s-4)) var(--s-2); */
  @media (--md) {
    height: 866px;
  }
}
</style>
