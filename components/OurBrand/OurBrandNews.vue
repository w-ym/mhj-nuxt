<template>
  <div class="news_box">
    <h2 class="font20">袁记云饺</h2>
    <span></span>
    <img src="https://www.yjytjz.com/uploads/201230/logo1.png" alt="" />
    <p class="font14">
      佛山市袁亮宏餐饮管理有限公司旗下品牌“袁记云饺”始创于1946，被誉为“地道”称号的广式饺子云吞。距今70余年，在研究传统饮食文化的基础上，不断探究现代中不同饮食习惯的新面貌，广受消费者们的青睐，迅速占领市场，成为全国生面行业的领军品牌。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.news_box {
  width: 600px;
  height: 342px;
  position: relative;
  padding: 50px;
  img {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  span {
    display: inline-block;
    width: 20px;
    height: 3px;
    background-color: #00754a;
    margin: 20px 0;
  }
  p{
      line-height: 26px;
  }
}

@media screen and (max-width: 1200px) {
   .news_box{
     width: 100% !important;
   }
}
</style>