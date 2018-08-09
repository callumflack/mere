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

  // hide it later…
  // .u-absolutePin.u-hidden.f-lg.f-childrenCenter.vh-100
  .u-absolutePin.z-3
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

export default {
  layout: "holding",
  components: {
    Logo,
    ImageCard,
    ImagePicture
  },
  mounted() {
    // Safari iOS always displays a 44px bottom menu until scrolled…
    // …alas this holding page never scrolls!
    // http://jsfiddle.net/jlubean/dL5cLjxt/
    // https://benfrain.com/the-ios-safari-menu-bar-is-hostile-to-web-apps-discuss/
    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isSafari && iOS) {
      document.body.classList.add("is-safari-ios");
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/styles/variables.css";

.HeroLogo {
  display: none;

  @media (--md) {
    display: block;
  }
}

/* image containers */
.Collage {
  /* height: calc(100vh - var(--menu-height)); */
  height: 100vh;
  position: relative;
  width: 100vw;
}

/* 
  allow for the gnarly bottom menu in safari ios,
  specifically targeting w/ media-queries
  https://stackoverflow.com/questions/25759046/iphone-6-and-6-plus-media-queries
*/
.is-safari-ios .Collage {
  @media only screen and (orientation: landscape) {
    height: calc(100vh - 75px);
  }

  /* iphone 6 only */
  @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape) {
    height: calc(100vh - 70px);
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
.mt-top {
  height: 25%;
}
.mt-bottom {
  bottom: 0;
  height: 25%;
  position: absolute;
  width: 100%;
}
</style>
