<template>
  <div>
     <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="(item,index) in item" :key="index">
          <img class='banner' :src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row class='seach-product'>
      <el-col :span='24'>
        <el-input placeholder="商品搜索：请输入商品关键字" prefix-icon="el-icon-search" v-model="product" ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item:[
        {
          id:1,
          url:'./static/image/1.png'
        },
        {
          id:2,
          url:'./static/image/2.png'
        }
      ],
      product:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.banner{
  width:375px;
  height:150px;
}
.seach-product{
  margin:10px 15px;
}
</style>
