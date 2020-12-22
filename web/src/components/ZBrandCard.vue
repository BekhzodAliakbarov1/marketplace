<template>
  <router-link
    class="brand-card"
    tag="div"
    :to="{ name: 'brands', params: { 'id': brand.id} }"
  >
    <img :src="`images${brand.logo}`" :alt="brand.description">
  </router-link>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'ZBrandCard',
  props: {
    brand: VueTypes.object.isRequired,
  },
};
</script>

<style scoped>
  .brand-card {
    width: 10rem;
    margin: 10px;
    box-shadow: 0 0 10px 1px #ccc;
    border-radius: .4rem;
  }
</style>
