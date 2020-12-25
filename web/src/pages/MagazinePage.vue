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
      <div class="grid grid-cols-3 gap-4 my-8">
        <z-seller-card
          v-for="seller in sellers"
          :key="seller.id"
          :seller="seller"
          class="mr-2 rounded-xl my-4"
        />
      </div>
  </ui-container>
</template>

<script>
import UiContainer from '../components/ui/layouts/UiContainer.vue';
import ZBreadCrumbs from '../components/ZBreadCrumbs.vue';
import ZCarousel from '../components/ZCarousel.vue';
import ZHashTag from '../components/ZHashTag.vue';
import ZSellerCard from '../components/ZSellerCard.vue';

export default {
  name: 'MagazinePage',
  components: {
    ZBreadCrumbs,
    UiContainer,
    ZHashTag,
    ZCarousel,
    ZSellerCard,
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
      sellers: [
        {
          id: 1,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 2,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 3,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 4,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 5,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 6,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 7,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 8,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 9,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 10,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 11,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
        },
        {
          id: 12,
          logo: 'https://www.google.com/search?q=magazine+logo&rlz=1C1GCEA_enUZ888UZ889&sxsrf=ALeKk00TFbyZG_nrsw_OPWCEW7l4HLqUkQ:1608959241261&tbm=isch&source=iu&ictx=1&fir=tHV3PBHhFCvHgM%252CjeL57-XFsREh2M%252C_&vet=1&usg=AI4_-kQmVmqqE9sshpZZl6cRfz-Cm__A3w&sa=X&ved=2ahUKEwiP4KGg8OrtAhVjwosKHZ_zDAcQ9QF6BAgEEAE#imgrc=tHV3PBHhFCvHgM',
          name: 'Market Place',
          text: 'Ecobozor &mdash; это сеть рынков нового формата, модернизированные базары, по уровню комфорта не уступающие торговым центрам. Сеть была создана для того, чтобы жители Узбекистана могли покупать только свежие и натуральные фермерские продукты по доступным ценам',
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
