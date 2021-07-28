<template>
  <div>
    <p class="page_banner">
      <img src="https://yjytjz.com/picture/n_ban2.jpg" />
    </p>
    <MianNav TitleP="旗下品牌" TitleI="OUR BRAND" :list="list" />
    <div class="box">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div>
        <img
          src="https://www.yjytjz.com/uploads/201230//1586535575403681.png"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div class="div_w">
        <img
          src="	https://www.yjytjz.com/uploads/201230//1586535596662000.jpg"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div>
        <img
          src="https://www.yjytjz.com/uploads/201230//1586535575403681.png"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div class="div_w">
        <img
          src="	https://www.yjytjz.com/uploads/201230//1586535610123247.jpg
"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div>
        <img
          src="https://www.yjytjz.com/uploads/201230//1586535575403681.png"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div class="div_w">
        <img
          src="	https://www.yjytjz.com/uploads/201230//1586535628106955.jpg
"
          alt=""
        />
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
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
          p: "品牌介绍",
          href: "/OurBrand",
        },
        {
          p: "门店展示",
          href: "/OurBrand/mendianzhanshi",
        },
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

.box {
  width: 1200px;
  margin: 0 auto;
  p {
    font-size: 16px;
  }
  div {
    text-align: center;
  }
}
@media screen and (max-width: 1200px) {
  .box {
    width: 100% !important;
    .div_w {
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
}
</style>