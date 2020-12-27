<template>
  <ui-card class="p-4.5 bg-gray-400">
    <template v-slot:section>
      <div class="flex justify-between w-full">
        <div class="w-1/4">
          <img :src="`/images/${seller.logo}`">
        </div>
        <div class="w-3/4">
          <p class="seller-name">
            {{ seller.name }}
          </p>
          <div class="description md:text-xs">
            {{ seller.text }}
          </div>
        </div>
      </div>
      <div class="flex w-full h-auto mt-4">
        <div class="w-3/4 flex justify-start">
          <img src="images/Rectangle 452 (1).png">
        </div>
        <div class="w-1/4 flex flex-col justify-between">
          <img src="images/Rectangle%20454%20(1).png">
          <img src="images/Rectangle%20453%20(1).png">
        </div>
      </div>
    </template>
  </ui-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'ZSellerCard',
  props: {
    seller: VueTypes.object.isRequired,
  },
};
</script>
