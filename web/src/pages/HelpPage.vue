<template>
  <div class="container m-auto">
    <z-bread-crumbs :links="links" />
    <h1>Помощь</h1>
    <div class="container flex justify-between">
      <div class="w-1/2">
        <div
        class="w-full"
      v-for="question in questions"
      :key="question.id">
        <z-accordion
        class="my-2 bg-gray-200 px-2"
        :label="question.label"
        :id="question.id"
        :content="question.content"
        />
      </div>
      </div>
      <div class="w-1/2">
        <div class="grid justify-end">
          <textarea
          class="focus:outline-none"
          placeholder="Leave your questions..."></textarea>
          <button
          class="bg-transparent bg-primary-500 font-semibold text-white
          py-2 px-4 my-10 border w-1/2 m-auto border-primary-500 rounded"
          >Отправить</button>
          <img
        src="images/help.png"
        class="m-auto"
        alt="Help">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZBreadCrumbs from '@/components/ZBreadCrumbs';
import ZAccordion from '@/components/ZAccordion';

export default {
  name: 'HelpPage',
  components: {
    ZBreadCrumbs,
    ZAccordion,
  },
  data() {
    return {
      links: [
        {
          id: 1,
          label: 'Главная',
          to: '/',
        },
        {
          id: 2,
          label: 'Помощь',
          to: '/help',
        },
      ],
      questions: [
        {
          id: 1,
          label: 'How can I order online?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 2,
          label: 'What payment methods can I use?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 3,
          label: 'How can I change delivery address?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 4,
          label: 'Can I return a product?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 5,
          label: 'Do you have the product in stock?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 6,
          label: 'Shopping cost?',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
        {
          id: 7,
          label: 'Security',
          content: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi nisi vitae. A accusamus aut nulla quia repudiandae illo laudantium eius ipsa deleniti sint? Hic tenetur, aliquam, ipsa unde assumenda dignissimos fuga ipsam consectetur reiciendis, quas corporis beatae iure suscipit.'],
        },
      ],
    };
  },
};
</script>

<style scoped>
h1{
    font-size: 1.5rem;
    font-weight: bold;
    color: #3377ff;
    margin: 1rem 0;
}
textarea{
  padding: 10px 20px;
  width: 400px;
  height: 150px;
  resize: none;
  border: 1px solid gray;
}
</style>
