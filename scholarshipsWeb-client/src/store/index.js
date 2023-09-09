import Vue from 'vue'
import Vuex from 'vuex'

import configure from '@/store/configure';
import user from '@/store/user.';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        configure,
        user
    }

})

export default store