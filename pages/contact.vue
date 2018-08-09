<template lang="pug">
  .b-py3
    .Container
      .Card-block.bg-sm-brand-bg.p-mo-a0
        .b-mb1
          h1.Product-title.c-text.u-sm-textCenter We would love to hear from you. 
          p.c-brand.u-sm-textCenter.m-a0 Please enter your details below and we will be in touch. 
        .c-block-brand
          form
            .form-entry
              input(type="text" id="first-name" placeholder="First name*" required)
              label(for="first-name") First name*
              span.help-text
            .form-entry
              input(type="text" placeholder="Last name*" required)
              label Last name*
            .form-entry
              input(type="email" placeholder="Email*" required)
              label Email*
            .form-entry
              input(type="tel" placeholder="Phone number*" required)
              label Phone*
            .form-entry
              textarea(id="textarea" placeholder="Enter your message*" rows="4")

            p.u-textCenter.m-y5
              a.Button Submit

          p.u-textCenter.fs-text-sm
            span.ff-title.fs-text.c-text.m-r3 DERMACO PTY LTD
            | Po Box 663 NSW 1655 Australia
      
      // submitted state
      // .Card-block.bg-brand-bg
        .f-childrenCenter
          .m-b5
            h2.Product-title.c-text.fs-supertitle Thank you 
            p.c-brand.u-textCenter.m-b5 Our team will be in touch soon.
            p.u-textCenter
              nuxt-link.Button(to="/shop") Return to shop

</template>

<script>
// import IconClose from "~/components/icons/IconClose";

export default {
  components: {},
  head() {
    return {
      title: "Contact"
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Card-block {
  height: 866px;
  padding: calc(1.5 * var(--s-4)) calc(1.666 * var(--s-4)) var(--s-2);
}
</style>
