<template lang="pug">
.Collage
  image-card.one.top.z-2(
    src="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_1300/v1530177052/mere/landing-v3-texture.jpg"
    title="BORN IN AUSTRALIA"
    subtitle="FROM THE EARTH'S MOST<br>POWERFUL LIFE FORCE"
  )
  image-picture.two.top.right(
    card
    src="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_400,c_fill,g_auto/v1530177029/mere/landing-v3-girl-m.jpg"
    srcset="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_1300,c_fill,g_auto/v1530177024/mere/landing-v3-girl.jpg"
  )
  image-picture.three(
    card
    src="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_400/v1530177018/mere/landing-v3-greensea-m.jpg"
    srcset="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_1300/v1530177029/mere/landing-v3-greensea.jpg"
  )
  image-picture.four.bottom(
    card
    src="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_700/v1530177026/mere/landing-v3-darksea-m.jpg"
    srcset="https://res.cloudinary.com/pw-img-cdn/image/upload/f_auto,q_70,w_1300/v1530177015/mere/landing-v3-darksea-1.jpg"
    title="FUTURE BEAUTY<br>NATURALLY AWOKEN"
    subtitle="ACTIVATING SOON"
  )

  .u-absolutePin.z-3.mt-logo
    .f.f-childrenCenter
      .w-100.u-textCenter
        logo.c-white.u-sm-hidden(width="214" height="50")
        logo.c-white.u-hidden.u-sm-block.u-lg-hidden(width="321" height="75")
        logo.c-white.u-hidden.u-lg-block(width="428" height="100")
  .u-absolutePin.z-4.mt-logo.u-sm-hidden
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
  // .u-absolutePin.z-5.fakeSafariBottomMenu

</template>

<script>
import Logo from "~/components/Logo.vue";
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
    if (bowser.ios && bowser.safari) {
      document.body.classList.add("is-safari-ios");
    } else if (bowser.ios && !bowser.safari) {
      document.body.classList.add("is-not-safari-ios");
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
  display: block;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  width: 100%;
}

/* 
  allow for the gnarly bottom menu in safari ios
  by specifically targeting w/ media-queries
  using the bowser detections in mounted()
*/

/* .Collage {
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
} */

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

/* 

  Mobile-only text.
  Revise mobile-onnly text on Safari iOS only
  using the bowser detections in mounted()

*/

.fakeSafariBottomMenu {
  background-color: chartreuse;
  height: 75px;
  top: auto;
}

.mt-logo {
  top: 25%;
  height: 75%;

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
  top: 0;
}

.mt-bottom {
  bottom: 0;
}

/* is-safari-ios */
.is-safari-ios {
  @media only screen and (max-device-width: 667px) and (orientation: portrait) {
    & .mt-logo {
      bottom: auto;
      height: calc(75% - 75px);
    }

    & .mt-top,
    & .mt-bottom {
      height: 33%;
    }
  }

  @media only screen and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {
    & .mt-logo {
      height: calc(75% - 70px);
    }
  }
}

/* is-NOT-safari-ios */
/* .is-not-safari-ios {
  & .mt-logo {
    bottom: 0;
    height: 100%;
  }

  & .mt-top,
  & .mt-bottom {
    height: 25%;
  }

  & .mt-top {
    top: 25%;
  }
} */
</style>
