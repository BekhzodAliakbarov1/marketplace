<template>
  <select class="w-40 w-9/12" name="currency">
    <option class="w-full">empty</option>
    <option v-for="(option) in options" :key="option.id" class="w-full">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
import VueTypes from 'vue-types';

export default {
  name: 'ZCurrency',
  props: {
    options: VueTypes.arrayOf(VueTypes.object).isRequired,
  },
};
</script>

<style scoped>

</style>
