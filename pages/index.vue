<template>
  <div>
    <!-- <my-header /> -->
    <!-- <my-car /> -->
    <div class="pc_box_index">
      <div class="pc_box_index_left"></div>
      <div class="pc_box_index_right">
        <img src="	https://yjytjz.com/picture/icon-b.png" alt="" />
        <p>
          广东省袁亮宏餐饮管理有限公司旗下品牌“袁记云饺”始创于1946，被誉为“地道”称号的广式饺子云吞。距今70余年，在研究传统饮食文化的基础上，不断探究现代中不同饮食习惯的新面貌，研发出新鲜，健康，营养，皮薄馅大的饺子云吞，广受消费者们的青睐，迅速占领市场，成为全国生面行业的领军品牌。
        </p>
      </div>
    </div>

    <div class="pc_box_index2">
      <div class="pc_box_index2_top">
        <div
          v-for="(item, id) in PcBoxIndexTop"
          :class="{ PcBoxIndexTopAge: id === isa }"
          @click="HeaderTitleAge(id)"
          :key="id"
          @mouseover="HeaderTitleAgeImg(item)"
        >
          <img ref="aa" :src="isa == id ? item.imgSrc2 : item.imgSrc" alt="" />
        </div>
      </div>
      <div class="pc_box_index2_bottom">
        <div class="pc_box_index2_bottom_center">
          <div class="pc_box_index2_bottom_img1">
            <img src="https://yjytjz.com/picture/icon-c.png" alt="" />
          </div>
          <div class="pc_box_index2_bottom_center_title">
            <h3>袁亮宏</h3>
            <p>
              广东省袁亮宏餐饮管理有限公司旗下品牌“袁记云饺”始创于1946，被誉为“地道”称号的广式饺子云吞。距今70余年，在研究传统饮食文化的基础上，不断探究现代中不同饮食习惯的新面貌，广受消费者们的青睐，迅速占领市场，成为全国生面行业的领军品牌。
            </p>
          </div>
          <div class="pc_box_index2_bottom_img2">
            <img
              src="https://yjytjz.com/picture/icon-more.png
"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="pc_box_index3">
      <div class="pc_box_index3_top">
        <img src="https://yjytjz.com/picture/icon-d.png" alt="" />
      </div>
      <div class="pc_box_index3_bottom">
        <div class="pc_box_index3_bottom_center">
          <div class="pc_box_index3_bottom_l">
            <img src="	https://yjytjz.com/picture/pro_1.jpg" alt="" />
          </div>
          <div class="pc_box_index3_bottom_r">
            <div v-for="(item, id) in PcIoxIndex3BottomR" :key="id">
              <img :src="item.imgSrc" alt="" />
              <div>
                <p class="font16">{{ item.p }}</p>
                <span>{{ item.span }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pc_box_index4">
      <div class="pc_box_index4_center">
        <div class="pc_box_index4_l">
          <img src="https://yjytjz.com/picture/icon-social.png" alt="" />
        </div>
        <div class="pc_box_index4_r">
          <div class="pc_box_index4_r_img">
            <img
              class="pc_box_index4_r_img_1"
              src="https://yjytjz.com/picture/icon-e.png"
            />
            <img
              class="pc_box_index4_r_img_2"
              src="https://yjytjz.com/picture/more.png"
            />
          </div>
          <div class="pc_box_index4_video">
            <video
              loop="true"
              width="100%"
              src="http://www.yjytjz.com/templets/default/images/video.mp4"
            ></video>
          </div>
          <p>
            11月3日下午14:30，湖南科技大学体育学院校友捐赠仪式在体育楼223室隆重举行，本次会议由党委副书记廖双红老师主持，出席本次活动的领导和嘉宾有：党委书记胡斌梁教授、院长敬龙军教授、王金亮老师和彭云志老师。校友袁亮宏参加了捐赠活动和报告会。
          </p>
        </div>
      </div>
    </div>
<my-pageBottom/>
  </div>
</template>

<script>
import DataJson from "../static/demo.json"; // 引用
export default {
  components: {},
  data() {
    return {
      isa: 0,
      isb: 0,
      PcBoxIndexTop: {},
      PcIoxIndex3BottomR: {},
    };
  },
  methods: {
    HeaderTitleAge(id) {
      this.isa = id;
    },
    HeaderTitleAgeImg() {},
  },
  mounted() {
    this.PcBoxIndexTop = DataJson.PcBoxIndexTop; // 调用
    this.PcIoxIndex3BottomR = DataJson.PcIoxIndex3BottomR; // 调用
  },
};
</script>



<style lang="less" scoped>
.pc_about_box {
  display: flex;
  height: 79rem;
  background-color: rgb(249, 249, 249);

  .pc_about_box_left {
    width: 50%;
    padding: 0 30px;

    > div {
      line-height: 35px;
      margin-top: 60px;
      color: #777;
    }
  }

  .pc_about_box_right {
    width: 50%;

    img {
      height: 78.9rem;
    }
  }
}

.tab-box-index img {
  height: 93.6rem;
}

.pc_box_index {
  background-image: url(https://yjytjz.com/picture/bann.jpg);
  background-size: 100%;
  height: 82rem;
  display: flex;

  .pc_box_index_left {
    width: 60%;
  }

  .pc_box_index_right {
    width: 40%;

    img {
      margin-top: 65px;
      width: 59.294rem;
      height: 12.619rem;
    }

    p {
      margin-top: 40px;
      color: #777;
      font-size: 16px;
      line-height: 40px;
    }
  }
}

.pc_box_index2 {
  background-image: url(https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/c81ee855cf31277274fbd9108d6e64a0.jpg);
  background-size: 100%;
  height: 93.167rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .pc_box_index2_top {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 70%;
    border-radius: 0 0 10px 10px;
    height: 120px;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);

    :hover {
      background-color: rgb(0, 95, 57);
    }

    li {
      width: 1px;
      height: 51px;
      background-color: rgb(189, 189, 189);
    }

    > div {
      width: 200px;
      height: 80px;
      margin: 0 10px;

      img {
        margin-top: 10px;
      }
    }
  }

  .pc_box_index2_bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 174px;
    background: rgba(0, 117, 74, 0.85);
    color: #fff;

    .pc_box_index2_bottom_center {
      display: flex;
      width: 1200px;
      height: 114px;

      .pc_box_index2_bottom_img1 {
        width: 480px;
        height: 100%;

        img {
          width: 132px;
          height: 104.45px;
        }
      }

      .pc_box_index2_bottom_img2 {
        margin: 0 90px;
      }
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      margin-top: 20px;
      line-height: 25px;
    }
  }
}

.pc_box_index3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 50px;

  .pc_box_index3_top {
    margin: 0 auto;
    margin-bottom: 100px;
  }

  .pc_box_index3_bottom {
    // width: 100%;
    width: 1200px;
    // height: 75.1406rem;
    margin: 0 auto;

    .pc_box_index3_bottom_center {
      display: flex;

      .pc_box_index3_bottom_l {
        height: 531.41px;

        // width: 600px;
        img {
          height: 528.44px;
          // width: 600px;
          width: 100%;
        }
      }
    }

    .pc_box_index3_bottom_r {
      display: flex;
      width: 50%;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-end;

      > div {
        float: left;
        width: 40%;
        position: relative;
        margin: 5% 2% 0% 5%;

        > div {
          font-weight: bold;
          position: absolute;
          color: #fff;
          top: 15px;
          left: 15px;
        }
      }

      img {
        filter: brightness(85%);
        // width: 240px;
        width: 100%;
        // height: 21.333rem;
      }
    }
  }
}

.pc_box_index4 {
  background-color: rgb(249, 249, 249);
  display: flex;
  height: 776px;

  .pc_box_index4_center {
    margin: 0 auto;
    width: 1200px;
    height: 776px;
    display: flex;
    justify-content: space-between;

    .pc_box_index4_l {
      background-color: rgb(0, 117, 74);
      height: 776px;
      width: 480px;
      display: flex;
      align-items: center;

      img {
        width: 288px;
        height: 215.64px;
        margin-left: 100px;
      }
    }

    .pc_box_index4_r {
      height: 776px;
      width: 600px;
      padding: 60px 0;

      .pc_box_index4_video {
        margin: 30px 0;
      }

      .pc_box_index4_r_img {
        display: flex;
        justify-content: space-between;

        .pc_box_index4_r_img_1 {
          width: 388.83px;
          height: 60px;
        }

        .pc_box_index4_r_img_2 {
          width: 82px;
          height: 22px;
        }
      }

      p {
        font-size: 14px;
        line-height: 30px;
        color: #777;
      }
    }
  }
}
.PcBoxIndexTopAge {
  background-color: rgb(0, 95, 57);
}


// @import "../style/pc1200min.less";
@media screen and (max-width: 1200px) {
  .pc_about_box {
    height: 498px;
  }
}
</style>
