<template lang="pug">
  //- cart close page & subnav
  .u-relative
    button.ClosePage(@click="handleCartClose2")
      icon-base.c-brand.p-a3.p-sm-a5(icon-name="icon-close", height="48", width="48")
        icon-close
  .b-py2
    .Nav.f.f-justifyBetween
      .Nav-item.f.f-col(v-for="(item) in CartNav" :key="item.label")
        .Heading.fw-medium.fs-text-sm.c-brand.p-b2 {{ item.label }}
        //- .Nav-item-index.f.f-childrenCenter.m-aA(:class="[{'is-active': isCartSummaryVisible}]")
        .Nav-item-index.f.f-childrenCenter.m-aA
          icon-base.c-neutral(icon-name="icon-tick", height="20", width="20")
            icon-tick

  //- cart promo: first child in cart footer
  .Cart-promo
    form
      .form-entry
        input(type="text" id="promo-code" placeholder="Enter promo code")
        label(for="promo-code") Enter promo code

  //- cart promo above checkout button
  .Text.fs-text-sm.c-brand.p-b3 Your discount of $37.50 has been applied

  //- product 3 columns
  .Container.Container--su.b-pb3
      .FlexGrid.mo-FlexGrid--block
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              p.c-brand.u-textCenter.m-b3 ${{node.variants.edges[0].node.price}} AUD
              p.c-brand.u-textCenter {{ node.description }}
              .u-textCenter.m-t4
                p.c-brand.m-b3
                  a.LinkUnderline(@click="handleToggle") 
                    span(v-if="isVisible") Show 
                    span(v-if="!isVisible") Hide 
                    span all ingredients
                p.fs-text-sm.c-brand.u-textCenter.toggle(:class="{ 'is-hidden': isVisible }") {{ ingredients }}

        .w-5x6.w-sm-1x3.m-mo-xA.p-mo-b5
          .Tabs
            input(id="tab-one" type="radio" name="grp" checked="checked")
            label(for="tab-one") #[img(:src="node.images.edges[0].node.originalSrc")]
            .Tab-content #[img(:src="node.images.edges[0].node.originalSrc")]
            
            input(id="tab-two" type="radio" name="grp" checked="checked")
            label(for="tab-two") #[img(:src="node.images.edges[1].node.originalSrc")]
            .Tab-content #[img(:src="node.images.edges[1].node.originalSrc")]

            input(id="tab-three" type="radio" name="grp" checked="checked")
            label(for="tab-three") #[img(:src="node.images.edges[2].node.originalSrc")]
            .Tab-content #[img(:src="node.images.edges[2].node.originalSrc")]
        .w-sm-1x3
          .f-childrenCenter
            .w-100
              .Product-add.w-sm-3x4.m-xA.m-b4
                .Button.Button--outline.Button--stateless.f.f-justifyBetween.p-x0.m-b3
                  button.Button.Button--transparent.w-1x3(v-on:click="addToCart") +
                  span.u-textCenter.w-1x3 {{ cart }}
                  button.Button.Button--transparent.w-1x3(v-on:click="removeFromCart") -
                button.Button.u-block.w-100 add to cart
              .w-sm-3x4.m-xA
                p.c-brand.u-textCenter 
                  | Free shipping on orders over $89
                p.c-brand.u-textCenter.fs-text-sm
                  | Add more than $49 worth of MERE to your bag and receive free shipping on the order

  .Product.w-sm-1x2.w-lg-1x3(
        v-for="product in shop.products.edges" 
        :key="product.node.id.toString()"
        :product="product.node"
      )
        //- .f
          .w-1x2 {{ count }}
          .w-1x2
            button.Button(@click="increment") Click here
        //- div(@click="addToProductPage(product, index)")
        //- on nuxt-link, use @click.native: https://github.com/nuxt/nuxt.js/issues/1786
        //- nuxt-link(:to="`/shop/${product.node.handle}`")
        //- nuxt-link(:to="`/shop/${product.node.handle}`" @click.native="addToProductPage(product, index)")
        nuxt-link(to="/shop/id")
          .Product-heading
            h5.Heading.fs-text-sm.u-textCenter.m-b3 phytosphere data?
            h2.Product-title.fs-text-lg.u-textCenter {{ product.title }}
          .Product-image
            img(:src="product.images.edges[0].node.src" alt="`${product.title}` product picture")
          .Product-button.Heading.u-textCenter.c-brand.u-noVisualLink 
            | ${{ product.price }} AUD
            span.Product-title.fs-text.u-block.m-t2.m-b0 Buy Now
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.id}`" class='link'>
        <div class='placeholder'>
          <img :alt="post.title" :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`" />
        </div>
        <h3>{{post.title}}</h3>
      </router-link>
    </li>
  </ul>
</template>

<script>
  apollo: {
    posts: {
      query: POSTS_QUERY,
        variables: {
        skip: 0,
        first: POSTS_PER_PAGE
      }
    },
  }

  // cart subnav array
  CartNav: [
        {
          label: "cart"
        },
        {
          label: "billing"
        },
        {
          label: "delivery"
        },
        {
          label: "shipping"
        },
        {
          label: "payment"
        },
        {
          label: "confirm"
        }
      ]
</script>