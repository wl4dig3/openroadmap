<template>
<div>
    <h1>Contacto</h1>
<v-content>
    <v-container class="fill-heigth" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">  
                <v-card class="elevation-12">
                    <v-window v-model="step"> 
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-card-text class="mt-12">
                                        <h1 class="text-center display-2 teal--text text--accent-3">Iniciar Sesión</h1>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="4"></v-col>

                                
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">

                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-content>

</div>
</template>
<script>

export default {
    data: () => ({
        step: 1
    }),
    props: {
        source: String
    }
        
    
}
</script>


<style scoped>
h1 {
  margin-top: 90px;
}
</style>