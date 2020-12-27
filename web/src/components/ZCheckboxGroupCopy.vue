<template>
  <!--start: Aziz Rozmetov 10/25/2020 -->
  <ui-list :items="value" :gap="4" class="items-baseline">
    <template #item="{ value: item }">
      <z-checkbox-copy
        :value="item.value"
        :label="item.label"
        :size="size"
        :color="color"
        @input="onToggle(item.id, $event)"
      />
      <br>
    </template>
  </ui-list>
  <!--end: Aziz Rozmetov  10/25/2020-->
</template>

<script>
// start: Aziz Rozmetov  10/25/2020
import VueTypes from 'vue-types';
import ZCheckboxCopy, { SIZES, COLORS, DEFAULT_SIZE, DEFAULT_COLOR } from './ZCheckboxCopy';

export default {
  name: 'ZCheckboxGroupCopy',
  components: {
    ZCheckboxCopy,
  },
  props: {
    value: VueTypes.arrayOf(VueTypes.shape({
      id: VueTypes.oneOfType([VueTypes.string, VueTypes.number]).isRequired,
      value: VueTypes.bool.isRequired,
      label: VueTypes.string.isRequired,
    }).loose).isRequired,

    color: VueTypes.oneOf(COLORS).def(DEFAULT_COLOR),
    size: VueTypes.oneOf(SIZES).def(DEFAULT_SIZE),
  },

  methods: {
    checked() {
    },
    onToggle(itemId, value) {
      this.$emit('input', this.value.map((item) => {
        if (item.id !== itemId) {
          return item;
        }

        return { ...item, value };
      }));
    },
  },
};
// end: Aziz Rozmetov  10/25/2020
</script>
