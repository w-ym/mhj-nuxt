<template>
  <div>
    <p class="page_banner">
      <img src="https://yjytjz.com/picture/n_ban2.jpg" />
    </p>
    <MianNav TitleP="旗下品牌" TitleI="OUR BRAND" :list="list" />


    <div class="box">
      <div class="box_news">
        <OurBrandNews />
      </div>
      <div class="box_img hvr_bounce_to_top">
        <img src="https://www.yjytjz.com/uploads/201230/5.jpg" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="box_img hvr_bounce_to_top">
        <img src="https://www.yjytjz.com/uploads/201230/5.jpg" alt="" />
      </div>
      <div class="box_news">
        <OurBrandNews />
      </div>
    </div>
    <div class="box">
      <div class="box_news">
        <OurBrandNews />
      </div>
      <div class="box_img hvr_bounce_to_top">
        <img src="https://www.yjytjz.com/uploads/201230/5.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MianNav from "../components/MianNav.vue";
import OurBrandNews from "../components/OurBrandNews.vue";
export default {
  components: { MianNav, OurBrandNews },
  data() {
    return {
       list: [
        {
          p: "品牌介绍",
          href: "/OurBrand",
        },
        {
          p: "门店展示",
          href: "/mendianzhanshi",
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
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .box_news {
    width: 50%;
  }
  .box_img {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1200px) {
  .box {
    width: 100% !important;
  }
}
.hvr_bounce_to_top {
  position: relative;
}
.hvr_bounce_to_top:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  background-image: url(https://www.yjytjz.com/uploads/201230/l-1.png);
  background-repeat: no-repeat;
  background-position: center;
  transform: scaleY(0);
  transform-origin: 50% 100%;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}
.hvr_bounce_to_top:hover:before,
.hvr_bounce_to_top:focus:before,
.hvr_bounce_to_top:active:before {
  transform: scaleY(1);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
</style>