<template>
  <header class="home_header">
    <div class="header_center">
      <div class="header_center_nav">
        <div
          v-for="(item, index) in headerData1"
          @click="HeaderTitleAge(index)"
          @mousemove="HeaderTitleAge2(index)"
          @mouseout="HeaderTitleAge3(index)"
          class="header-title"
          :key="index"
          :class="{ headerTitleAgeColor: index == DefaultIndex }"
        >
          <a class="font16" :class="{ headerTitleAge: index === ImgInitialValue }">
            {{ item.date }}
            <img :src="item.img" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DataJson from "../static/demo.json"; // 引用
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
    HeaderTitleAge(index) {
      if (index != 3) {
        this.ImgInitialValue = index;
      }
    },
    HeaderTitleAge2(index) {
      if (index != 3) {
        this.DefaultIndex = index;
      }
    },
    HeaderTitleAge3() {
      this.DefaultIndex = this.ImgInitialValue;
    },
  },
  mounted() {
    this.headerData1 = DataJson.headerData1; // 调用
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
    }
  }
}
@media screen and (max-width: 1200px) {
  .header_center {
    width: 100% !important;
  }
}

</style>