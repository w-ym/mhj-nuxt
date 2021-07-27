<template>
  <div class="box_nav">
    <div class="box_nav_center">
      <div class="box_nav_title">
        <p class="font20">
          {{ TitleP }}
        </p>
        <i class="font14 p-t-5">{{ TitleI }}</i>
      </div>
      <div class="box_nav_list">
        <ul class="font16">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="{ isDefault: item.href === $route.path }"
            @click="AgeBga(item, index)"
          >
            <router-link id="router" :to="item.href">{{ item.p }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TitleP", "TitleI", "list"],
  data() {
    return {
      isa: 0,
      NvaData: {},
      NvaTitle: {},
      test: [],
    };
  },
  methods: {
    AgeBga() {
      console.log(this.$route.path);
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.box_nav {
  background-color: #f4f4f4;
  height: 160px;
  margin-bottom: 2px;
  .box_nav_center {
    display: flex;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    .box_nav_title {
      flex-direction: column;
      font-weight: bold;
      padding-left: 60px;
      display: flex;
      width: 230px;
      justify-content: center;
      color: #fff;
      background-color: #00754a;
    }
    .box_nav_list {
      color: #777777;
      width: 600px;
      ul {
        display: flex;
        justify-content: flex-end;
        li {
          text-align: center;
          line-height: 160px;
          min-width: 120px;
          #router {
            display: block;
            color: #000;
          }
          &:hover {
            background-color: #fff;
            border-bottom: #00754a 2px solid;
          }
        }
      }
    }
  }
}
.isDefault {
  background-color: #fff;
  border-bottom: #00754a 2px solid;
}

@media screen and (max-width: 1200px) {
  .box_nav_center {
    width: 100% !important;
  }
}
</style>