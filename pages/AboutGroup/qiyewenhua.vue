<template>
  <div>
    <div class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/f48a01356924c55f0dec99a76d1d954c.jpg"
        alt=""
      />
    </div>
    <MianNav TitleP="关于集团" TitleI="ABOUT GROUP" :list="list" />
    <div class="box_qywh">
      <div class="box_center">
        <h3 class="font16">企业文化</h3>
        <h2 class="font28">COMPANY CULTURE</h2>
        <div class="box_list">
          <div class="list_news" v-for="(item, index) in ListNews" :key="index">
            <h3 class="font20">{{ item.h3 }}</h3>
            <h4 class="font12">OUR MISSION</h4>
            <p>
              传承饺子文化<br />
              传递中国名片
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MianNav from "../../components/MianNav.vue";

export default {
  components: { MianNav },
  data() {
    return {
      list: [
            {
          p: "集团简介",
          href: "/AboutGroup",
        },
        {
          p: "关于袁记",
          href: "/AboutGroup/guanyuyuanji",
        },
        {
          p: "企业文化",
          href: "/AboutGroup/qiyewenhua",
        },
        {
          p: "集团历程",
          href: "/AboutGroup/jituanlicheng",
        },
        {
          p: "社会责任",
          href: "/AboutGroup/shehuizeren",
        },
      ],
      ListNews: [
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
        {
          h3: "企业使命",
          h4: "OUR MISSION",
          p1: "传承饺子文化",
          p2: "传递中国名片",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.page_banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.box_qywh {
  .box_center {
    width: 1200px;
    margin: 160px auto 127px;
    .box_list {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .list_news {
        width: 190px;
        height: 240px;
        background-color: #f4f4f4;
        border-radius: 25px;
        text-align: center;
        color: #777;
        margin: 0 25px 30px;
        h3 {
          padding: 40px 0 8px;
        }
        p {
          margin-top: 28px;
          line-height: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .box_center {
      width: 100% !important;
    }
  }
}
</style>