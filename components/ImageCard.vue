<template lang="pug">
  .Card
    c-image(
      :src="src"
      local
      card
    )
    .u-hidden.f-lg.f-alignItemsCenter.h-100.u-relative(v-if="title")
      .Title.Title--reversed.u-textCenter.c-white.w-100(v-html="title")
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
    title: String
  }
};
</script>

<style>
@import "../assets/styles/variables.css";
</style>

