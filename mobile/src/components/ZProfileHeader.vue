<template>
  <div class="flex q-mb-lg">
    <q-avatar v-if="user.avatar" class="flex self-center avatar" size="80px">
      <img
        :src="user.avatar || 'images/no-image'"
        class="avatar-image"
        :alt="user.name || 'John Doe'"
      >
    </q-avatar>
    <q-avatar v-else color="primary" size="80px" text-color="white">
      {{ 'AB' }}
    </q-avatar>
    <div class="user-info q-px-md text-left">
      <p class="text-caption text-grey-7">
        ID: {{ user.id }}
      </p>
      <p class="text-h5 text-weight-medium">
        {{ user.name || 'John Doe' }}
      </p>
      <p>
        {{ user.email || 'demo@gmail.com' }}
      </p>
      <p>
        Phone: {{ user.phone }}
      </p>
    </div>
  </div>
</template>

<script>
import IdentityApi from '@common/services/IdentityApi';

export default {
  name: 'ProfileHeader',
  asyncComputed: {
    async user() {
      const userData = await IdentityApi.me();
      return userData;
    },
  },
};
</script>

<style lang="scss" scoped>
  .avatar {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25)
  }

  .avatar-image {
    border: 8px solid #ffffff;
  }

</style>
