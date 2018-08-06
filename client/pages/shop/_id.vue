<template lang="pug">
// Mismatching childNodes vs. VNodes
// https://github.com/nuxt/nuxt.js/issues/1594
no-ssr
  .u-relative
    nuxt-link.ClosePage(to="/shop")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
    .b-py2.p-msm-b3
      .Container.Container--text
        h3.Heading.Heading--md.m-b3 {{ post.category }}
        h1.Product-title {{ post.title }}
      
    .Container.Container--hero.b-pb2
      .FlexGrid
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              p.c-brand.u-textCenter.m-b3 $69.95
              p.c-brand.u-textCenter(v-html="post.content.brief")
        .w-sm-1x3
          figure
              img(src="/images/products-super-natural-dermal-serum-vaccine-bottle.png")
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              .Product-add.w-sm-3x4.m-xA.m-b4
                button.Button.c-brand.u-block.w-100.m-b3 1
                button.Button.c-brand.u-block.w-100 add to cart
              .w-sm-3x4.m-xA.m-b4
                p.c-brand.u-textCenter 
                  | Free shipping on orders over $89
                p.c-brand.u-textCenter.Text--sm
                  | Add more than $49 worth of MERE to your bag and receive free shipping on the order
    
    // floaty shit
    .Container.Container--super
      .FlexGrid--lg
        .w-sm-1x2.one
          .Card.p-sm-l7.p-sm-b5
            figure.Card-image
              img(src="/images/home-cactus.jpg")
            .Card-block.bg-pale-green
              | Ingredients
              br
              | ---
              br
              | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
        .w-sm-1x2.two
          .Card.p-sm-t5
            figure.Card-image
              img(src="/images/home-girl-1.jpg")

        .w-sm-1x3.three
          .Card
            figure.Card-image
              img(src="/images/home-beach.jpg")
        .w-sm-1x3.four
          .f-childrenCenter(style="height:66%")
            .Card.p-sm-t5
              .Card-block
                | Customer insights
                .Product-title.Product-title--card.m-b0 Emma Rose-Lapthorn
                | Lorem Ipsum Magazine
                .Product-title.Product-title--card
                  | “Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te facilisi”
        .w-sm-1x3.five
          .Card
            .Card-block.p-sm-t4.p-sm-b5
              | Our Active Footprint
              br
              | ---
              br
              | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet oreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequa 
            .w-sm-3x4.m-xA
              figure.Card-image
                img(src="/images/product-card-swimming-woman.jpg")
              .Card-block.bg-pale-purple
                | The Formula
                br
                | ---
                br
                | Prickly pear lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. 
        
        .w-sm-9x12.six
          .Card.p-sm-l6.p-sm-r5
            figure.Card-image
              img(src="/images/product-card-blue-texture.jpg")
        .w-sm-3x12.u-hidden.u-sm-block
          .u-hiddenVisually yo!

</template>

<script>
import IconBase from "~/components/IconBase";
import IconClose from "~/components/icons/IconClose";
import { postsRepository } from "~/shared/repositories";

export default {
  name: "id",
  components: {
    IconBase,
    IconClose
  },
  async asyncData({ params, error }) {
    const { id } = params;
    const post = await postsRepository
      .get({ id })
      .catch(e => error({ statusCode: 404, message: "Post not found" }));

    return { post };
  },
  head() {
    return {
      title: `Post: ${this.post.title}`
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../../assets/styles/variables.css";

.ClosePage {
  position: fixed;
  top: var(--s-5);
  right: 0;
  z-index: 1;
}

.Card {
  position: relative;
}

.Card-block {
  color: var(--c-pale-text);
  padding: var(--s-3b) var(--s-4);
  text-align: center;
}

/* comp utils */

/* .one { 
  order: 1;
}
.two { 
  order: 2; 
}
.three { 
  order: 4;
  @media (--sm) {
    order: 3;
  }
}
.four { 
  order: 3; 
  @media (--sm) {
    order: 4;
  }
}
.five { 
  order: 5; 
}
.six { 
  order: 6; 
} */

.six .Card {
  @media(--md) {
    transform:translateY(-7vh);
  }
}

.c-pale-text {
  color: var(--c-pale-text);
}
.bg-pale-green {
  background-color: var(--c-pale-green);
}
.bg-pale-purple {
  background-color: var(--c-pale-purple);
}
</style>
