<template>
  <!-- //start |Doniyor Raxmonov| 2020-10-22 -->
  <div class="my-2">
    <div
      class="
          select-none bg-gray-300 cursor-pointer
          px-4 py-1 text-black text-xl
          font-normal flex items-center justify-between
        "
      @click="toggleCategory(id)"
    >
      <span>{{ label }}</span>
      <slot name="label" />
      <slot name="labelIcon" />
      <ui-icon
        :key="id === activatedCategory ? 'up' : 'down'"
        class="text-gray-600 ml-2"
        :name="id === activatedCategory ? 'angle-up' : 'angle-down'"
      />
    </div>

    <div
      class="max-h-0 overflow-hidden"
      :class="{
        'max-h-none': id === activatedCategory,
      }"
    >
      <slot name="content" />
      <div
        class="
            bg-gray-300 px-8 py-1 text-gray-800 text-sm font-normal h
          "
      >
        {{ content }}
      </div>
    </div>
  </div>
  <!-- //end |Doniyor Raxmonov | 2020-10-22-->
</template>

<script>
// start  | Doniyor Raxmonov |
import VueTypes from 'vue-types';

export default {
  name: 'ZAccardion',
  props: {
    label: VueTypes.string,
    content: VueTypes.array.isRequired,
    id: VueTypes.string.isRequired,
    activated: VueTypes.bool.def(false),
  },
  data() {
    return {
      activatedCategory: null,
    };
  },
  created() {
    if (this.activated) {
      this.activatedCategory = this.id;
      this.$emit('accordion-is-open');
    }
  },
  methods: {
    toggleCategory(categoryId) {
      const status = (!this.activatedCategory) ? 'accordion-is-open' : 'accordion-is-closed';
      this.$emit(status);
      if (categoryId === this.activatedCategory) {
        this.activatedCategory = null;
        this.isActivated = false;
        return;
      }
      this.activatedCategory = categoryId;
    },
  },
};
// end  | Doniyor Raxmonov | 2020-10-22
</script>
