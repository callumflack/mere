<template lang="pug">
.Card
  figure(:class="figureClasses", ref="placeholder")
    picture
      source(
        media="(min-width: 769px)"
        :srcset="srcSetLg"
        sizes="100vw"
      )
      img(
        :src="srcImg"
        alt="Mere"
        sizes="100vw"
      )
  .u-hidden.f-sm.f-alignItemsCenter.h-100.u-relative(v-if="title")
    .w-100
      h2.Title.Title--reversed.u-textCenter.c-white.m-b0(v-html="title")
      h3.Title.Title--reversed.u-textCenter.c-white.m-t3(v-if="subtitle", v-html="subtitle")


</template>

<script scoped>
const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";

export default {
  name: "c-picture",
  props: {
    src: {
      type: String
    },
    srcset: {
      type: String
    },
    card: Boolean,
    local: Boolean,
    title: String,
    subtitle: String
  },
  computed: {
    figureClasses() {
      return [
        "figure",
        {
          "Card-figure": this.card
        }
      ];
    },
    srcImg() {
      return `images/${this.src}`;
    },
    srcSetSm() {
      return this.srcset && `srcset="images/${this.srcset} 400w"`;
    },
    srcSetLg() {
      return this.srcset && `images/${this.srcset} 769w`;
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
