<template>
  <div class="container m-auto my-10 rounded-2xl">
    <h1 class="pt-10 text-center text-2xl font-bold">Изменить пароль</h1>
    <div>
      <z-input label="Введите пароль" v-model="password" class="grid w-9/12 m-auto my-5" />
      <z-input label="Введите новый пароль" v-model="newPassword" class="grid w-9/12 m-auto my-5" />
      <z-input label="Введите повторно новый пароль" v-model="RnewPassword" class="grid w-9/12 m-auto my-5" />
    </div>
    <div class="text-center">
      <p>Мы отправили вам смс с кодом</p>
      <strong>{{email}}</strong>
    </div>
    <div class="grid w-1/2 m-auto justify-center align-center">
      <input
      type="text"
      class="code rounded focus:outline-none"
      placeholder="Code"
      maxlength="4"
      v-model="PinCode"
      >
      <p
      @click="SendPinCode"
      class="text-primary-500 mt-2 cursor-pointer">Отправить код повторно</p>
      <button
      @click="UpdatePassword"
      class="bg-primary-500 hover:bg-white text-white
      hover:text-primary-500 font-semibold focus:outline-none
      py-2 px-4 border hover:border-primary-500 my-5 rounded"
      >Изменить</button>
    </div>
  </div>
</template>

<script>
import ZInput from '../components/ZInput.vue';

export default {
  components: {
    ZInput,
  },
  name: 'UpdatePassword',
  data() {
    return {
      password: null,
      newPassword: null,
      RnewPassword: null,
      email: 'mymail@mail.ru',
      PinCode: null,
    };
  },
  methods: {
    UpdatePassword() {
      alert('Updated Password');
    },
    SendPinCode() {
      alert('Send Pin Code');
    },
  },
};
</script>

<style scoped>
.container{
  width: 45rem;
  box-shadow: 0 0 10px gray;
}
.code{
  text-align: center;
  margin-top: 20px;
  border: 2px solid lightgray;
  padding: 5px 0;
}
</style>
