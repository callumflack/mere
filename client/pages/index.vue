<template lang="pug">
.Collage
  image-card.one.top.left(src="/images/home-girl-1.jpg")
  image-card.two.top(src="/images/home-texture-2.jpg")
  image-card.three.top.right(src="/images/home-beach.jpg")
  image-card.four.bottom.left.z-1(
    src="/images/home-texture-1.jpg"
    title="FUTURE<br>BEAUTY<br>NATURAL<br>AWOKEN"
  )
  image-card.five.bottom(src="/images/home-cactus.jpg")
  image-card.six.bottom.right(src="/images/home-girl-2.jpg")
  
  .u-absolutePin.u-hidden.f-lg.f-childrenCenter.vh-100
    // span.u-icon.u-icon--logo.c-white.z-1000
    logo.c-white.z-1000
</template>

<script>
import Logo from "~/components/Logo2.vue";
import ImageCard from "~/components/ImageCard.vue";

export default {
  components: {
    Logo,
    ImageCard
  }
};
</script>

<style lang="postcss">
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
  height: calc(100vh - var(--menuHeight));
  position: relative;
  width: 100vw;
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
  height: 65%;
  width: 62%;

  & >>> img {
    left: -10%;
  }

  @media (--sm) {
    height: 60%;
  }
}
.two {
  height: 43%;
  left: 62%;
  width: 38%;

  @media (--sm) {
    width: 19%;
  }
}
.three {
  display: none;
  height: 43%;
  width: 19%;

  @media (--sm) {
    display: block;
  }
}
.four {
  height: 45%;
  display: none;
  width: 26%;

  @media (--sm) {
    display: block;
  }
}
.five {
  height: 35%;
  width: 55%;

  @media (--sm) {
    height: 40%;
    left: 26%;
    width: calc(100% * 1 / 3);
  }
}
.six {
  height: 57%;
  width: 45%;

  @media (--sm) {
    height: 57%;
    width: calc(100% - (100% * 1 / 3) - 26%);
  }
}
</style>