<template>
  <div class="restore center">
    <div class="div">
      <h1>Восстоновления</h1>
      <div class="img">
        <img src="images/authentication 1.png" alt="Restore">
      </div>
      <div class="route">
        <router-link to="/login">Войти</router-link>
        <router-link to="/register">Регистратсция</router-link>
      </div>
    </div>
    <div class="div1">
      <div>
        <div>
          <label>Ввдите эл.почта</label>
          <input type="text" v-model="email">
        </div>
        <div>
          <label>Новый паролъ</label>
          <input type="password" v-model="newPwd">
        </div>
      </div>
      <button>Отправитъ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Restore',
  data() {
    return {
      email: '',
      newPwd: '',
    };
  },
};
</script>

<style scoped>
.restore {
  width: 1000px;
  height: 550px;
  margin: 40px auto;
  box-shadow: 0 0 10px gray;
  border-radius: 20px;
  display: flex;
}
.restore div {
  flex-basis: 50%;
}
.div{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 400px;
  text-align: center;
  grid-template-rows: 70px auto auto;
  box-shadow: 5px 0 10px rgba(218, 218, 218, 0.8);
}
.route{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.route a{
  border: 1px solid #3377ff;
  padding: 10px 20px;
  color: #3377ff;
  font-weight: bolder;
  border-radius: 5px;
}
.route a:hover{
  color: white;
  border-color: white;
  background:  #3377ff;
}
.img{
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  background: #fafafa;
  border-radius: 15px;
}
.div1{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 400px 100px;
}
.div1 button{
  background: #3377ff;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  margin: auto;
  color: white;
  font-weight: bolder;
}
.div1 div{
  display: grid;
}
.div1 div input{
  width: 350px;
  background: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px 20px;
  margin-bottom: 20px;
}
input:focus, button:focus{
  outline: none;
}
h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3377ff;
    margin: 1rem 0;
  }
</style>
