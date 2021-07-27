<template>
  <div class="carousel">
    <el-carousel
      v-if="isshow"
      height="78rem"
      class="carousel2"
      :interval="5000"
      :initial-index='0'
      arrow="always"
    >
      <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
        <img :src="item.imgSrc" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from '../server/api'
export default {
  data() {
    return {
      carouselImg: {},
      isshow:false
    };
  },
   methods: {
    News() {
      axios
        .getDate()
        .then((res) => {
          this.carouselImg = res.date.carouselImg;
          this.isshow = true
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.News();
  },
};
</script>

<style lang='less' scoped>
.carousel2 img {
  width: 100%;
}
</style>