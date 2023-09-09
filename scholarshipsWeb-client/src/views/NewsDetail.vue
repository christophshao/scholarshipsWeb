<template>
  <div>
    <div class="pagebody">
        <div class="news-title"><h1>{{msgsList.title}}</h1></div>
        <div class="news-hang">
            <div class="news-time">
                <span class="iconfont icon-rili"></span>
                {{attachDate(msgsList.createDate)}}
                
            </div>
            <div class="news-author">【作者：{{msgsList.author}}  <span style="color:#666;padding-left:5px;padding-right:5px">|</span>  {{getBulletin(msgsList.type)}}】</div>
        </div>
        <div class="news-news">{{msgsList.news}}</div>
        
    </div>
  </div>
</template>
<script>
import { getBulletinByKey } from "@/api/index.js";
import { mixin } from "@/mixins/index.js";

export default {
  mixins: [mixin],
  data() {
    return {
      newsId: '',
      msgsList: [],
    };
  },
  created() {
    this.newsId = this.$route.query.id;
    // console.log(this.$route.query.id);
  },
  created() {
    this.getBulletinByKeyList();
  },
  methods: {
    getBulletinByKeyList() {
      //获取公告栏信息
      getBulletinByKey(this.$route.query.id)
        .then((res) => {
          this.msgsList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/font");
.pagebody {
  margin: auto;
  padding: 20px;
  width: 90%;
  min-height: 800px;
  background: #f7f7f7;
  border-radius: 10px;
}
.news-title{
    margin: auto;
    width: 100%;
    border: 0px solid #000;
    color: #555555;
    font-size: 1.7em;
    line-height: 3em;
}
.news-time{
    float: left;
}
.news-author{
    float: right;
}
.news-hang{
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #aeaeae;
}
.news-news{
    margin-top: 20px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.7em;
    color: #555555;
    text-indent: 2em;
}
</style>