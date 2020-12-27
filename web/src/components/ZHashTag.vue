<template>
  <div class="container">
    <ul class="space-x-4">
      <li
      v-for="tag in tags"
      :key="tag.id"
      class="inline-block rounded-full bg-gray-300 px-4 py-2 my-4 cursor-pointer tag">
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'ZHashTag',
  props: {
    tags: VueTypes.arrayOf(
      VueTypes.shape({
        id: VueTypes.number,
        name: VueTypes.string.isRequired,
      }),
    ).isRequired,
  },
};
</script>

<style>
.tag:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));
  color: white;
}
</style>
