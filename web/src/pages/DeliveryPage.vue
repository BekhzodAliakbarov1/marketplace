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
    <div class="w-full bg-gray-100">
      <ui-container>
        <div class="w-1/2 inline-block">
          <b
          class="text-blue-500 text-bold"
          style="font-size: 20px;"
          >Самосовоз покупок</b>
          <z-checkbox-group-copy
          :value="value"
          class="flex flex-col mt-4 text-bold"
          style="font-size: 18px;"
          />
        </div>
        <img src="../assets/order_confirmed_2.png" alt="xax" class="w-1/2 mt-4 inline-block">
      </ui-container>
    </div>
  </div>
</template>

<script>
import UiContainer from '../components/ui/layouts/UiContainer.vue';
import ZBreadCrumbs from '../components/ZBreadCrumbs.vue';
import ZCheckboxGroupCopy from '../components/ZCheckboxGroupCopy.vue';

export default {
  components: {
    UiContainer,
    ZBreadCrumbs,
    ZCheckboxGroupCopy,
  },
  data() {
    return {
      isActive: true,
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
      value: [
        {
          id: 1,
          value: true,
          label: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used',
        },
        {
          id: 2,
          value: true,
          label: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used',
        },
        {
          id: 3,
          value: true,
          label: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used',
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
</style>
