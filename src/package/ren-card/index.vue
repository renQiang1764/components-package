<template>
  <div class="card-page">
    <div class="card"></div>
  </div>
</template>

<script>
export default {
    name:'ren-card'     // 组件名
};
</script>

<style lang="less" scoped>
.card-page {
  .card {
    margin: auto;
    width: 500px;
    height: 300px;
    // border: 1px solid;
    border-radius: 10px;
    box-shadow: 0 0 10px #bbbbbb;
  }
}
</style>
