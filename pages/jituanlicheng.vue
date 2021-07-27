<template>
  <div>
    <div class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/f48a01356924c55f0dec99a76d1d954c.jpg"
        alt=""
      />
    </div>
    <MianNav TitleP="关于集团" TitleI="ABOUT GROUP" :list="list" />
    <div class="box">
      <h3 class="font16">集团历程</h3>
      <h2 class="font28">GROUP HISTORY</h2>
      <el-pagination
        :page-size="17"
        :pager-count="11"
        background
        layout="prev, pager, next"
        :total="90"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import MianNav from "../components/MianNav.vue";

export default {
  components: { MianNav },
  data() {
    return {
      list: [
        {
          p: "集团简介",
          href: "/jituanjianjie",
        },
        {
          p: "关于袁记",
          href: "/guanyuyuanji",
        },
        {
          p: "企业文化",
          href: "/qiyewenhua",
        },
        {
          p: "集团历程",
          href: "/jituanlicheng",
        },
        {
          p: "社会责任",
          href: "/shehuizeren",
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
.box {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: rgb(182, 182, 182);
  padding-top: 100px;
  h2,
  h3 {
    text-align: center;
    padding-top: 2px;
  }
}

@media screen and (max-width: 1200px) {
  .box {
    width: 100% !important;
  }
}
</style>