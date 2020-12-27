<template>
  <q-page class="column justify-center">
    <z-login-form @submit="onLogin" />
  </q-page>
</template>

<script>
import VueTypes from 'vue-types';
import ZLoginForm from '@/components/ZLoginForm';

export default {
  name: 'LoginPage',
  components: {
    ZLoginForm,
  },
  props: {
    redirectTo: VueTypes.oneOfType([VueTypes.string, VueTypes.object]).def({ name: 'home' }),
  },
  methods: {
    async onLogin(credentials) {
      try {
        await this.$store.dispatch('auth/login', credentials);
        console.log('TRY');
        await this.$router.replace(this.redirectTo);
        console.log('after routing');
      } catch (e) {
        console.log('CATCH');
        this.$q.notify({ message: 'Email или пароль введен неверно', type: 'negative', position: 'top' });
      }
    },
  },
};
</script>
