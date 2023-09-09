<template>
    <div class="home">
        <swipper></swipper>
        <home-pagebody></home-pagebody>
        <the-footer></the-footer>
    </div>
</template>

<script>
import "../assets/icons/svg/index";
import "../router/index"
import Swipper from '@/components/Swipper';

import HomePagebody from '../components/HomePagebody.vue';
import TheFooter from '@/components/TheFooter.vue';

export default{
    name:'home',
    components:{
        Swipper,
        HomePagebody,
        TheFooter,
        
    },
    data(){
        return{
            
        }
    },
    created(){

    },
    methods:{

    }
}
</script>
<style scoped>
    @import '../assets/css/home.css';

</style>

