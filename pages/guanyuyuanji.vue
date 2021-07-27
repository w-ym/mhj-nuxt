<template>
  <div>
    <div class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/f48a01356924c55f0dec99a76d1d954c.jpg"
        alt=""
      />
    </div>
    <MianNav TitleP="关于集团" TitleI="ABOUT GROUP" :list="list" />
    <div class="box">
      <header>
        <h2 class="font16">关于袁记</h2>
        <h3 class="font28">ABOUT YUAN JI.</h3>
      </header>
      <ul>
        <li :class="{ isDefault: Pindex == 0 }" @click="brandAge(0)">
          品牌故事
        </li>
        <li :class="{ isDefault: Pindex == 1 }" @click="brandAge(1)">
          品牌优势
        </li>
      </ul>

      <div v-if="tab1" class="tab">
        <img
          class="tab_box_img1"
          src="	https://yjytjz.com/picture/1586102380829480.jpg"
          alt=""
        />
        <p>&nbsp;</p>
        <p>
          西关，广州之西，门关之外，素有食在广州，味在西关之名。世纪年代，袁记便诞生于此。八个人，一张大桌子，一个旧店面，这就是当时全民建设新中国浪潮中属于第一代袁记人的剪影。
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <img
          class="tab_box_img2"
          src="	https://yjytjz.com/picture/1586102401114541.jpg"
          alt=""
        />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <img src="	https://yjytjz.com/picture/1586102412738339.jpg" alt="" />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          受益于改革开放，人们生活水平不断提升，第二代袁记人觉得应该是时候将父辈的手艺发扬光大，让更多人享受正宗传统手工饺子，这是袁记人多年来的梦想。
        </p>
        <p>于是，随着改革春风，袁记开启连锁模式。</p>
        <p>
          随着时代的发展，第三代袁记人意识到传统饺子油重，味重，多吃易腻，而现代人更加追求新鲜、营养、健康。本着以人为本，先吃好，再讲究好吃的原则，袁记人决定肉馅选用比其他部位拥有更充足运动量的前腿猪肉，更细
        </p>
        <p>
          腻、精瘦。同时去除传统手艺中添加香料提味的做法，还原食材本真味道，做出让食客吃得安心，吃得放心的好饺子。
        </p>
        <p>&nbsp;</p>
        <img
          class="tab_box_img2"
          src="https://yjytjz.com/picture/1586102539924580.jpg"
          alt=""
        />
        <p>&nbsp;</p>
        <img src="	https://yjytjz.com/picture/1586102555337799.jpg" alt="" />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          至今，距祖辈创业已七十余年，门店已经开枝散叶到五百多家。袁记三代人就像饺子的褶口一样，一代叠一代，一年又一年地重复着同样的事。炊烟袅袅，饺子递出。年岁悠长，袁记如一
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <img
          class="tab_box_img2"
          src="	https://yjytjz.com/picture/1586102575175354.jpg"
          alt=""
        />
      </div>
      <div v-if="tab2" class="tab2">
        <div class="tab_box2">
          <div class="tab_box2_l">01</div>
          <div class="tab_box2_c">
            <h3 class="font24">产品独特配方</h3>
            <p class="font14 m-t-30">
              口味出众：精选上等食材，传承独特配方，令食客流连忘返。手工制作：如今速冻食品日益普遍，手工饺子更显得珍贵，手工制作的袁记饺子，造型口感双优。现包现卖：袁记承诺不售隔夜饺，锁住新鲜正宗味道。
            </p>
          </div>
          <div class="tab_box2_r">
            <img src="https://yjytjz.com/picture/10.jpg" alt="" />
          </div>
        </div>
        <div class="tab_box2">
          <div class="tab_box2_l">01</div>
          <div class="tab_box2_c">
            <h3 class="font24">产品独特配方</h3>
            <p class="font14 m-t-30">
              口味出众：精选上等食材，传承独特配方，令食客流连忘返。手工制作：如今速冻食品日益普遍，手工饺子更显得珍贵，手工制作的袁记饺子，造型口感双优。现包现卖：袁记承诺不售隔夜饺，锁住新鲜正宗味道。
            </p>
          </div>
          <div class="tab_box2_r">
            <img src="https://yjytjz.com/picture/10.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="pageNum">
        <div class="num1">1</div>
        <div class="num2">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import MianNav from "../components/MianNav.vue";
export default {
  components: { MianNav },
  data() {
    return {
      Pindex: 0,
      flg: 1,
      tab1: true,
      tab2: false,
       list: [
         {
          p: "集团简介",
          href: "/jituanjianjie",
        },
        {
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
  methods: {
    brandAge(n) {
      this.Pindex = n;
      if (n == 0 && this.flg == 2) {
        this.tab1 = !this.tab1;
        this.tab2 = !this.tab2;
        this.flg = 1;
      }
      if (n == 1 && this.flg == 1) {
        this.tab2 = !this.tab2;
        this.tab1 = !this.tab1;
        this.flg = 2;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.isDefault {
  color: #fff;
  background-color: #00754a !important;
}
.switch {
  display: none;
}
.box {
  width: 1200px;
  margin: 0 auto;
  header {
    text-align: center;
    padding: 97px 0 20px 0;
    h3 {
      margin-top: 20px;
    }
  }
  > ul {
    display: flex;
    justify-content: center;
    .pinpai1 {
      color: #fff;
      background-color: #00754a;
    }
    li {
      font-size: 14px;
      margin-left: 20px;
      background-color: #f2f2f2;
      padding: 6px 15px;
      border-radius: 25px;
    }
  }
  .tab {
    img {
      display: block;
      margin: 0 auto;
    }
    .tab_box_img1 {
      display: block;
      margin: 35px auto 0;
    }
    > p {
      line-height: 24px;
      text-align: center;
    }
  }
  .tab2 {
    .tab_box2 {
      height: 240px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      .tab_box2_l {
        font-size: 90px;
        color: rgb(92, 92, 92);
        width: 105.56px;
        height: 126px;
      }
      .tab_box2_c {
        color: #5a5a5a;
        margin: 0 90px;
      }
      .tab_box2_r {
        width: 240px;
        height: 138px;
        img {
          width: 100%;
        }
      }
    }
  }

  .pageNum {
    display: flex;
    justify-content: center;
    margin: 20px 0 60px 0;
    div {
      font-size: 20px;
      width: 60px;
      height: 60px;
      margin-left: 20px;
      font-weight: 700;
      text-align: center;
      line-height: 60px;
      background-color: #f2f2f2;
      border-radius: 50%;
    }
    .num1 {
      color: #fff;
      background-color: #00754a;
    }
  }
}

.page_banner {
  width: 100%;
  img {
    width: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .box {
    width: 100%;
    .tab_box_img2 {
      display: block;
      width: 100%;
    }
  }
}
</style>