<template>
  <div class="carousel">
    <el-carousel
      height="78rem"
      class="carousel2"
      :interval="5000"
      arrow="always"
    >
      <el-carousel-item v-for="item in carouselImg" :key="item">
        <img :src="item.imgSrc" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import DataJson from "../static/demo.json"; // 引用
export default {
  data() {
    return {
      carouselImg: {},
    };
  },
  mounted() {
    this.carouselImg = DataJson.carouselImg; // 调用
  },
};
</script>

<style lang='less' scoped>
.carousel2 img {
  width: 100%;
}
</style>