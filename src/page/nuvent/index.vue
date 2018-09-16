<template>
  <div class="nuvent">
     <div class="block">
      <el-carousel width='100%' height="250px" arrow="always" indicator-position="none">
        <el-carousel-item v-for="(item,index) in flowInfo.list" :key="index">
          <img class='banner' v-bind:src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-form class='form' :inline="true">
      <div class='title'>9月24日湖北【情浓金秋·放价约惠】纽芬特省级联动</div>
      <el-row>
        <el-col :span='24'>
          <el-form-item label="热门指数">
            <el-rate v-model="flowInfo.Star" :disabled='true' :colors="['red', 'red', 'red']"></el-rate>
          </el-form-item>
          <el-form-item label="" style="float: right;">
            <i class="el-icon-view"></i><span style='color: #333;'>7000</span>人已浏览
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='24' style='text-align: center;'>
          <span class='Countdown'>
            距活动结束还有
            <span>{{flowInfo.days}}</span>
            天<span>{{flowInfo.hours}}</span>
            时<span>{{flowInfo.minutes}}</span>
            分<span>{{flowInfo.seconds}}</span>秒
          </span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='24'>
          <div class="msg">
            <div>活动时间：<span>2018年08月24日-09月24日</span></div>
            <div>
              <div style="float:left;">联系电话：<span><a href="tel:13972791591">13972791591</a></span></div>
              <div style="float:right;"><span><i class="el-icon-arrow-right"></i></span></div>
            </div>
            <div>活动地址：<span>湖北省大冶市罗家桥中亿万美吉特瓷砖区纽芬特大理石瓷砖</span></div>
          </div>
        </el-col>
      </el-row> 
      <el-row>
        <el-col :span='24'>
          <div >
            <i class='el-icon-d-arrow-right'></i>
            <a href='http://www.newfindtc.com/m/?p=40' style='border-bottom: 1px solid #5e6d82;'>点击查看【品牌介绍】纽芬特陶瓷·中国十大品牌</a>
          </div>
        </el-col>
      </el-row> 
    </el-form>
    <div  style='margin-bottom: 60px;'>
      <div class="tab">
        <div  class="Event-Details" :class='{active:flowInfo.tabView==1}' @click="tabChange(1)">活动详情</div>
        <div  class="Registration-gift" :class='{active:flowInfo.tabView==2}' @click="tabChange(2)">产品介绍</div>
      </div>
      <div v-if="flowInfo.tabView==2" >
        <el-collapse v-model="activeNames" accordion>
        <!--  <el-collapse-item title="通体大理石瓷砖" name="1" v-if="flowInfo.tabView==20">
          </el-collapse-item>
          <el-collapse-item title="通体大板600*1200" name="2" v-if="flowInfo.tabView==20">
          </el-collapse-item>
          <el-collapse-item title="现代仿古砖" name="3" v-if="flowInfo.tabView==20">
          </el-collapse-item>  -->
          <el-collapse-item title="大理石瓷砖系列" name="4">
              <first></first>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    
    <el-row>
        <el-col :span='24'>
            <div class='call'>
              <div class="call1-iphone"><a href="tel:13972791591">电话咨询</a></div>
            </div>
        </el-col>
      </el-row> 
  </div>
</template>

<script>
let _ordertimer = null;
export default {
  data () {
    return {
      activeNames:['4'],
      flowInfo:{
        list:[
          /* {
            id:1,
            url:'./static/image/nuvent/1.jpg'
          }, */
          {
            id:2,
            url:'./static/image/nuvent/2.jpg'
          },
          {
            id:2,
            url:'./static/image/nuvent/3.jpg'
          }
        ],
        Star:5,
        days:null,
        hours:null,
        minutes:null,
        seconds:null,
        tabView:1
      },
    }
  },
  mounted:function(){
      _ordertimer = setInterval(()=>{this.leftTimer(new Date('2018-9-25 00:00:00'))}, 1000);
  },
  methods:{
       // 倒计时
      leftTimer:function(enddate) {
        let leftTime = (new Date(enddate)) - new Date(); //计算剩余的毫秒数
        let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
        let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        this.flowInfo.days = this.checkTime(days);
        this.flowInfo.hours = this.checkTime(hours);
        this.flowInfo.minutes = this.checkTime(minutes);
        this.flowInfo.seconds = this.checkTime(seconds);
        //if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0) //this.time= days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          window.clearInterval(_ordertimer);
          _ordertimer = null;
        }
      },
      checkTime:function(i) { //将0-9的数字前面加上0，例1变为01
        if (i < 10) {
        i = "0" + i;
        }
        return i;
      },
      tabChange:function(tab){
        this.flowInfo.tabView = tab;
      }
  },
  components:{
    first:resolve => require(['@/page/nuvent/first'],resolve),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nuvent{
  font-size: 14px;
  .banner{
    width: 100%;
    height:100%;
  }
  .form{
    margin:0px 12px;
    .title{
      margin: 8px 0px;
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
    .Countdown{
      color: red;
      font-size: 18px;
      span{
        background: gray;
        color: white;
        padding:2px 2px;
        border-radius:3px; 
      }
    }
    .msg{
      background: #f0f0f0;
      border-radius: 4px;
      padding: 10px;
      margin: 10px 0;
      div{
        height:32px;
        line-height: 32px;
        span{
          color: #333;
        }
      }
      div:last-child{
        height:100%;
        line-height: 32px;
      }
    }
  }
}
.tab{
    text-align: center;
    margin: 10px auto;
    width: 164px;
    height: 32px;
    color: #000;
      div{
        width: 80px;
        height: 32px;
        line-height: 32px;
        float: left;
        border: 1px solid red;
      }
}
.Event-Details{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.Registration-gift{
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.active{
  background: red;
  color: white;
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
  margin-bottom: 5px;
}
.call{
    position: fixed;
    bottom: 0;
    width: 100%;
}
.call1-iphone {
    text-align: center;
    width: 80%;
    background: rgb(132, 226, 11);
    height: 32px;
    line-height: 32px;
    border-radius: 8px;
    margin: 15px auto;
    font-size: 16px;
    a{
      color: white;
    }
}
</style>