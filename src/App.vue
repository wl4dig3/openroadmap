<template>
  <v-app>
    <v-app-bar
    app
    flat
    >

    <Navbar />
    </v-app-bar>
<router-view></router-view>
    <v-main>
      <CardHome />
    </v-main>
  </v-app>
</template>



<script>
import Navbar from "@/components/navigation/Navbar.vue";
import CardHome from '@/components/Cards/CardHome.vue'

export default {
  components: { Navbar, CardHome },
  data: () => ({
    //
    
  }),
};
</script>

