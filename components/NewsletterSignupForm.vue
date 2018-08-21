<template lang="pug">
.Signup(:class="[{'u-hidden': !isNewsletterFormVisible}]")
  button.Signup-close.u-linkNoOutline(@click="handleNewsletterFormToggle")
    icon-base.c-brand.p-a3(icon-name="icon-close", height="24", width="24")
      icon-close-sm
  h2.Heading.u-textCenter Join the movement
  p.u-textCenter.c-brand.m-b0 Become part of the Future Beauty Movement to receive rich info, special offers, product exclusives and much more

  form(
    action="https://design.us18.list-manage.com/subscribe/post?u=b6d465003f797d00bb8c2a7a0&id=3eb35e7129",
    method="post", 
    name="mc-embedded-subscribe-form", 
    target='_blank', 
    novalidate=''
  )
    .f.form-entry.form-group
      input(
        id="email"
        name="EMAIL", 
        placeholder="Add your email", 
        required
        type="email", 
        value="", 
      )
      //- label(for="email") Add your email*
      div(style="position: absolute; left: -5000px;", aria-hidden="true")
        input(
          type="text", 
          name="b_b6d465003f797d00bb8c2a7a0_3eb35e7129", 
          tabindex="-1", 
          value=""
        )
      button.Button(
        type="submit", 
        name="subscribe", 
      ) {{buttonText}} 
</template>

<script>
import IconBase from "~/components/IconBase";
import IconCloseSm from "~/components/icons/IconCloseSm";

export default {
  components: {
    IconBase,
    IconCloseSm
  },
  props: {},
  computed: {
    isNewsletterFormVisible() {
      return this.$store.state.isNewsletterFormVisible;
    },
    buttonText() {
      // if (this.loading) {
      //   return "Loading";
      // } else if (this.formSent) {
      //   return "Sent";
      // }
      return "Subscribe";
    }
  },
  methods: {
    handleNewsletterFormToggle() {
      this.$store.commit("SET_NEWSLETTERFORM_VISIBILITY", !this.$store.state.isNewsletterFormVisible);
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.Signup {
  background-color: var(--c-neutral);
  position: relative;
  padding: calc(1.25 * var(--grid-gutter)) var(--grid-gutter);
}

.Signup-close {
  position: absolute;
  top: 0;
  right: 0;
}

.form-group {
  & input ~ button {
    margin-left: -1px;
  }
}

/* .form {
}

.form input {
  border-bottom: 1px solid var(--c-text);
  box-shadow: none;
  color: var(--c-text);
  padding-left: 0;

  &:focus {
    border-color: var(--c-text);
  }
} */
</style>
