<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.picImg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {swiperList} from "@/assets/data/swiper.js"
  export default{
    name:'swiper',
    data(){
      return{
        swiperList:[],
      }
    },
    created(){
      this.swiperList = swiperList;
    }
  }
</script>


<style scoped>
@import url("../assets/css/swiper.css");

</style>