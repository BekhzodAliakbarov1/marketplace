<template>
  <ui-container>
      <z-bread-crumbs :links="links" />
      <p
      class="inline-block"
      style="font-size: 1.5rem;
      font-weight: bold;
      color: #4080FF;
      margin: 1rem 0;">Все Магазины</p> <small class="inline-block mx-2 text-gray-500">421 Магазинов</small>
      <z-hash-tag :tags="tags" />
      <z-carousel
      :slides="SliderImages"
      class="hiehgt-half my-2"
      />
  </ui-container>
</template>

<script>
import UiContainer from '../components/ui/layouts/UiContainer.vue';
import ZBreadCrumbs from '../components/ZBreadCrumbs.vue';
import ZCarousel from '../components/ZCarousel.vue';
import ZHashTag from '../components/ZHashTag.vue';

export default {
  name: 'MagazinePage',
  components: {
    ZBreadCrumbs,
    UiContainer,
    ZHashTag,
    ZCarousel,
  },
  data() {
    return {
      links: [
        {
          id: 1,
          label: 'Главная',
          to: '/',
        },
        {
          id: 2,
          label: 'Магазины',
          to: '/magazine',
        },
      ],
      tags: [
        {
          id: 1,
          name: 'elektronika',
        },
        {
          id: 2,
          name: 'elektronika',
        },
        {
          id: 3,
          name: 'elektronika',
        },
        {
          id: 4,
          name: 'elektronika',
        },
      ],

      SliderImages: [
        {
          id: 1,
          src: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
          alt: '',
        },
        {
          id: 2,
          src: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
          alt: '',
        },
        {
          id: 3,
          src: 'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
          alt: '',
        },
      ],
    };
  },
};
</script>
<style scoped>
.hiehgt-half{
  max-height: 400px;
}
</style>
