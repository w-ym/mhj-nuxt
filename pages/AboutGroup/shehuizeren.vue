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