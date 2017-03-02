<template>
  <div class="building">
    <div class="container marketing">
      <div class="bg"></div>
      <template v-if="$route.query['language'] === 'en'">
        <h1>build...</h1>
      </template>
      <template v-else>
        <h1>板块建设中...</h1>
      </template>
      
    </div>
  </div>
</template>

<style scoped>
.building {
  padding: 150px 0;
}
.bg {
  width: 20%;
  height: 0;
  overflow: hidden;
  padding-top: 20%;
  background: url(../../assets/image/building.png) no-repeat center center;
  background-size: 100%;
  margin: 0 auto;
}
.building h1 {
  font-size: 18px;
  text-align: center;
  color: #bbb;
}
</style>
