<template>

  <section class="hero">
    <v-container class="my-5 search">
      <h1 class="text-center my-5 text">ENCUENTRA TU ROADMAPS</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6">
          <input
            type="text"
            placeholder=" categoria"
            class="imput rounded-xl"
          />
        </v-col>
        <v-col cols="6" md="4">
          <input
            type="text"
            placeholder=" categoria"
            class="imput ml-5 rounded-xl"
          />

        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-5 pt-5">
      <div>
        <CardHome />
      </div>

    </v-container>
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
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  margin-bottom: 3rem;
}

.search {
  padding: 6rem;
}
.imput {
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  width: 100%;
}
.text {
  color: white;
}
</style>

