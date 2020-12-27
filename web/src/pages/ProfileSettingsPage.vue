<template>
  <div class="container my-10 m-auto rounded-2xl flex overflow-hidden">
    <div class="w-1/2 relative">
    <div class="img">
        <input type="file" accept="image/*"  id="file" @change="readUrl" hidden>
          <label v-if="show === true" id="upload" for="file">
              <div class="upload bg-primary-400 text-2xl flex justify-center items-center text-white">
                <i class="fas fa-plus"></i>
              </div>
            </label>
          <img v-else :src="imgUrl" id="avatar">
      </div>
      <div class="setting container grid justify-center">
        <h1 class="text-2xl font-bold text-center pt-10">Профиль</h1>
        <div class="py-10">
          <z-input label="Профиль" class="grid my-4" disabled :value="name" />
          <z-input label="Электронная почта" class="grid my-4" disabled :value="email" />
          <z-input label="Телефон номер" class="grid my-4" disabled :value="phone" />
          <z-input label="Ваш город" class="grid my-4" disabled :value="country" />
          <z-input label="Почтовий индекс" class="grid my-4" disabled :value="index" />
        </div>
      </div>
    </div>
    <div class="setting w-1/2 grid justify-center">
    <h1 class="text-2xl font-bold text-center pt-10">Настройка</h1>
    <div class="m-auto py-10 grid">
      <div class="flex justify-between text-lg py-2">
        <p>Уведомления по эл.почте</p><z-toggle-btn v-model="notificationEmail" />
        </div>
      <div class="flex justify-between text-lg py-2">
        <p>Уведомления по телефон номер</p><z-toggle-btn v-model="notificationPhone" />
        </div>
      <p class="texy-lg py-2">Настройки безопасности:</p>
      <div class="flex flex-wrap gap-2">
        <a
        href="#"
        class="bg-white
        font-semibold focus:outline-none
        py-2 px-4 border hover:border-primary-500 rounded"
        >Сменить пароль</a>
        <a
        href="#"
        class="bg-white
        font-semibold focus:outline-none
        py-2 px-4 border hover:border-primary-500 rounded"
        >Задать вопрос безопасности</a>
        <a
        href="#"
        class="bg-white
        font-semibold focus:outline-none
        py-2 px-4 border hover:border-primary-500 rounded"
        >Email Verification</a>
      </div>
      <button
      class="bg-primary-500 hover:bg-white text-white
      hover:text-primary-500 font-semibold mt-20 justify-self-end focus:outline-none
      py-2 px-4 border hover:border-primary-500 rounded"
      >Сохранить</button>
    </div>
    </div>
  </div>
</template>

<script>
import ZInput from '@/components/ZInput';
import ZToggleBtn from '../components/ZToggleBtn.vue';

export default {
  name: 'settings',
  components: {
    ZInput,
    ZToggleBtn,
  },
  data() {
    return {
      name: 'Ogabek',
      email: 'Ogabek@gmail.com',
      phone: '998901234567',
      country: 'Samarkand',
      index: '102020',
      imgUrl: '',
      notificationEmail: false,
      notificationPhone: false,
      show: true,
    };
  },
  methods: {
    readUrl(e) {
      const reader = new FileReader();
      if (e.target.files[0] && e.target.files) {
        reader.onload = this.upload;
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    upload(e) {
      this.imgUrl = e.target.result;
      this.show = false;
    },
  },
};
</script>

<style scoped>
#avatar{
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}
.container{
  box-shadow: 0 0 10px gray;
}
.upload{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.img{
  position: absolute;
  top: 20px;
  left: 20px;
}
.setting{
  grid-template-columns: 500px;
}
</style>
