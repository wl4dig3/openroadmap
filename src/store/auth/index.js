import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
  },
  mutations: {},
  actions: {
    //   async llamadaApi(){
    //       const response = await axios.post('register', {
    //           nombre: this.nombre,
    //           apellido: this.apellido,
    //           email: this.email,
    //           password: this.password,
    //           password_confirm: this.password_confirm
    //       });
    //       console.log(response)
    //       this.router.push('/login')
    //   }
  },
  namespaced: true,
});
