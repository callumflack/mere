<template lang="pug">
  div
    .b-py2
      .Container.Container--su
        .FlexGrid
          .w-sm-1x2.m-b3.m-sm-b0
            figure.Card-image
              img(src="/images/about-hero.jpg")
          .w-sm-1x2.m-b5.m-sm-b0
            .Container--sm.m-l0.h-100
              .f-childrenCenter
                .c-block-brand
                  h1.Product-title.Product-title--accent.m-b0
                    | Transcending The 
                    br
                    | Boundaries Of Skin Care
                  p.AccentParagraph MERE infuses the natural power of rich and unparalleled botanical bio-actives from the furthest reaches of Australia’s untouched landscape. A potency and natural phenomena that sets the base for everything we do.
                  p.m-sm-l4 MERE combines the power of these hidden elements with advanced skin science and cutting edge-technology to create an activation range like no other.
                  p.m-sm-l4 With a perfected collision of supernatural and technological formulas MERE breaks boundaries to unlock the skins infinite potential, activate visible results and deliver an experience truly beyond.

    .b-pb3
      .Container.Container--su
        .u-relative
          .Card-block.w-sm-3x4.bg-pale-green
            .Container--sm.m-t6.m-sm-t0.m-l0.p-l0
              h1.Product-title.Product-title--accent.c-pale-text
                | The Mere
                br
                | Phytosphere
                br
                | Formula
              p MERE is formulated from nature’s most potent and genetically advanced Phyto actives, unearthed from within Australia’s pure and far reaching eco system.
              p.AccentParagraph The distinct selection and discovery of these complex extracts that have adapted to withstand natural phenomena in these extreme realms is the basis for our fusion with science.
              p Through cutting-edge technology and the expertise of our Phyto Chemists and Cosmetic Scientists, these hidden actives are isolated and brought together in unity with the most clinically advanced natural molecules and delivery systems.
              p It is the sum of this alchemy and the interlocking power of these unique actives from biospheric extremities that delivers the supernatural results of each PHYTOSPHERE formula.
          figure.Card-image.Card-image--adjacent.w-5x6.w-sm-1x2
              img(src="/images/home-girl-2.jpg")

    .b-pb3
      .Container.Container--su
        .AspectRatio.AspectRatio--8x5
          .AspectRatio-object(ref="video")
            iframe(
              :src="vimeoSrc" 
              frameborder="0" 
              webkitallowfullscreen 
              mozallowfullscreen 
              allowfullscreen
            )
            script(src="https://player.vimeo.com/api/player.js")
          .AspectRatio-object.CoverImage.video-button-wrapper.is-dark(
            :class="wrapButtonStateClasses"
            style="background-image:url(/images/home-texture-1.jpg)"
          )
            button.video-button(@click="play")
              span.u-icon.video-button-icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><path d="M80,1A79,79,0,1,1,1,80,79.09,79.09,0,0,1,80,1m0-1a80,80,0,1,0,80,80A80,80,0,0,0,80,0Z"/><polygon points="64.35 105 64.35 55 104.35 80 64.35 105"/></svg>


</template>

<script>
// import IconClose from "~/components/icons/IconClose";

export default {
  components: {},
  data() {
    return {
      isActive: false,
      vimeoSrc:
        "https://player.vimeo.com/video/261113972?title=0&byline=0&portrait=0?api=1"
    };
  },
  methods: {
    play: function() {
      this.$refs.video.play();
      this.isActive = !this.isActive;

      // if (video.paused) {
      // } else {
      //   this.$refs.videoref.pause();
      // }
    }
  },
  computed: {
    wrapButtonStateClasses() {
      return [
        {
          "is-active": this.isActive,
          "is-dark": this.reverseOverlay
        }
      ];
    }
  },
  head() {
    return {
      title: "About"
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";
@import "../assets/styles/components/video-button.css";

.Card-image--adjacent {
  position: absolute;
  right: calc(-1 * var(--s-3));
  top: calc(-2 * var(--responsive-space));

  @media (--sm) {
    right: 0;
    /* top: calc(-1 * var(--s-5)); */
  }
}
</style>
