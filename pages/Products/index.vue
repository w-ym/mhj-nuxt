<template>
  <div>
    <p class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/5f533b4956e50cfbd7b152266cb98075.jpg"
      />
    </p>
    <div class="box_center">
      <div class="box_list_title">
        <router-link
          id="router"
          v-for="(item, index) in isList"
          :key="index"
          :class="{ isAge: item.href === $route.path }"
          :to="item.href"
          >{{ item.p }}</router-link
        >
      </div>
      <ProductsNews />
    </div>
  </div>
</template>

<script>
import ProductsNews from "../../components/Products/ProductsNews.vue";
import axios from "../../server/api.js";

export default {
  components: { ProductsNews },
  data() {
    return {
      isa: 0,
      isList: {},
    };
  },
  methods: {
    News() {
      axios
        .getDate()
        .then((res) => {
          this.isList = res.date.Products.list;
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
  margin: 0 auto;
  .box_list_title {
    width: 100%;
    height: 222px;
    text-align: center;
    a {
      margin: 0 20px;
      line-height: 222px;
      background-color: #f5f5f5;
      border-radius: 15px;
      color: #424242;
      margin: 0 20px;
      line-height: 222px;
      background-color: #f5f5f5;
      border-radius: 15px;
      font-size: 16px;
      padding: 5px 12px;
    }
    :hover {
      background-color: #00754a;
      color: #fff;
    }
  }
}
.isAge {
  background-color: #00754a !important;
  color: rgb(255, 255, 255) !important;
}

@media screen and (max-width: 1200px) {
  .box_center {
    width: 100% !important;
  }
}
</style>