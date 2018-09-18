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
            <!-- <div>
              <div style="float:left;">联系电话：<span><a href="tel:13972791591">13972791591   黄先生</a></span></div>
              <div style="float:right;"><span><i class="el-icon-arrow-right"></i></span></div>
            </div> -->
            <div>
              <a href="tel:13972791591" class="call-huang">
                <span style="float:left;">联系电话：13972791591   黄先生</span>
                <span style="float:right;"><i class="el-icon-arrow-right"></i></span>
                </a>
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
      <div class='event-Details' v-if="flowInfo.tabView==1">
        <div id="test"><h3>情浓金秋，放价约惠</h3></div>
        <div>活动政策</div>
        <div>1>厂价直供。正宗专业大理石瓷砖。5个款式，一户家装无论你装修什么风格，都能如你所愿，<span style='color:red;'>特价68元/片</span>《规格800x800,600-900》</div>
        <div>2>放价活动时间,纽芬特大理石瓷砖<span style='color:red;'>全场3折</span>《特价除外》</div>
        <div>3>客户下单全屋购买纽芬特大理石瓷砖。可享受活动价和总价再优惠<span style='color:red;'>5%</span>《特价除外》</div>
        <div>4>报团价，折上折，3户以上同时购买纽芬特大理石瓷砖，可享受折扣总价再优惠<span style='color:red;'>8%</span>《特价除外》</div>
        <div>5>活动期间：<br>下单定金<span style='color:red;'>满5000元</span>《送纽芬特专供保温杯一个》<br>下单定金<span style='color:red;'>满1000元</span>《送羽丝绒枕一对，专供保温杯一个》</div>
        <div>6>活动期间，妆发指定微信朋友圈点赞数满99个，送礼品纽芬特专供雨伞1把或纽芬特广告衫1件</div>
        <div>7>开业尊享贴心服务，<span style='color:red;'>免费测量，免费瓷砖设计，免费送货上楼</span>等全方位服务</div>
        <div>8>活动最终解释权归纽芬特大理石瓷砖店所有</div>
      </div>
      <div v-if="flowInfo.tabView==2">
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
    
    height: 32px;
    line-height: 32px;
    border-radius: 8px;
    margin: 15px auto;
    font-size: 16px;
    a{
      color: white;
      display: block;
      border-radius: 8px;
      background: rgb(132, 226, 11);
    }
}
.event-Details {
    margin: 0 12px;
    div{
      color: gray;
    }
}
#test{animation:change 10s linear 0s infinite;font-size:18px;font-weight:600;text-align: center;}
@keyframes change{0%   {color:gray;}25%{color:#ff0;}50%{color:#f60;}75%{color:#cf0;}100% {color:#f00;}}
</style>