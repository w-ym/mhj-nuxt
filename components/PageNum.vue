<template>
  <div>
      <ul>
          <li>&lt;&lt;</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>&gt;</li>
          <li>&gt;&gt;</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
ul{
    height: 30px;
    display: flex;
    width: 1200px;
    margin: 20px auto;
    justify-content: center;
    li{
        background-color: #fff;
        margin-left: 10px;
        padding: 0 10px;
        line-height: 30px;
        border: #ccc 1px solid;
    }
}

@media screen and (max-width: 1200px) {
  ul{
      width: 100% !important;
  }
}
</style>