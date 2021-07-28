<template>
  <div>
    <p class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/368d204cbc8235b64e6c19c80927d7d3.jpg"
        alt=""
      />
    </p>
    <MianNav TitleP="合作咨询" TitleI="COOPERATION" :list="list" />

    <div class="box_center">
      <h3 class="font16">关于加盟</h3>
      <h2 class="font28">ABOUT JOINING</h2>
      <div class="box_center_list">
        <div v-for="(item, index) in JoiningList" :key="index">
          <p>{{ item.p1 }}</p>
          <p>{{ item.p2 }}</p>
          <p>{{ item.p3 }}</p>
          <h2 class="font20">{{ item.h2 }}</h2>
          <span>
            <img
              src="https://yjytjz.com/images/m-1-1.png
"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../server/api.js";
import MianNav from "../../components/MianNav.vue";

export default {
  components: { MianNav },
  data() {
    return {
      JoiningList: {},
      list: [
        {
          p: "关于加盟",
          href: "/AboutJoining",
        },
        {
          p: "联系我们",
          href: "/AboutJoining/lianxiwomen",
        },
      ],
    };
  },
  methods: {
    News() {
      axios
        .getDate()
        .then((res) => {
          this.JoiningList = res.date.AboutJoining; // 调用
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
.page_banner {
  img {
    width: 100%;
  }
}
.box_center {
  width: 1200px;
  padding-bottom: 100px;
  margin: 160px auto 127px;
  .box_center_list {
    display: flex;
    justify-content: space-between;
    > div {
      background-color: #f1f1f1;
      width: 145px;
      height: 175px;
      color: #00754a;
      border-radius: 25px;
      padding: 15px;
      position: relative;
      margin-top: 40px;
      h2 {
        margin-top: 20px;
      }
      span {
        position: absolute;
        bottom: 15px;
        right: 15px;
      }
    }
    :hover {
      background-color: #00754a;
      color: #fff;
    }
  }
}

@media screen and (max-width: 1200px) {
  .box_center {
    width: 100% !important;
  }
  .box_center_list {
    flex-wrap: wrap;
  }
}
</style>