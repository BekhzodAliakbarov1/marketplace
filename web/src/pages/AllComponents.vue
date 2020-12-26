<template>
  <div class="md:container mx-auto">
    <div class="ml-3">
        <z-product-detail />
    </div>
    <div class="grid grid-cols-3 gap-4">
        <z-seller-card />
    </div>
    <div class="w-1/3">
      <z-best-offers items="items" offer-title="Лучшие предложения" />
    </div>
    <div>
        <z-accordion />
        <z-accordion-list />
        <z-all-magazine />
        <z-all-magazine-block />

    </div>

  </div>
</template>

<script>
import VueTypes from 'vue-types';
import ZSellerCard from '@/components/ZSellerCard';
import ZBestOffers from '@/components/ZBestOffers';
import ZProductDetail from '@/components/ZProductDetail';
import ZAccordion from '../components/ZAccordion.vue';
import ZAllMagazine from '../components/ZAllMagazine.vue';

export default {
  name: 'AllComponents',
  components: {
    ZSellerCard,
    ZBestOffers,
    ZProductDetail,
    ZAccordion,
    ZAllMagazine,
  },
  props: {
    productId: VueTypes.number.isRequired,
  },
};
</script>
