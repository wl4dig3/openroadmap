<template>
  <v-toolbar flat>
    <v-toolbar-title>Titulo o logo</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items flat>
      <v-btn text>
        <router-link to="/">Inicio</router-link> 
      </v-btn>

      <v-btn text>
        <router-link to="/login"> Login </router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/contacto">Contacto</router-link> 
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  // data: () => ({ value: "recent" }),
};
</script>
