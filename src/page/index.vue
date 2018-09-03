<template>
  <div>
     <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="(item,index) in flowInfo.list" :key="index">
          <img class='banner' v-bind:src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row class='seach-product'>
      <el-col :span='24'>
        <el-input placeholder="商品搜索：请输入商品关键字" prefix-icon="el-icon-search" v-model="flowInfo.product" ></el-input>
      </el-col>
    </el-row>
    <el-row class='sort'>
      <el-col :span='flowInfo.sort' v-for="(item,index) in flowInfo.sortIist" :key="index">
          <img class='sort-item' :src='item.url'>
          <div class="sortName">{{item.name}}</div>
      </el-col>
    </el-row>
    <el-row class='zone-product'>
      <el-col :span='24'>
        <div class="title-product"><div></div>热卖专区</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='12' v-for="(item,index) in flowInfo.productList" :key="index">
        <div class="zone-product-list">
          <div class="product-list-img"><img :src='item.url'></div>
          <div class="product-name">{{item.name}}</div>
          <div class="product-price">
            <span>活动价￥{{item.price}}</span>
            <span>￥{{item.originalPrice}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flowInfo:{
        list:[
          {
            id:1,
            url:'./static/image/1.png'
          },
          {
            id:2,
            url:'./static/image/2.png'
          }
        ],
        product:null,
        sort:0,
        sortItem:4,
        sortIist:[
          {
            url:'./static//image/58.jpg',
            name:'彩妆专区'
          },{
            url:'./static//image/58.jpg',
            name:'彩妆专区'
          },
          {
            url:'./static//image/58.jpg',
            name:'彩妆专区'
          },
          {
            url:'./static//image/58.jpg',
            name:'彩妆专区'
          }
        ],
        productList:[
          {
            name:'神仙水',
            url:'./static//image/240x240.jpg',
            price:100,
            originalPrice:120
          },
          {
            name:'神仙水22',
            url:'./static//image/240.jpg',
            price:600,
            originalPrice:720
          },
          {
            name:'神仙水',
            url:'./static//image/240x240.jpg',
            price:100,
            originalPrice:120
          },
          {
            name:'神仙水22',
            url:'./static//image/240.jpg',
            price:600,
            originalPrice:720
          },
          {
            name:'神仙水',
            url:'./static//image/240x240.jpg',
            price:100,
            originalPrice:120
          },
          {
            name:'神仙水22',
            url:'./static//image/240.jpg',
            price:600,
            originalPrice:720
          }
        ]
      }
    }
  },
  mounted:function(){
    this.flowInfo.sort=24/this.flowInfo.sortItem;
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
.sort {
  text-align: center;
  .sort-item {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .sortName{
    font-size: 12px;
  }
}
.zone-product{
  .title-product{
    color: coral;
    font-weight: 600;
    margin: 10px 0px;
    height: 30px;
    line-height: 30px;
    div{
      background: coral;
      width: 10px;
      height: 100%;
      float: left;
      margin-right: 5px;
    }
  }
}
.zone-product-list{
  border:1px solid #dadcdb;
  .product-list-img{
    img{
      width: 100%;
      height: 180px;
    }
  }
  .product-name{
    padding: 6px 5px;
  }
  .product-price{
    
    padding-left: 5px;
    padding-bottom: 10px;
    font-size: 12px;
    height: 15px;
    span{
      float: left;
    }
    span:first-child{
      color: red;
    }
    span:nth-child(2){
      text-decoration: line-through;
      padding-right: 10px;
      float: right;
    }
  }
}
</style>
