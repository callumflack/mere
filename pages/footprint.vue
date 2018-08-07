<template lang="pug">
  div
    .b-py2
      .Container.Container--xl
        .Card-block
          .c-block-brand
            h1.Product-title.Product-title--accent
              | A State Of Future Beauty
              br
              | Naturally Awoken
            .FlexGrid
              .w-1x2
                p MERE infuses the natural power of rich and unparalleled botanical bio-actives from the furthest reaches of Australia’s untouched landscape. A potency and natural phenomena that sets the base for everything we do.
              .w-1x2
                p MERE combines the power of these hidden elements with advanced skin science and cutting edge-technology to create an activation range like no other.
                p With a perfected collision of supernatural and technological formulas MERE breaks boundaries to unlock the skins infinite potential, activate visible results and deliver an experience truly beyond.

    .b-pb3
      .Container.Container--su
        .u-relative.bg-pale-purple
          .Card-block
            h1.Product-title.Product-title--accent.c-pale-text
              | An Active Footprint In Nature
              
          .FlexGrid
            .w-5x12.u-relative
              figure.Card-image.Card-image--adjacent
                img(src="/images/footprint-hero.jpg")
            .w-7x12
              .Card-block.p-t0.p-l0
                .Container.Container--sm.m-l0.p-l0
                  p MERE embodies a profound sense of connection and responsibility for the natural world. True to our Australian roots we sit on the forefront of ecological awareness with a focus on sustainable and ethical practices embedded within our brand DNA.
                  p It is with this respect that we consciously consider the MERE footprint we leave on the environment and our responsibility to preserve and protect these vital natural resources.
                  p.AccentParagraph MERE is packaged in 100% recyclable Miron Glass vessels carefully selected to preserve and protect the vital life force of the nature that we extract. The Biophotonic science of this unique glass serves to filter the light frequencies responsible for decomposition whilst allowing the infiltration of violet light frequencies that have been proven to activate the molecular structure of the formula held within.
                  p.m-l5 All other packaging is assembled from resources that are amongst the worlds most recycled materials. We believe we should be as active for the environment as we are for the skin.

</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: "Footprint"
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.Card {
  position: relative;
}

.Card-block {
  color: var(--c-pale-text);
  padding: calc(1.5 * var(--s-4)) calc(1.666 * var(--s-4));
}

.Card-image--adjacent {
  position: relative;
}
</style>
