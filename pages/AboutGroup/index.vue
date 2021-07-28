<template>
  <div>
    <div class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/f48a01356924c55f0dec99a76d1d954c.jpg"
        alt=""
      />
    </div>
    <MianNav TitleP="关于集团" TitleI="ABOUT GROUP" :list="list" />
    <div class="box_content">
      <div class="box_content_center">
        <p class="center_img1">
          <img src="	https://yjytjz.com/picture/1586080327111267.jpg" alt="" />
        </p>
        <p class="center_p1 font14">
          佛山市袁亮宏餐饮管理有限公司旗下品牌“袁记云饺”始创于1946，被誉为“地道”称号的广式饺子云吞。距今70余年，在研究传统饮食文化的基础上，不断探究现代中不同饮食习惯的新面貌，研发出新鲜，健康，营养，皮薄馅大的饺子云吞，广受消费者们的青睐，迅速占领市场，成为全国生面行业的领军品牌。
        </p>
        <p class="center_img2">
          <img src="https://yjytjz.com/picture/1587568151613906.jpg" alt="" />
        </p>
        <p class="center_img3">
          <img src="https://yjytjz.com/picture/1587568375948570.jpg" alt="" />
        </p>
        <p class="center_p2 font14">
          佛山市袁亮宏餐饮管理有限公司，坐落于美丽的佛山市南海里水镇，宇能国际中心17楼。主要以自主研发、生产、配送、销售为一体的现代化c餐饮企业，主营生鲜饺子、云吞及面制品。
        </p>
        <p>&nbsp;</p>
        <p class="center_p3 font14">
          2019年初，旗下“袁记云饺”“袁亮宏”“袁记味享”三大品牌，在国内已有500家门店，覆盖广州、北京、上海、南京、深圳、成都、杭州、武汉、苏州等48个大中城市，成为全国最大、发展最快的广式饺子餐饮连锁品牌，员工1500余人,目前广东佛山总公司与江苏苏州分公司分别建立运营管理中心及现代化生产工厂。
        </p>
        <p class="center_img4">
          <img src="	https://yjytjz.com/picture/1586080328121345.jpg" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MianNav from "../../components/MianNav.vue";
export default {
  components: { MianNav },
  data() {
    return {
      index: 0,
      tab1: true,
      tab2: false,
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
  methods: {
    brandAge(n) {
      this.index = n;
      if (n == 0 && this.a == 2) {
        this.tab1 = !this.tab1;
        this.tab2 = !this.tab2;
        this.a = 1;
        console.log(this.a);
      }
      if (n == 1 && this.a == 1) {
        this.tab2 = !this.tab2;
        this.tab1 = !this.tab1;
        this.a = 2;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page_banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.box_content {
  width: 100%;
  height: 2307px;
  .box_content_center {
    height: 340px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    .center_img1 {
      margin: 100px auto 15px;
      width: 556px;
      height: 340px;
      img {
        width: 100%;
      }
    }
    .center_p1 {
    }
    .center_img2 {
      width: 100%;
      margin-top: 50px;
      img {
        width: 100%;
      }
    }
    .center_img3 {
      width: 1200px;
      margin: 220px 0 90px 0;
    }
    .center_img4 {
      margin-top: 170px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .box_nav {
    width: 100% !important;
  }
  .box_nav_center {
    width: 100% !important;
  }
  .box_content_center {
    width: 100% !important;
  }
  .center_img3 {
    width: 100% !important;
  }
}
</style>