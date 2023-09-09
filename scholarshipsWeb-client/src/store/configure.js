const configure ={
    state:{
        HOST: 'http://127.0.0.1:8088', //后端端口 后台访问的根目录
        activeName:'' //当前选中的菜单名
    },
    getters:{
        activeName: state =>{
            let activeName = state.activeName
            if(!activeName){
                activeName = JSON.parse(window.sessionStorage.getItem('activeName'))
            }
            return activeName
        }
    },
    mutations:{
        setActiveName: (state,activeName) => {
            state.activeName = activeName
            window.sessionStorage.setItem('activeName',JSON.stringify(activeName))//将activeName转换成json格式，放到sessionStorage里面
        },
    }

}

export default configure