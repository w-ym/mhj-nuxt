<template>
  <div>
    <p class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/cfc0a721434e814428982ff757b5f119.jpg"
        alt=""
      />
    </p>
    <MianNav
      TitleP="新闻中心????????????"
      TitleI="NEWS CENTER"
      :list="list"
    />
    <NewsList />
    <PageNum />
  </div>
</template>

<script>
import MianNav from "../components/MianNav.vue";
import NewsList from "../components/NewsList.vue";
import PageNum from "../components/PageNum.vue";

export default {
  components: { MianNav, NewsList, PageNum },
  data() {
    return {
     list: [
        {
          p: "集团动态",
          href: "/NewsCenter",
        },
        {
          p: "行业动态",
          href: "/hangyedongtai",
        }
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.page_banner {
  img {
    width: 100%;
  }
}
</style>