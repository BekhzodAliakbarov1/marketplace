<template>
  <div class="md:container mx-auto">
    <div class="ml-3">
      <z-product-detail/>
      <z-home-nav />
    </div>
    <div class="w-11/12 h-48 mb-5">
      <z-shop-product-dump
        v-for="(item, index) in catalogs"
        :key="index"
        :catalog="catalogs"
        :item="item"
        :product-image="productImage"
        :seller="item.seller"
        :description="item.name"
        :price="item.price"
        :oldrice="item.oldPrice"
      />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import ZProductDetail from '@/components/ZProductDetail';
import ZShopProductDump from '@/components/ZShopProduct_Dump';
import ZHomeNav from '@/components/ZHomeNav.vue';
import PriceApi from '@common/services/PriceApi';
import api from '@common/api';
import { map, filter, find, uniqBy } from 'lodash-es';
import SalesCountApi from '@common/services/SalesCountApi';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductPage',
  components: {
    ZProductDetail,
    ZShopProductDump,
    ZHomeNav,
  },
  props: {
    productId: VueTypes.number.isRequired,
  },
  // data() {
  //   return {
  //     categories: [
  //       {
  //         name: 'Clothes',
  //         items: ['Versachi', 'Gucci', 'VsCode', 'DiG', 'Puma'],
  //         id: 1,
  //       },
  //       {
  //         name: 'Electronic',
  //         items: ['Versachi', 'Gucci', 'VsCode', 'DiG', 'Puma'],
  //         id: 2,
  //       },
  //       {
  //         name: 'For Home',
  //         items: ['Versachi', 'Gucci', 'VsCode', 'DiG', 'Puma'],
  //         id: 3,
  //       },
  //       {
  //         name: 'Ethernet',
  //         items: ['Versachi', 'Gucci', 'VsCode', 'DiG', 'Puma'],
  //         id: 4,
  //       },
  //       {
  //         name: 'Technique',
  //         items: ['Versachi', 'Gucci', 'VsCode', 'DiG', 'Puma'],
  //         id: 5,
  //       },
  //     ],
  //     productImage: 'https://mediapark.uz/upload/file/mp/brands/xaomilogo.jpg',
  //     description: {
  //       title: 'Смартфон Xiaomi Redmi Note 9 4/128GB, Чёрный',
  //       body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eveniet laboriosam soluta',
  //     },
  //     seller: {
  //       logo: 'https://mediapark.uz/upload/file/mp/brands/xaomilogo.jpg',
  //       reviewsCount: 22,
  //       questionCount: 12,
  //     },
  //     price: {
  //       value: '7 400 000 UZS',
  //       old: '8 800 000 UZS',
  //     },
  //     buyInfo: [],
  //   };
  // },
  async created() {
    // start: Mirfozil Makhmudov
    const { data: catalogs } = await api.all('catalog', {
      include: [
        'seller',
        'element',
        'element.options',
        'element.product',
      ],
    });
    this.catalogs = catalogs;
    console.log(catalogs);
  },
  asyncComputed: {
    // // start|AxrorbekNisonboyev|2020-10-29
    async product() {
      const { data: product } = await api.one('product', 10, {
        include: [
          'brand',
          'options',
          'options.type',
        ],
      });
      return {
        ...product,
        minPrice: (await PriceApi.cheapestCatalog({ product: product.id })).price,
        maxPrice: (await PriceApi.priciestCatalog({ product: product.id })).price,
      };
    },

    async catalogs() {
      const { data: catalogs } = await api.all('catalog', {
        include: [
          'seller',
          'element',
          'element.options',
          'element.product',
        ],
      });

      return filter(catalogs, ['element.product.id', this.productId]);
    },

    async salesCount() {
      return SalesCountApi.product({ id: this.productId });
    },
  },
  computed: {
    optionTypes() {
      if (!this.$asyncComputed.product.success) {
        return [];
      }

      const { options } = this.product;
      const optionTypes = uniqBy(map(options, 'type'), 'id');

      return optionTypes.map((optionType) => ({
        ...optionType,
        options: filter(options, ['type.id', optionType.id]),
      }));
    },

    filteredCatalogs() {
      const selectedOptionEntries = Object.entries(this.selectedOptions);

      return this.catalogs.filter(({ element }) => (
        selectedOptionEntries.every(([type, options]) => {
          if (options.length === 0) {
            return true;
          }

          const elementOption = find(element.options, ['type', Number(type)]);
          return options.includes(elementOption.id);
        })
      ));
    },

    isLoading() {
      return this.$asyncComputed.product.updating
        || this.$asyncComputed.catalogs.updating
        || this.$asyncComputed.salesCount.updating;
    },

    ...mapGetters({
      isInCart: 'cart/hasItem',
      isWished: 'wishlist/hasItem',
      isCompared: 'compare/hasItem',
    }),
  },
};
</script>
