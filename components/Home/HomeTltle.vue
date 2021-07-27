<template>
  <header class="home_header">
    <div class="header_center">
      <div class="header_center_nav">
        <div
          v-for="(item, index) in headerData1"
          :class="{ headerTitleAgeColor: item.href == $route.path }"
          @click="HeaderTitleAge(item, index)"
          class="header-title"
          :key="index"
        >
          <a
            class="font16"
            :class="{ headerTitleAge: item.href === $route.path }"
          >
            {{ item.date }}
            <img :src="item.img" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "../../../server/api.js";
export default {
  data() {
    return {
      ImgInitialValue: 0,
      DefaultIndex: 0,
      headerTitleAgeColor: "headerTitleAgeColor",
      headerData1: {},
    };
  },
  methods: {
    HeaderTitleAge(item, index) {
      if (index != 3) {
        this.ImgInitialValue = index;
        this.$router.push(item.href);
      }
    },
    News() {
      axios
        .getDate()
        .then((res) => {
          this.headerData1 = res.date.headerData1;
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
.headerTitleAgeColor {
  background-color: rgb(0, 95, 57);
}
header {
  height: 140px;
  background-color: rgb(0, 117, 74);
  .header_center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .header_center_nav {
      height: 100%;
      display: flex;
      width: 100%;
    }
    .header-title {
      height: 100%;
      margin-left: 1px;
      flex: 1;
      > a {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        color: #feebc2;
      }
      &:hover {
        background-color: rgb(0, 95, 57);
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .header_center {
    width: 100% !important;
  }
}
</style>