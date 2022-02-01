<template>
  <v-app>
    <v-app-bar
    app
    flat
    >

    <Navbar />
    </v-app-bar>
<router-view></router-view>
    
  </v-app>
</template>



<script>
import Navbar from "@/components/Navigation/Navbar.vue";

export default {
  components: { Navbar },
  data: () => ({
    //
    
  }),
};
</script>

