<template>
  <div class="w-full">
    <ui-container>
      <z-bread-crumbs :links="links" />
      <div class="text-center">
        <b
        class="text-bold inline-block m-4 p-2 "
        :class="isActive?'text-blue-500 border-blue-500 border-b-4':'text-blue-400'"
        @click="isActive = true"
        style="font-size: 20px;"
        >
          Доставка
        </b>
        <b
        class="inline-block text-bold m-4 p-2"
        :class="isActive?'text-blue-400':'text-blue-500 border-blue-500 border-b-4'"
        @click="isActive = false"
        style="font-size: 20px;"
        >
          Самовывоз
        </b>
      </div>
    </ui-container>
    <div v-if="!isActive">
      <div class="w-full bg-gray-100 p-4">
        <ui-container class="flex flex-start">
          <div class="w-1/2 inline-block h-3/4 p-8">
            <b
            class="text-blue-500 text-bold"
            style="font-size: 24px;"
            >Самосовоз покупок</b>
            <z-checkbox-group-copy
            :value="value_1"
            class="flex flex-col mt-4 text-bold"
            style="font-size: 16px;"
            />
          </div>

          <div class="w-1/2 mt-4 inline-block mr-0">
            <img src="../assets/online_shopping_2.png">
          </div>
        </ui-container>
      </div>
      <ui-container class="mt-16 mb-16">
        <div class="w-1/2 mt-0 inline-block" style="height: 575px">
            <div class="w-full p-2 bg-blue-600">
              <z-select :options="options" class="select" />
            </div>
            <div class="full" style="height: 515px; background-color: #fff;"></div>
        </div>
        <div class="inline-block mr-0 map absolute" style="height: 575px">

        </div>
      </ui-container>
    </div>
    <div v-if="isActive">
      <div class="w-full bg-gray-100 p-4">
        <ui-container class="flex flex-start">
          <div class="w-1/2 inline-block h-3/4 p-8">
            <b
            class="text-blue-500 text-bold"
            style="font-size: 24px;"
            >Доставка по всему Узбекистану</b>
            <z-checkbox-group-copy
            :value="value_2"
            class="flex flex-col mt-4 text-bold"
            style="font-size: 16px;"
            />
          </div>

          <div class="w-1/2 mt-4 inline-block mr-0">
            <img src="../assets/order_confirmed_2.png">
          </div>
        </ui-container>
      </div>
      <ui-container class="mt-16 mb-16 grid grid-cols-3 my-8">
        <div class="m-8 text-center">
          <b
          class="text-blue-500 text-bold"
          style="font-size: 24px;"
          >
          По всей стране
          </b>
          <p class="paragraph">
            Delivery by region is carried out by O'zbekiston Pochtasi, Fargo Express
            and BTS Express, which do not work on the red days of the calendar.
          </p>
          <div class="grid grid-cols-4 my-2">
            <div class="p-1">
              <img src="/images/logo-visa.svg">
            </div>
            <div class="p-1">
              <img src="/images/logo-uzcard.svg">
            </div>
            <div class="p-1">
              <img src="/images/logo-payme.svg">
            </div>
            <div class="p-1">
              <img src="/images/logo-click.svg">
            </div>
          </div>
        </div>
        <div class="m-8 text-center">
          <b
          class="text-blue-500 text-bold"
          style="font-size: 24px;"
          >Возврат товара</b>
          <p class="paragraph">
            You can return your product if there is a problem with its quality or
             the size of the item was not appropriate. For detailed information read
              <a href="#" class="text-blue-500"> Return </a> page
          </p>
          <div class="my-2 flex items-center grid justify-items-center grid-cols-2 space-x-4">
            <svg
            width="64"
            height="55"
            viewBox="0 0 64 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.2105 43.3331L30.3157 33.5331C29.0021 33.3998 28.0252 33.3331
              26.9473 33.3331C17.9537 33.3331 0 37.7998 0 46.6664V53.333H30.3157L20.2105 43.3331ZM26.9473
               26.6665C34.3915 26.6665 40.421 20.6999 40.421 13.3332C40.421 5.96663 34.3915
               0 26.9473 0C19.5031 0 13.4737 5.96663 13.4737 13.3332C13.4737
               20.6999 19.5031 26.6665 26.9473 26.6665Z"
               fill="#666666"/>
              <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M42.0048 55.0005L30.3164 43.3339L35.0322 38.6339L42.0048 45.5672L59.2848
              28.334L64.0006 33.034L42.0048 55.0005Z"
              fill="#666666"/>
            </svg>
            <svg width="64" height="45" viewBox="0 0 64 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M55.2727 11.25H46.5455V0H5.81818C2.61818 0 0 2.53125 0 5.625V36.5625H5.81818C5.81818 41.2312 9.71636
              45 14.5455 45C19.3745 45 23.2727 41.2312 23.2727
              36.5625H40.7273C40.7273 41.2312 44.6255 45 49.4545 45C54.2836
              45 58.1818 41.2312 58.1818 36.5625H64V22.5L55.2727
              11.25ZM14.5455 40.7812C12.1309 40.7812 10.1818 38.8969 10.1818
              36.5625C10.1818 34.2281 12.1309 32.3438 14.5455 32.3438C16.96
              32.3438 18.9091 34.2281 18.9091 36.5625C18.9091 38.8969 16.96 40.7812 14.5455
              40.7812ZM53.8182 15.4688L59.52 22.5H46.5455V15.4688H53.8182ZM49.4545 40.7812C47.04 40.7812
              45.0909 38.8969 45.0909
              36.5625C45.0909 34.2281 47.04 32.3438 49.4545 32.3438C51.8691 32.3438 53.8182
              34.2281 53.8182 36.5625C53.8182 38.8969 51.8691 40.7812 49.4545 40.7812Z"
              fill="#666666"/>
            </svg>
          </div>
        </div>

        <div class="m-8 text-center">
          <b
          class="text-blue-500 text-bold"
          style="font-size: 24px;"
          >Доставка по всему Узбекистану</b>
          <p class="paragraph">
            We offer different online payment systems or you can pay in cash the day you receive your shopping items
          </p>
          <div class="my-2 flex items-center grid justify-items-center">
            <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path
              d="M21.6639 38.4694L25.9722 42.7778L41.25
              27.5L25.9722 12.2222L21.6639 16.5306L29.5472
              24.4444H0V30.5556H29.5472L21.6639
              38.4694ZM48.8889 0H6.11111C2.71944 0 0 2.75 0
              6.11111V18.3333H6.11111V6.11111H48.8889V48.8889H6.11111V36.6667H0V48.8889C0 52.25 2.71944 55
              6.11111 55H48.8889C52.25 55 55 52.25 55 48.8889V6.11111C55 2.75 52.25 0 48.8889 0Z"
              fill="#666666"/>
            </svg>
          </div>
        </div>
      </ui-container>
    </div>
  </div>
</template>

<script>
import UiContainer from '../components/ui/layouts/UiContainer.vue';
import ZBreadCrumbs from '../components/ZBreadCrumbs.vue';
import ZCheckboxGroupCopy from '../components/ZCheckboxGroupCopy.vue';
import ZSelect from '../components/ZSelect.vue';

export default {
  components: {
    UiContainer,
    ZBreadCrumbs,
    ZCheckboxGroupCopy,
    ZSelect,
  },
  data() {
    return {
      isActive: true,
      options: [
        {
          id: 1,
          name: 'Ташкент, Buyuk Ipak Yuli Каждый день с 9.00 - 18.00',
        },
        {
          id: 2,
          name: 'Ташкент, Chilonzor Каждый день с 9.00 - 18.00',
        },
        {
          id: 3,
          name: 'Бухара, Eski Shahar Каждый день с 9.00 - 18.00',
        },
        {
          id: 4,
          name: 'Самарканд, Tinchlik Каждый день с 9.00 - 18.00',
        },
        {
          id: 5,
          name: 'Навои, Alisher Navoi shox Каждый день с 9.00 - 18.00',
        },
        {
          id: 6,
          name: 'Нукус Tumaris Каждый день с 9.00 - 18.00',
        },
        {
          id: 7,
          name: 'Нукус, Turkiston Каждый день с 9.00 - 18.00',
        },
      ],
      links: [
        {
          id: 1,
          label: 'Главная',
          to: '/',
        },
        {
          id: 2,
          label: 'Доставка',
          to: '/delivery',
        },
      ],
      value_1: [
        {
          id: 1,
          value: true,
          label: 'Закажите зарание и ваша покупка будет вас ждать в магазине',
        },
        {
          id: 2,
          value: true,
          label: 'Выберите ближайший пункт вывоза удобный для вас, чтобы забрать свои покупки',
        },
        {
          id: 3,
          value: true,
          label: 'Мы оповестим вас о готовом заказе, просто подойдите и заберите свой заказ',
        },
      ],
      value_2: [
        {
          id: 1,
          value: true,
          label: 'Бесплатная доставка (от 1.000.000 uzs)',
        },
        {
          id: 2,
          value: true,
          label: 'Доставка гоборитных товаров (от 20 кг)',
        },
        {
          id: 3,
          value: true,
          label: 'Возврат товара',
        },
      ],
      size: '20px',
    };
  },
};
</script>

<style>
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
}
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgba(59, 130, 246, var(--tw-border-opacity));
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgba(59, 130, 246, var(--tw-text-opacity));
}
.mt-4 {
  margin-top: 1rem;
}
.image {
  background-image: url(../assets/order_confirmed_2.png);
  height: 400px;
  border: 8px;
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgba(37, 99, 235, var(--tw-bg-opacity));
}

.select {
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  border: none;
  font-size: 18px;
}
.map {
  background-image: url(../assets/map_1.jpg);
  background-size: cover;
  width: 35%;
}
.paragraph {
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
   'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
