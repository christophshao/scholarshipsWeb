export const mixin ={
    methods:{
        message(title,type){
            this.$message({
                message:title,
                type: type
            })
            
        },
        // 获取图片地址
        attachImageUrl(){
            return srcUrl? this.$store.state.configure.HOST + srcUrl: '../assets/1.png';
        },
        // 根据相对地址获取绝对地址
        getUrl(url){
            return `${this.$store.state.HOST}/${url}`
        },
        // 转变成对应的性别的中文意思
        getSex(value){
            if(value == 0){
                return "女";
            }
            if(value == 1){
                return "男";
            }
            if(value == 2){
                return "组合";
            }
            if(value == 3){
                return "未知";
            }

        },
        //获取全格式日期 转变格式
        attachBirth(val){
            return String(val).substr(0,10);
        },
        //获取年月日 日期 转变格式
        attachDate(val){
            return String(val).substr(0,10);
        },
        // 上传图片成功之后要做的工作
        handleAvatorSuccess(res){
            let _this = this;
            if(res.code == 1){
               _this.getData();
                _this.$message({
                    duration:2000,
                    message:'上传成功！',
                    type: 'success'
                });
            }else{
                _this.$message({
                    duration:2000,
                    message:'上传失败l！',
                    type:'error'
                });

            }
        },

        // 转换奖学金类别
        getJiangXueJin(value){
            if(value == 1){
                return "一等奖学金";
            }
            if(value == 2){
                return "二等奖学金";
            }
            if(value == 3){
                return "三等奖学金";
            }
            if(value == 4){
                return "省政府奖学金";
            }
            if(value == 5){
                return "国家奖学金";
            }
            if(value == 6){
                return "校长奖学金";
            }

        },
        // 助学金类别转换
        getZhuXueJin(value){
            if(value == 1){
                return "一等助学金";
            }
            if(value == 2){
                return "二等助学金";
            }
            if(value == 3){
                return "国家励志奖学金";
            }
            

        },
        // 审核状态转换
        getCheck(value){
            if(value == -1){
                return "未审核";
            }
            if(value == 0){
                return "未通过";
            }
            
            if(value == 1){
                return "通过";
            }
            

        },
        // 贫困类型转换
        getPoorType(value){
            if(value == 1){
                return "一般贫困";
            }
            if(value == 2){
                return "特别贫困";
            }
        },
        // 公告栏类型转换
        getBulletin(value){
            if(value == 0){
                return "其它公告";
            }
            if(value == 1){
                return "奖学金公告";
            }
            
            if(value == 2){
                return "助学金公告";
            }
            if(value == 3){
                return "家庭经济困难生公告";
            }
            

        },
    }
}