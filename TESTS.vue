<template lang="pug">
  .Product.w-sm-1x2.w-lg-1x3(
        v-for="product in shop.products.edges" 
        :key="product.node.id.toString()"
        :product="product.node"
      )
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
</script>