<template>
  <p>Brand Page {{ brandId }}</p>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BrandPage',
  props: {
    brandId: VueTypes.integer,
  },
};
</script>

<style scoped>

</style>
