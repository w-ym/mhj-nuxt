<template>
  <div class="news">
    <div class="box" v-for="(item, index) in Products" :key="index">
      <div class="box_img">
        <i>
          <img src="https://yjytjz.com/images/2.png" alt="" />
        </i>
        <img :src="item.img" alt="" />
      </div>
      <div class="box_tit">
        <h3>
          {{ item.h3 }}<img src="	https://yjytjz.com/picture/a-1.png" alt="" />
        </h3>
        <p>{{ item.p }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../server/api.js";
export default {
  data() {
    return {
      Products: {},
    };
  },
  methods: {
    News() {
      axios
        .getDate()
        .then((res) => {
          this.Products = res.date.Products.jiaozi;
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

<style lang="less" scoped>
.news {
  display: flex;
  flex-wrap: wrap;
  .box {
    position: relative;
    border-radius: 35px;
    // width: 360px;
    width: 30%;
    height: 30%;
    // height: 387px;
    margin: 20px;
    background-color: rgb(243, 243, 243);

    .box_img {
      > img {
        width: 100%;
        border-radius: 35px 35px 0 0;
      }
      > i {
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
    .box_tit {
      padding: 20px;
      img {
        float: right;
      }
      p {
        margin-top: 20px;
      }
      &:hover {
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
    .news {
    width: 100% !important;
  }
}
</style>