<template>
  <div class="the-header">
    <div class="header-logo" @click="goHome">
        <svg class="icon">
            <use xlink:href="#icon-school" ></use>
        </svg>
        <span>SCHOOL</span>
    </div>
    <div class="header-menu">
        <ul class="navbar">
          <li :class="{active:item.name == activeName}" v-for="item in navMsg" :key="item.path" @click="goPage(item.path,item.name)">
            {{item.name}}
          </li>
        </ul>
    </div>
    
  </div>
</template>

<script>
  import{mapGetters} from "vuex"
  import {navMsg} from "@/assets/data/header.js"
  export default {
    name:'the-header',
    data() {
      return {
        navMsg:[],
      };
    },
    created(){
      this.navMsg = navMsg;
    },
    computed:{
      ...mapGetters([
        'activeName'
      ])
    },
    methods: {
      goHome(){
          this.$router.push({path: "/"});
      },
      goPage(path,name){
        this.$store.commit('setActiveName',name);
        this.$router.push({path: path});
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/css/icon.css";
    .the-header{
        margin-bottom: 10px;
        width: 100%;
        height: 65px;
        border: 0px solid #000;
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.32)
    }
    .header-logo{
        float: left;
        margin-left: 100px;
        border: 0px solid #000;
        width: 180px;
        height: 60px;
    }
    .header-logo span{
      display: block;
      float: right;
      line-height: 65px;
      border: 0px solid #000;
      color: #95d2f6;
      
      font-size: 25px;
      font-weight: bold;
    }

    .header-menu{
      width: 50%;
      height: 60px;
      border: 0px solid #000;
      display: block;
      float: left;
    }
    
    .header-menu ul li{
      display: block;
      list-style: none;
      float: left;
      width: 100px;
      text-align: center;
      color: #8d9096;
      cursor: pointer;
      border: 0px solid #000;
      height: 40px;
      font-weight: 400;
    }
      .header-menu ul :first-child{
        border-bottom: 0px solid #4a90e2;
      }
    .header-menu ul :hover{
      color: #4a90e2;
      border-bottom: 2px solid #4a90e2;

    }
</style>