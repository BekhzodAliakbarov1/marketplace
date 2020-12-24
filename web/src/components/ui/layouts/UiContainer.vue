<template>
  <component :is="tag" class="container mx-auto">
    <slot />
  </component>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'UiContainer',
  props: {
    tag: VueTypes.string.def('div'),
  },
};
</script>
