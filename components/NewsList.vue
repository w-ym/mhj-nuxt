<template>
  <div class="box">
    <!-- <div class="box_center"> -->
      <div class="box_center" v-for="(item, index) in NewsList" :key="index">
      <div class="box_l">
        <img
          :src="item.img"
          alt=""
        />
      </div>
      <div class="box_r">
        <div class="box_r_tit">
          <h1 class="font28">{{item.h}}</h1>
          <span class="font12">记者</span>
        </div>
        <p class="font12">
          {{item.p}}
        </p>
      </div>
      <div class="list_time">
        <p>
          <img src="https://yjytjz.com/images/time.png" alt="" />
          <span>2021-07-19</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../server/api.js";
export default {
  data() {
    return {
      NewsList: {},
    };
  },
  methods: {
    News() {
      axios.getDate()
        .then((res) => {
          this.NewsList = res.date.NewsList;
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
.box {
  :hover{
    background-color: rgb(242, 242, 242);
  }
  .box_center {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 0;
    .box_l {
      img {
        height: 181px;
        width: 300px;
      }
    }
    .box_r {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 10px 0 50px;
      color: #5a5a5a;
    }
    .list_time {
      width: 150px;
      p {
        display: flex;
        padding-top: 20px;
        justify-content: center;
        align-items: center;
        span {
          padding: 8px 0 0 6px;
        }
        img {
          margin-top: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
    .box_center {

    width: 100% !important;
  }
}
</style>