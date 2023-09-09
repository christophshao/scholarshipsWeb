<template>
    <div class="content-list">
        <ul style="color:#555555">
            <li class="content-item" v-for="(item,index) in contentList" :key="index">
                <div class="tiao">
                    <div class="hang1">
                        <div class="item-title">
                            <a :href="'/#/newsDetail?id='+item.id" class="lj_title">{{item.title}}</a>
                            <span class="item-author">【作者：{{item.author}}】</span>
                        </div>
                        
                        <div class="date">{{attachDate(item.createDate)}}</div>
                    </div>
                    <div class="chp">
                        {{item.news}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mixin } from "@/mixins/index.js";
    
    export default{
        name:'content-list',
        mixins: [mixin],
        props:['contentList'],
        data(){
            return{
                
            }
        }
    }
</script>
<style scoped>
    .tiao{
        margin: auto;
        width: 100%;
        margin-top: 9px;
        border: 0px solid #000;
    }

    ul {
        margin: 0;
        padding:0;
        list-style: none;
    }
    .hang1{
        width: 100%;
        height: 30px;
        border: 0px solid #000;
        color: #555555;
        font-size: 25px;
        font-weight: bold;
        font-family: 'Crete Round', Arial, sans-serif;
    }
    .item-title{
        width: 60%;
        height: 30px;
        border: 0px solid #000;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        
    }
    .item-author{
        font-size:15px;
        line-height: 30px;
    }
    .date{
        margin-right: 10px;
        border: 0px solid #000;
        height: 100%;
        float: right;
        font-size: 15px;
        line-height: 30px;
    }
    a.lj_title{
        font-family: 'Crete Round', Arial, sans-serif;
        color: #555555;
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
    }
    a.lj_title:hover{
        color: #3b3b3b;
    }

    .chp{
        margin-top: 10px;
        line-height: 1.8;
        border: 0px solid #000;
        min-height: 45px;
        text-indent: 2em;
        border-bottom: 1px solid #d4d4d4;
        /* 超出两行文字变... */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>>

</style>