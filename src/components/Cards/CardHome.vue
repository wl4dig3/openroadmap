<template>
  <v-main>
    <v-row>
      <v-col v-for="cursos in info" :key="cursos.id" cols="4">
        <v-card class="mx-auto my-10 border" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="blue-grey darken-2"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img :src="cursos.imagen" class="pic"></v-img>

          <v-card-title>{{ cursos.title }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-auto">
              <div class="grey--text ms-4"></div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              {{ cursos.subtitle }}
            </div>
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="16"
            ></v-rating>
            <div></div>
          </v-card-text>

          <v-divider class="mx-10"></v-divider>

          <v-card-text> </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text> Tomar cruso </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: false,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("roadmaps.json")
      .then((response) => {
        this.info = response.data.roadmaps;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.pic {
  width: 9rem;
  height: 8rem;
}

.border {
  border: 1px solid rgb(56, 46, 46);
}
</style>