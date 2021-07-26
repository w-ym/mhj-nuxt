<template>
  <div class="pc_box_under">
    <div class="pc_box_under_box">
      <div class="pc_box_under_box_1">
        <div class="pc_box_under_center">
          <div class="pc_box_under_center_l">
            <li v-for="(item, id) in foot_nav" :key="id">
              <a href="#">
                <p class="font16">{{ item.span }}</p>
                <i>{{ item.i }}</i>
              </a>
            </li>
          </div>
          <div class="pc_box_under_center_r">
            <div class="pc_box_under_center_r_txt">
              <div class="pc_box_under_center_r_txt_top font14">
                <p>联系我们</p>
                <p>CONTACT US</p>
              </div>
              <p>电话：400-8697-686</p>
              <p>地址：佛山市南海区里水镇里水大道南46号宇能数码广场A区1703室</p>
            </div>
            <div class="pc_box_under_center_r_img">
              <img src="https://yjytjz.com/picture/ewm.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="pc_box_under_bottom">
          <p>
            Copyright © 广东省袁亮宏餐饮管理有限公司 2020All Rights Reserved
            粤ICP备18113151号 Powered by vancheer
          </p>
          <p>
            友情链接: 抛光氧化铝粉 水饺加盟 袁记云饺 招商加盟网 重庆火锅加盟
            广州蔬菜配送 一点点奶茶加盟 黑泷堂加盟
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataJson from "../static/demo.json"; // 引用

export default {
 data() {
    return {
      foot_nav: {},
    };
  },
  mounted() {
    this.foot_nav = DataJson.foot_nav;
  },
};
</script>

<style lang='less' scoped>
.pc_box_under {
  height: 458px;
  background-color: #282828;
  padding-top: 120px;
  .pc_box_under_box {
    height: 100%;
    margin: 0 auto;
    width: 100%;
    .pc_box_under_box_1 {
      width: 1200px;
      margin: 0 auto;
      .pc_box_under_center {
        display: flex;
        margin-bottom: 120px;
        height: 116px;
        .pc_box_under_center_l {
          width: 600px;
          li {
            a {
              color: #5a5a5a;
            }
            width: 25%;
            float: left;
            margin: 10px 0;
            :hover {
              color: rgb(255, 255, 255);
            }
          }
        }
        .pc_box_under_center_r {
          display: flex;
          color: #666;
          width: 600px;
          .pc_box_under_center_r_txt {
            margin: auto;
            .pc_box_under_center_r_txt_top {
              display: flex;
              border-bottom: #666 1px solid;
              margin-bottom: 10px;
              padding-bottom: 10px;
              justify-content: space-between;
            }
            p {
              margin: 10px 0;
            }
          }
          .pc_box_under_center_r_img {
            img {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
    .pc_box_under_bottom {
      border-top: 1px solid #666;
      height: 99px;
      width: 100%;
      color: #666;
      padding-top: 25px;
    }
  }
}
</style>