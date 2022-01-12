<template>
  <div>
    <v-main>
      <div class="text-center">
        <v-btn class="mx-2" fab color="black" outlined>
          <v-icon class="material-icons" @click="logout">logout</v-icon>
        </v-btn>
      </div>
      <h1 class="pag text-center">Pagina de redireccionamiento</h1>
    </v-main>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      //.then(() => this.$router.replace("login"));
      alert("estas fuera");
    },
  },
};
</script>

<style scoped>
.pag {
  margin-top: 50px;
}
</style>