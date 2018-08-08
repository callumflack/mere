<template lang="pug">
  .b-py3
    .Container.Container--xl
      .FlexGrid
        .w-1x3
          h1.Account-title.c-text 
            | Frequently
            br 
            | Asked Questions
        .w-2x3
          toggle-item(
            v-for="item in faqs"
            :key="item.title"
            :item="item"
          )
</template>

<script>
import ToggleItem from "~/components/ToggleItem";

export default {
  components: {
    ToggleItem
  },
  data() {
    return {
      faqs: [
        {
          title: "Skin care concerns",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Product and ingredient information",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Mere practices",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Online account enquiries",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Professional enquiries",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Website and navigation enquiries",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        },
        {
          title: "Press enquiries",
          info:
            "<p>We understand that many women seek alternatives to botanically rich products during pregnancy; however, to our knowledge there is no risk associated with using any Mere formulation in the manner we prescribe during pregnancy.</p><p>Mere is committed to providing accurate information, however, this information is not intended to replace advice from your qualified medical practitioner.</p><p>We recommend that you speak with your obstetrician or dermatologist should you have any concerns regarding your particular circumstances.</p>"
        }
      ]
    };
  },
  computed: {},
  head() {
    return {
      title: "FAQs"
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";
</style>
