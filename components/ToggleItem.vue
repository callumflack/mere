<template lang="pug">
  .Toggle(:class="{ 'is-active': isActive }")
    button.Toggle-title.f.f-justifyBetween(@click="toggle")
      h2.Account-subtitle.fw-regular.m-b0 {{ item.title }}
      icon-base.c-brand.m-sm-t1(icon-name="icon-toggle" height="24" width="24")
        icon-toggle
    .Toggle-info.p-mo-t1(v-show="isActive" v-html="item.info")
      
</template>

<script>
import IconBase from "~/components/IconBase";
import IconToggle from "~/components/icons/IconToggle";

export default {
  components: {
    IconBase,
    IconToggle
  },
  props: ["item"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Toggle {
  margin-top: 6px;
}

.Toggle + .Toggle {
  margin-top: calc(1 * var(--responsive-space));
}

.Toggle-title {
  border-bottom: 1px solid var(--c-brand-rule);
  /* margin-bottom: var(--s-3b);
  padding-bottom: var(--s-2a); */
  margin-bottom: calc(0.4 * var(--responsive-space));
  padding-bottom: calc(0.25 * var(--responsive-space));
  width: 100%;

  &:focus {
    outline: none;
  }
}

/* ICON */

.Toggle.is-active .u-icon {
  transform: rotate(180deg);
  transition: transform var(--transition-speed) var(--transition-easing-thisalso);
}
</style>

