<template>
  <div class="pagebody">
    <el-row :gutter="20">
        <div class="section" v-for="(item,index) in msgsList" :key="index">
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <div class="section-name">{{item.name}}</div>
                    <content-list :contentList="item.list"></content-list>
                </div>
            </el-col>
        </div>
    </el-row>
  </div>
</template>
<script>
import { mixin } from "@/mixins/index.js";
import {getAllBulletin,getBulletinForJiang,getBulletinForZhu,getBulletinForOther} from "@/api/index";
import contentList from './contentList.vue';

export default {
  mixins: [mixin],
  components: { 
      contentList,
  },
  
  data() {
    return {
      msgsList: [
        { name: "公告栏", list: [] },
        // { name: "奖学金公告", list: [] },
        // { name: "助学金公告", list: [] },
      ],
    };
  },
  created() {
      this.getBulletinList();
      // this.getBulletinForJiangList();
  },
  methods: {
    getBulletinList() {
      //获取公告栏信息
      getAllBulletin()
        .then((res) => {
          this.msgsList[0].list = res.slice(0, 4);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getBulletinForJiangList() {
    //   //获取奖学金公告栏信息
    //   let params = new URLSearchParams();
    //   params.append('type','1');
    //   getBulletinForJiang(params)
    //   .then((res) => {
    //     // this.msgsList[0].list = res.slice(0, 10);
    //     this.msgsList.list = res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // },
  },
};
</script>

<style scoped>
.pagebody {
  margin: auto;
  width: 85%;
  margin-bottom: 20px;
  border: 0px solid #000;
  height: 500px;
}
.section-name{
    font-size: 22px;
    color: #555555;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    border-bottom: 1px solid #d4d4d4;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  padding-left:8px;
  border-radius: 8px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 8px;
  height: 460px;
  padding: 15px;
  background-color: #f7f7f7;
  
}
.row-bg {
  padding: 10px 0;
  
}
</style>