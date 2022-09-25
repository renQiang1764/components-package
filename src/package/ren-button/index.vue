<template>
  <div class="button-page">
    <button class="loginBtn" type="button" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name:'ren-button',
  methods: {
    login() {
      console.log("登录按钮");
    },
  },
};
</script>

<style lang="less" scoped>
.button-page{
    text-align: center;
    .loginBtn{
        width: 100px;
        height: 30px;
        border: 1px solid;
        border-radius: 10px;
        cursor: pointer;
        background-color: aquamarine;
    }
}
</style>
