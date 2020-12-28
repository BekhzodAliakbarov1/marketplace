<template>
  <div class="container m-auto">
      <div class="m-auto my-10 flex items-center justify-center">
          <div class="mx-4">
              <div class="count font-bold bg-primary-600 text-2xl text-white text-center">1</div>
              <p>Проверка</p>
          </div>
          <hr>
          <div>
              <div class="count font-bold bg-primary-600 text-2xl text-white text-center">2</div>
              <p>Установить секретный</p>
          </div>
          <hr>
          <div class="mx-4">
              <div class="count font-bold bg-primary-600 text-2xl text-white text-center">3</div>
              <p>Завершить</p>
          </div>
      </div>
      <div v-if="step1" class="question rounded-2xl">
        <h1 class="text-2xl font-bold text-center py-10">Установить секретный вопрос</h1>
        <div class="flex items-center w-10/12 m-auto text-gray-600">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Вопрос безопасности является важным шагом аутентификации, устанавливайте внимательно!</p>
        </div>
        <div class="my-5 grid justify-center grid-cols-1">
          <div class="grid w-3/5 m-auto">
            <label class="py-2">Вопрос 1</label>
            <select v-model="question1" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
              <option disabled selected>Пожалуйста, выберите</option>
              <option value="What is your name?">
              What is your name?
              </option>
            </select>
            <label class="py-2">Ответить</label>
            <input type="text" v-model="answer1" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
          </div>
          <div class="grid w-3/5 m-auto">
            <label class="py-2">Вопрос 2</label>
            <select v-model="question2" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
              <option disabled selected>Пожалуйста, выберите</option>
              <option
              value="What is your name?"
              >What is your name?</option>
            </select>
            <label class="py-2">Ответить</label>
            <input v-model="answer2" type="text" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
          </div>
          <div class="grid w-3/5 m-auto">
            <label class="py-2">Вопрос 3</label>
            <select v-model="question3" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
              <option disabled selected>Пожалуйста, выберите</option>
              <option
              value="What is your name?"
              >What is your name?</option>
            </select>
            <label class="py-2">Ответить</label>
            <input v-model="answer3" type="text" class="bg-gray-200 py-2 px-4 rounded focus:outline-none">
          </div>
          <button
          @click="firstPage"
      class="bg-primary-500 hover:bg-white text-white
      hover:text-primary-500 font-semibold my-10 w-64 m-auto focus:outline-none
      py-2 px-4 border hover:border-primary-500 rounded">Запросить</button>
        </div>
      </div>
      <div v-if="step2" class="question rounded-2xl">
        <h1 class="text-2xl font-bold text-center py-10">Установить секретный вопрос</h1>
        <div class="flex items-center w-10/12 m-auto text-gray-600">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Секретный вопрос - это важный шаг аутентификации, пожалуйста, подтвердите!</p>
        </div>
        <div class="grid justify-center grid-cols-1 mt-4 m-auto">
          <div
          class="flex rounded justify-between border-2 w-9/12
          px-8 py-2 border-gray-500 m-auto my-1 px-5"
          >
            <p>{{question1}}</p>
            <p>{{answer1}}</p>
          </div>
          <div
          class="flex rounded justify-between border-2 w-9/12
          px-8 py-2 border-gray-500 m-auto my-1 px-5"
          >
            <p>{{question2}}</p>
            <p>{{answer2}}</p>
          </div>
          <div
          class="flex rounded justify-between border-2 w-9/12
          px-8 py-2 border-gray-500 m-auto my-1 px-5"
          >
            <p>{{question3}}</p>
            <p>{{answer3}}</p>
          </div>
          <button
          @click="nextPage"
      class="bg-primary-500 hover:bg-white text-white
      hover:text-primary-500 font-semibold mt-10 mb-2 w-64 m-auto focus:outline-none
      py-2 px-4 border hover:border-primary-500 rounded">Запросить</button>
        </div>
        <p
        @click="()=>{step1 = true; step2 = false;}"
        class="text-primary-600 pb-5 mb-5 cursor-pointer text-center">Вернуться назад, чтобы изменить</p>
      </div>
      <div v-if="step3" class="pincode rounded-2xl">
        <div class="text-center">
          <p class="text-xl pt-5">Мы отправили вам смс с кодом</p>
          <strong>{{email}}</strong>
        </div>
        <div  class="grid m-auto justify-center text-center">
          <strong class="py-8">Введите код</strong>
          <input
          type="text"
          class="focus:outline-none text-center
          py-2 bg-gray-200 rounded w-32 m-auto tracking-widest"
          maxlength="6">
          <p v-if="count >= 1">Отправить код повторно через {{count}} сек.</p>
          <p
          v-if="count <= 0"
        class="text-primary-600 cursor-pointer text-center">Отправить код повторно</p>
          <button
      class="bg-primary-500 hover:bg-white text-white
      hover:text-primary-500 font-semibold mt-10 mb-5 w-64 m-auto focus:outline-none
      py-2 px-4 border hover:border-primary-500 rounded">Запросить</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Secret',
  data() {
    return {
      question1: null,
      question2: null,
      question3: null,
      answer1: null,
      answer2: null,
      answer3: null,
      step1: true,
      step2: false,
      step3: false,
      count: 16,
      email: 'marketplace@mail.ru',
    };
  },
  methods: {
    firstPage() {
      if (
        this.answer1 !== null && this.question1 !== null
        && this.answer2 !== null && this.question2 !== null
        && this.answer3 !== null && this.question3 !== null
      ) {
        this.step1 = false;
        this.step2 = true;
      }
    },
    nextPage() {
      this.step2 = false;
      this.step3 = true;
      if (this.step3 === true) {
        this.counter();
      }
    },
    counter() {
      setInterval(() => {
        this.count -= 1;
      }, 1000);
    },
  },
};
</script>

<style scoped>
hr{
    width: 200px;
}
.count{
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
}
.question{
  width: 750px;
  margin: auto;
  box-shadow: 0 0 10px gray;
}
.pincode{
  width: 500px;
  margin: auto;
  box-shadow: 0 0 10px gray;
  margin-bottom: 30px;
}
</style>
