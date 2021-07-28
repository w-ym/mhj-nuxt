<template>
  <div>
    <p class="page_banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ashuo985/tu-chuan/368d204cbc8235b64e6c19c80927d7d3.jpg"
        alt=""
      />
    </p>
    <MianNav TitleP="合作咨询" TitleI="COOPERATION" :list="list" />

    <div class="box_center">
      <div class="box_joining">
        <div class="box_l">
          <h3 class="font16">关于加盟</h3>
          <h2 class="font28">ABOUT JOINING</h2>
          <div class="box_l_lx">
            <h2 class="font16 m_b_20">联系我们</h2>
            <p class="iconfont icon-dianhua"><i>电话：400-8697-686</i></p>
            <p class="iconfont icon-dizhi">
              <i>地址：佛山市南海区里水镇里水大道南46号宇能数码广场A区1703室</i>
            </p>
            <p class="iconfont icon-youxiang"><i>邮箱：admin@yjytjz.com</i></p>
            <p class="iconfont icon-weixin"><i>微信：袁记云饺公众号</i></p>
            <p class="iconfont icon-weixin"><i>微博：袁记云饺官微</i></p>
          </div>
        </div>
        <div class="box_r">
          <img src="	https://yjytjz.com/picture/ditu.png" alt="" />
        </div>
      </div>
      <p class="font20">在线留言·诚邀合作</p>
    </div>
    <div class="box_contact">
      <div class="contact_center">
        <div class="contact_center_l">
          <p class="iconfont icon-yangshi_icon_tongyong_user">
            <input placeholder="您的称呼" type="text" />
          </p>
          <p class="iconfont icon-yangshi_icon_tongyong_call">
            <input placeholder="联系电话" type="text" />
          </p>
          <p class="iconfont icon-yangshi_icon_tongyong_email">
            <input placeholder="电子邮箱" type="text" />
          </p>
          <p class="iconfont icon-yangshi_icon_tongyong_location">
            <input placeholder="在那个城市开店" type="text" />
          </p>
        </div>
        <div class="contact_center_r">
          <textarea placeholder="留言内容..."></textarea>
          <br />
          <input value="提交申请" type="submit" />
          <input value="取消申请" type="reset" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "../../../server/api.js";
import MianNav from "../../components/MianNav.vue";

export default {
  components: { MianNav },
  data() {
    return {
      JoiningList: {},
      list: [
       {
          p: "关于加盟",
          href: "/AboutJoining",
        },
        {
          p: "联系我们",
          href: "/AboutJoining/lianxiwomen",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
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
  .box_joining {
    display: flex;
    justify-content: space-between;
    margin: 160px  0 127px 0;
    .box_l {
      height: 418px;
      width: 45%;
      .box_l_lx {
        margin-top: 60px;
        p {
          position: relative;
          margin-bottom: 30px;
          font-size: 20px;
          i {
            position: absolute;
            display: inline-block;
            padding-bottom: 10px;
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
    }
    .box_r {
      width: 55%;
    }
  }
  > p {
    color: #5a5a5a;
    margin: 30px 0;
  }
}
.box_contact {
  height: 469px;
  background: url(https://yjytjz.com/images/liuyan.jpg) no-repeat;
  .contact_center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    padding-top: 60px;
    .contact_center_l {
      width: 50%;
      > p {
        position: relative;
        font-size: 30px;
        height: 40px;
        margin: 30px 0;
        input {
          position: absolute;
          height: 100%;
          border: none;
          padding-left: 20px;
          outline: none;
          border-radius: 25px;
          width: 60%;
          margin-left: 30px;
        }
      }
    }
    .contact_center_r {
      width: 50%;
      textarea {
        padding: 8px 0 0 16px;
        width: 90%;
        margin: 30px 0;
        height: 180px;
        border-radius: 25px;
        outline: none;
        color: #5a5a5a;
        border: none;
      }
      input {
        width: 120px;
        border-radius: 25px;
        height: 30px;
        color: #fff;
        border: none;
        margin: 0 60px;
        &:nth-last-child(2) {
          background-color: #00754a;
        }
        &:nth-last-child(1) {
          background-color: #8b8b8b;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .box_center,
  .contact_center {
    width: 100% !important;
    img {
      width: 100% !important;
    }
  }
}
</style>