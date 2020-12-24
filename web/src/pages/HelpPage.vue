<template>
  <div class="container m-auto ">
    <z-bread-crumbs :links="links"/>
    <h1>Помощь</h1>
    <div class="container flex justify-between mb-10">
      <div class="w-1/2">
        <z-accordion-list :content="help" />
      </div>
      <div class="container w-1/3">
          <div class="container grid">
            <textarea
            placeholder="Leave your questions..."
            class="focus:outline-none bg-gray-100 resize-none
            py-1 px-2 h-32
            "></textarea>
            <button
            class="bg-transparent bg-primary-500 font-semibold text-white
          py-2 px-4 border border-primary-500 mt-10 m-auto w-1/2
          rounded focus:outline-none"
          @click="leaveMessage"
          >Отправить</button>
          </div>
        <img src="images/help.png" class="my-10 m-auto" alt="help">
      </div>
    </div>
  </div>
</template>

<script>
import ZBreadCrumbs from '@/components/ZBreadCrumbs';
import ZAccordionList from '@/components/ZAccordionList';

export default {
  name: 'Help',
  components: {
    ZBreadCrumbs,
    ZAccordionList,
  },
  data() {
    return {
      help: [
        {
          id: 1,
          name: 'How can I order online?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 2,
          name: 'What payment methods can I use?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 3,
          name: 'How can I change delivery address?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 4,
          name: 'Can I return a product?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 5,
          name: 'Do you have the product in stock?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 6,
          name: 'Shopping cost?',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
        {
          id: 7,
          name: 'Security',
          items: 'Sign in to your account and go to “My Account”. On “My Account” you can change all your contact information in “Settings” section.',
        },
      ],
      links: [
        {
          to: '/',
          label: 'Главная',
        },
        {
          to: '/help',
          label: 'Помощь',
        },
      ],
    };
  },
  methods: {
    leaveMessage() {
      alert('Your Message Leaved');
    },
  },
};
</script>

<style scoped>
h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3377ff;
    margin: 1rem 0;
  }
</style>
