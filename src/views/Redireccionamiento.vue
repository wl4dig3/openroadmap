<template>
  <div>
    <v-main>
      <div class="text-center">
      <v-btn class="mx-2" fab color="black" outlined>
        <v-icon class="material-icons" @click="logout">logout</v-icon>
      </v-btn>

      </div>
      <h1 class="pag text-center">Roadmaps</h1>
    </v-main>
  </div>
</template>

<script>
export default {
  methods: {
    // HACK: Aqui se mete el request del google
    async logout(){
      //const result = this.$gAuth.signOut();
      console.log('result', result);
      alert('Vuelve pronto')
      this.$router.replace("/");
    },
  },
}
</script>

<style scoped>
.pag {
  margin-top: 50px;
}
</style>