<template lang="pug">
  .Card
    c-image(
      :src="src"
      local
      card
    )
    .u-hidden.f-sm.f-alignItemsCenter.h-100.u-relative(v-if="title")
      .w-100
        h2.Title.Title--reversed.u-textCenter.c-white.m-b0(v-html="title")
        h3.Title.Title--reversed.u-textCenter.c-white.m-t3(v-if="subtitle", v-html="subtitle")
</template>

<script>
import Image from "~/components/Image.vue";

export default {
  components: {
    "c-image": Image
  },
  props: {
    src: {
      type: String,
      required: true
    },
    local: Boolean,
    title: String,
    subtitle: String
  }
};
</script>

<style>
@import "../assets/styles/variables.css";
</style>

