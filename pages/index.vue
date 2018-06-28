<template lang="pug">
.Collage
  image-card.one.top.z-2(
    src="/images/landing-v3-texture.jpg"
    title="BORN IN AUSTRALIA"
    subtitle="FROM THE EARTH'S MOST<br>POWERFUL LIFE FORCE"
  )
  image-picture.two.top.right(
    card
    src="landing-v3-girl-m.jpg"
    srcset="landing-v3-girl.jpg"
  )
  image-picture.three(
    card
    src="landing-v3-greensea-m.jpg"
    srcset="landing-v3-greensea.jpg"
  )
  image-picture.four.bottom(
    card
    src="landing-v3-darksea-m.jpg"
    srcset="landing-v3-darksea-1.jpg"
    title="FUTURE BEAUTY<br>NATURALLY AWOKEN"
    subtitle="ACTIVATING SOON"
  )

  .u-absolutePin.z-3.mt-logo
    .f.f-childrenCenter
      .w-100.u-textCenter
        logo.c-white.u-sm-hidden(width="214" height="50")
        logo.c-white.u-hidden.u-sm-block.u-lg-hidden(width="321" height="75")
        logo.c-white.u-hidden.u-lg-block(width="428" height="100")
  .u-absolutePin.z-4.u-sm-hidden
    .mt-top
      .f.f-childrenCenter
        .w-100
          h1.Title.Title--reversed.u-textCenter.c-white.m-b2
            | BORN IN AUSTRALIA
          h2.Title.Title--reversed.u-textCenter.c-white
            | FROM THE EARTH'S MOST<br>POWERFUL LIFE FORCE
    .mt-bottom
      .f.f-childrenCenter
        .w-100
          h2.Title.Title--reversed.u-textCenter.c-white.m-b2
            | FUTURE BEAUTY<br>NATURALLY AWOKEN
          h2.Title.Title--reversed.u-textCenter.c-white
            | ACTIVATING SOON
    
</template>

<script>
import Logo from "~/components/Logo2.vue";
import ImageCard from "~/components/ImageCard.vue";
import ImagePicture from "~/components/ImageAsPicture.vue";
import LazyImage from "v-lazy-image";
import bowser from "~/assets/js/bowser";

export default {
  layout: "holding",
  components: {
    Logo,
    ImageCard,
    ImagePicture,
    LazyImage
  },
  mounted() {
    // toggle body class to manage Safari iOS 44px bottom menu until scrolled…
    // https://github.com/lancedikson/bowser
    if (bowser.ios && bowser.chrome) {
      document.body.classList.add("is-chrome-ios");
      // alert("Hello Chrome on iOS");
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/styles/variables.css";

.HeroLogo {
  display: none;

  @media (--md) {
    display: block;
  }
}

/* image containers */
.Collage {
  height: 100vh;
  position: relative;
  width: 100vw;
}

/* 
  allow for the gnarly bottom menu in safari ios,
  specifically targeting w/ media-queries
  using the detections in mounted()
*/

.Collage {
  @media only screen and (max-device-width: 667px) and (orientation: portrait) {
    height: calc(100vh - 75px);
  }

  @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {
    height: calc(100vh - 70px);
  }
}

.is-chrome-ios .Collage {
  @media only screen and (max-device-width: 667px) and (orientation: portrait) {
    height: 100vh;
  }
}

/* image utils */
.left {
  left: 0;
}
.right {
  right: 0;
}
.top {
  top: 0;
}
.bottom {
  bottom: 0;
}

/* the images */
.one {
  display: none;

  @media (--sm) {
    display: block;
    height: 49.8%;
    width: 51.3%;
  }
}

.two {
  height: 100%;
  left: 50%;
  width: 50%;

  @media (--sm) {
    height: 68%;
  }
}

.three {
  height: 25%;
  width: 50%;

  & >>> img {
    object-position: bottom;
  }

  @media (--sm) {
    bottom: 0;
    height: 52%;
    left: 0;

    & >>> img {
      object-position: top;
    }
  }
}

.four {
  height: 75%;
  width: 90%;

  @media (--sm) {
    height: 32%;
    width: 50%;
    left: 50%;
  }
}

/* mobile-only text */
.mt-logo {
  top: 25%;

  @media (--sm) {
    top: 0;
  }
}

.mt-top,
.mt-bottom {
  height: 25%;
  position: absolute;
  width: 100%;
}

.mt-top {
  top: 25%;
}

.mt-bottom {
  bottom: 0;
}
</style>
