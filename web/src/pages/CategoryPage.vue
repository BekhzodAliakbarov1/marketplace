<template>
  <ui-container>
    <section>
      <p>Ноутбуки, планшети</p>
      <z-carousel class="h-3/6 m-auto hiehgt-half" :slides="SliderImages" />
    </section>
    <div class="main_container">
      <div class="container_left">
        <p>категория</p>
        <z-accordion-list :content="content" class="text-sm my-4 pr-0"/>
        <div class="flex whitespace-nowrap bold font-bold my-4">
          <p class="text-blue">{{ toggleBtn.label }}</p>
          <z-toggle-btn :isEnabled="toggleBtn.value" class="mr-0" />
        </div>
        <div class="flex whitespace-nowrap bold font-bold text-2xl my-4 pr-0">
          <p class="text-black">{{ toggleBtn.label1 }}</p>
          <z-toggle-btn :isEnabled="toggleBtn.value" class="mr-0" />
        </div>
        <div class="flex whitespace-nowrap bold font-bold text-2xl my-4 pr-0">
          <p class="text-black mr-2">{{ toggleBtn.label2 }}</p>
          <z-toggle-btn :isEnabled="toggleBtn.value" class="mr-0" />
        </div>
        <p class="text-black bold text-2x1 my-4">Фильты</p>
        <z-checkbox-group-copy :value="filterValue" class="flex flex-col" />
        <p class="text-black bold text-2x1 my-4">Бренды</p>
        <z-checkbox-group-copy :value="brendValue" class="flex flex-col" />
        <a href="#" class="font-bold no-underlines" style="color: #4080FF">Посмотрет все</a>
      </div>
      <div class="container-right">
        <!-- <div class="w-full align-baseline bg-black overflow-hidden">
          <div class="ml-0 accordion">
            <z-accordion-list :content="famousAccordion" />
          </div>
          <div class="mr-0 icon">
            <i class="fa fa-list m-6" style="color: #4080FF"></i>
            <i class=" fa fa-bars m-6" style="color: #4080FF"></i>
          </div>
        </div> -->
        <!-- <hr class="w-4/5 m-auto"> -->
        <z-product-detail class="w-screen rounded-3xl m-6" />
        <z-product-detail class="w-screen rounded-3xl m-6" />
        <z-product-detail class="w-screen rounded-3xl m-6" />
        <z-product-detail class="w-screen rounded-3xl m-6" />
        <z-product-detail class="w-screen rounded-3xl m-6" />
      </div>
    </div>
  </ui-container>
</template>

<script>
import ZCarousel from '@/components/ZCarousel';
import UiContainer from '@/components/ui/layouts/UiContainer.vue';
import ZAccordionList from '@/components/ZAccordionList.vue';
import ZToggleBtn from '../components/ZToggleBtn.vue';
import ZProductDetail from '../components/ZProductDetail.vue';
import ZCheckboxGroupCopy from '../components/ZCheckboxGroupCopy.vue';

export default {
  name: 'CategoryPage',
  components: {
    ZCarousel,
    UiContainer,
    ZAccordionList,
    ZToggleBtn,
    ZProductDetail,
    ZCheckboxGroupCopy,
  },
  data() {
    return {
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
      content: [
        {
          id: 1,
          name: 'telefon va planshetlar',
          items: [
            'samsung',
            'nokia',
            'redmi',
            'iphone',
          ],
        },

      ],
      toggleBtn: {
        label: 'Супермаркет зкспрес',
        label1: 'Доступно рассрочку',
        label2: 'Со склада',
        value: true,
      },
      filterValue: [
        {
          id: 1,
          value: false,
          label: 'Бестеллери',
        },
        {
          id: 2,
          value: false,
          label: 'Бестеллери',
        },
        {
          id: 3,
          value: true,
          label: 'Бестеллери',
        },
        {
          id: 4,
          value: false,
          label: 'Бестеллери',
        },
        {
          id: 5,
          value: false,
          label: 'Бестеллери',
        },
        {
          id: 6,
          value: false,
          label: 'Бестеллери',
        },
        {
          id: 7,
          value: false,
          label: 'Бестеллери',
        },
      ],
      brendValue: [
        {
          id: 1,
          value: false,
          label: 'Apple',
        },
        {
          id: 2,
          value: false,
          label: 'Samsung',
        },
        {
          id: 3,
          value: true,
          label: 'Sony',
        },
        {
          id: 4,
          value: false,
          label: 'LG',
        },
        {
          id: 5,
          value: false,
          label: 'Xiaomi',
        },
        {
          id: 6,
          value: true,
          label: 'Asus',
        },
        {
          id: 7,
          value: false,
          label: 'Hp',
        },
        {
          id: 8,
          value: false,
          label: 'Acer',
        },
        {
          id: 9,
          value: false,
          label: 'Huawei',
        },
      ],
      famousAccordion: [
        {
          id: 1,
          name: 'Популярные',
          items: [
            'samsung',
            'nokia',
            'redmi',
            'iphone',
          ],
        },

      ],
    };
  },
};

</script>

<style scoped>
  section p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4080FF;
    margin: 1rem 0;
  }

  .hiehgt-half{
    max-height: 300px;
  }

  .main_container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .container_left {
    color: #333333;
    width: 25%;
  }

  .container_left > p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
  }

  .container_right {
    width: 75%;
  }

  .text-blue {
    color: #4080FF;
    font-size: 1.25rem;

  }

  .accordion {
    max-width: 100px;
    margin-left: 0;
  }

  .icon {
    max-width: 100px;
    margin-right: 0;
  }

</style>
