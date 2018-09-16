<template>
  <div>
    <el-row>
      <el-col>
        <div class="prod-ct">
          <ul class="plistTo">
                <li>
                  <a title="600*900系列">
                    <div class="img" style="background-image:url(./static/image/nuvent/600x900.jpg);"></div>
                    <div class="tt">600*900系列</div>
                  </a>
                </li>
                <li>
                  <a title="800*800系列">
                    <div class="img" style="background-image:url(./static/image/nuvent/800x800.jpg);"></div>
                    <div class="tt">800*800系列</div>
                  </a>
                </li>
              </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  mounted:function(){
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .prod-ct .plistTo a .tt {
  text-align: center;
  height: 20px;
  line-height: 20px;
}
.plistTo {
    overflow: hidden;
    margin: 0;
    padding: 0;
  li {
      width: 50%;
      float: left;
      margin: 3px 0;
  }
  a {
    display: block;
    margin: 0 2px;
    font-size: 12px;
    overflow: hidden;
    text-decoration: none;
    color: #000;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 3px #bebebe;
    -moz-box-shadow: 0 1px 3px #bebebe;
    -webkit-box-shadow: 0 1px 3px #bebebe;
    .img {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50% 50%;
    }
    .tt {
      text-align: center;
      line-height: 1.6;
      text-decoration: none;
      padding: 2px 0.5em;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>