<template>
  <section class="hero mt-5">
    <v-container class="my-5 search">
      <h1 class="text-center my-5 text">ENCUENTRA TU CURSO</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6">
          <input type="text" placeholder=" categoria" class="imput" />
        </v-col>
        <v-col cols="6" md="4">
          <input type="text" placeholder=" categoria" class="imput ml-5" />
        </v-col>
      </v-row>
    </v-container>
    <div>
      <CardHome />
    </div>
  </section>
</template>

<script>
import CardHome from "@/components/Cards/CardHome.vue";
export default {
  name: "hero",
  components: { CardHome },
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 400px;
  background-color: cadetblue;
  margin-bottom: 3rem;
}
.search {
  padding: 6rem;
}
.imput {
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
}
.text {
  color: white;
}
</style>