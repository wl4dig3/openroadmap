<template>
  <v-container>
    <v-row>
      <v-col v-for="roadmap in roadmaps" :key="roadmap.id" cols="4">
        <v-card class="mx-auto my-10 border rounded-xl" >
          <template slot="progress"> </template>

          <v-img contain :src="roadmap.attributes.image" class="pic"></v-img>

          <v-card-title class="font">{{
            roadmap.attributes.title
          }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-auto">
              <div class="grey--text ms-4"></div>
            </v-row>

            <div class="my-4 text-subtitle-1 font">
              {{ roadmap.attributes.subtitle }}
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
            <button class="button font" @click="$router.push('roadmaps')">
              Click para ver mas
            </button>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      roadmaps: false,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("https://openroadmap-api-staging.herokuapp.com/roadmaps")
      .then((response) => {
        this.roadmaps = response.data?.data;
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
  width: 10rem;
  height: 8rem;

  margin: 0.5rem auto 0.2rem;
}

.border {
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
}

.button {
  color: inherit;
  font: inherit;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  background-color: #36096d;
  background-image: linear-gradient(315deg, #36096d 0%, #37d5d6 74%);
  width: 100%;
  border: none;
  padding: 1rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 1.8rem / 50%;
  transition: background-color 100ms ease-in-out,
    transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.font {
  color: blanchedalmond;
}


</style>
