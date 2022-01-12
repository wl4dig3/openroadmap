<template>
<v-app>
  <div>
    <h1>Inicio de sesión</h1>
    <v-main>
      <v-container class="fill-heigth" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            teal--text
                            text--accent-3
                          "
                        >
                          Iniciar Sesión
                        </h1>
                        <!-- aqui va boton para iniciar sesion por email / Google o Github -->
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>far fa-envelope</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Inicia sesión</h4>

                        <!-- formulario para iniciar sesión a traves de un componente -->
                        <v-form
                          refs="form"
                          lazy-validation
                          v-model="form.valid"
                          @submit="formIniciarSesion()"
                        >
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal-accent-3"
                            :rules="emailRules"
                            required
                            v-model="form.email"
                          />
                          <v-text-field
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="form.password"
                          />
                          <!-- FIN de formulario de inicio de sesión -->
                        </v-form>

                        <h3 class="text-center mt-3">Recuperar clave</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          type="submit"
                          color="teal accent-3 mb-2"
                          dark
                          
                          >Entrar</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hola amig@s</h1>
                        <h5 class="text-center">
                          Ingresa tu información y únete al conocimiento
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn  rounded outlined="" dark @click="step++"
                          >Registrate</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-heigth">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center displat-1">
                          Es un gusto verte de nuevo
                        </h1>
                        <h5 class="text-center mt-3">
                          Inicia Sesión y quédate con nosotros
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          class="mb-2"
                          rounded
                          outlined
                          dark
                          @click="step--"
                          >Entrar</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt12">
                        <h1
                          class="
                            text-center
                            display-2
                            teal--text
                            text--accent-3
                          "
                        >
                          Crear cuenta
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>far fa-envelope</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Usa tu email para registrarte
                        </h4>
                        <!-- Inicio de formulario para crear cuenta -->
                        <v-form
                          @submit.prevent="sendRegister()"
                          refs="form"
                          v-model="form.valid"
                        >
                          <v-text-field
                            label="Nombre"
                            name="Nombre"
                            prepend-icon="person"
                            type="text"
                            color="teal-accent-3"
                            counter="15"
                            :rules="form.nameRules"
                            required
                            v-model="form.nombre"
                          />
                          <v-text-field
                            label="Apellidos"
                            name="Apellidos"
                            prepend-icon="person"
                            type="text"
                            color="teal-accent-3"
                            counter="20"
                            :rules="form.apellidoRules"
                            required
                            v-model="form.apellido"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="email"
                            color="teal-accent-3"
                            :rules="emailRules"
                            required
                            v-model="form.email"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="form.password"
                          />
                          <v-text-field
                            id="password2"
                            label="Repetir Password"
                            name="Repetir Password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="form.repeat_password"
                            
                          />
                        </v-form>
                        <!-- FIN formulario para crear cuenta  -->
                      </v-card-text>
                      <!-- aquiel boton p para registrar por email  -->
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="teal accent-3 mb-3"
                          dark
                          :disabled="!form.valid"
                          type="submit"
                          >Registrar</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      step: 1,
      status: "authenticating",
      user: null,
      idToken: null,
      refreshToken: null,
      form: {
        valid: false,
        email: "",
        password: "",
        repeat_password: "",
        nombre: "",
        apellido: "",
      },
      nameRules: [
        (v) => !!v || "Nombre es requerido",
        (v) =>
          v.length <= 15 || "El nombre debe contener al menos 15 carácteres",
      ],
      apellidoRules: [
        (v) => !!v || "Apellido es requerido",
        (v) =>
          v.length <= 15 || "El apellido debe contener al menos 20 carácteres",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail debe ser valido",
      ],
    };
  },
  props: {
    source: String,
  },
//   components: {
//     registro: require("@/components/forms/Register.vue").default,
//     login: require("@/components/forms/Login.vue").default,
//   },

  methods: {
    async logearUsuario() {
      const response = await axios.post("login", {
        email: this.form.email,
        password: this.form.password,
      });
      console.log(response);
    },
    // metodo para enviar el formulario  de registro
      sendRegister(e){
        e.preventDefault();
        
        console.log('enviado')
    },
    // metodo para el submit del formulario iniciar sesion
    formIniciarSesion(e){
      e.preventDefault();
      console.log("formulario inicio de sesion enviado")
    },

    
    
  },
};
</script>


<style scoped>
h6 {
  margin-top: 90px;
}
</style>