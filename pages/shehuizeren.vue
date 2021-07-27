<template>
  <div>
    <div class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/f48a01356924c55f0dec99a76d1d954c.jpg"
        alt=""
      />
    </div>
    <MianNav TitleP="关于集团" TitleI="ABOUT GROUP" :list="list" />
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
          id: 0,
          p: "集团简介",
          href: "/jituanjianjie",
        },
        {
          id: 1,
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
    };
  },
  methods: {},
};
</script>

<style lang='less' scoped>
@media screen and (max-width: 1200px) {
  .box_center {
    width: 100% !important;
  }
}
</style>