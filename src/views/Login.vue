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
                            class="text-center display-2 teal--text text--accent-3 my-2"
                          >
                            Iniciar Sesión
                          </h1>
                          <div class="text-center" mt-4>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>far fa-envelope</v-icon>
                            </v-btn>
                            <v-btn
                              class="mx-2"
                              fab
                              color="black"
                              outlined
                              @click="loginGoggle"
                            >
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <!-- metodo para iniciar sesion con github  -->
                            <v-btn
                              class="mx-2"
                              fab
                              color="black"
                              outlined
                              @click="loginGitHub"
                            >
                              <v-icon>fab fa-github</v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mlt-4 my-2">Inicia sesión</h4>
                          <!-- Inicio del formulario para logearse -->
                          <v-form
                            ref="form"
                            lazy-validation
                            
                          >
                            <!-- input email de inicio de sesión   -->
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
                            <!-- input password de inicio de sesión  -->
                            <v-text-field
                              id="password"
                              label="Password"
                              name="Password"
                              prepend-icon="lock"
                              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show2 ? 'text' : 'password'"
                              color="teal accent-3"
                              v-model="form.password"
                              hint="Min 6 caracteres"
                              value="wqfasds"
                              class="input-group--focused"
                              @click:append="show2 = !show2"
                              :passwRules="[
                                passwRules.required,
                                passwRules.min,
                              ]"
                            />
                            <div v-if="error">
                              <v-alert border="top" color="red lighten-2" dark>
                                alerta {{ error_msg }}
                              </v-alert>
                            </div>
                            <!-- Fin del formulario de Inicio de sesion -->
                          </v-form>
                          <div v-if="recuperar">
                            <h3 class="text-center mt-3">Recuperar clave</h3>
                          </div>
                        </v-card-text>
                        <div class="text-center mt-3">
                          <!-- este boton es el disparador para iniciar sesion  -->
                          <v-btn
                            type="submit"
                            rounded
                            color="teal accent-3 mb-2"
                            dark
                            @click="formIniciarSesion"
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
                          <!-- botón toggle para ir a formulario de registro -->
                          <v-btn rounded outlined="" dark @click="step++"
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
                          <h1 class="text-center display-1">
                            Es un gusto verte de nuevo
                          </h1>
                          <h5 class="text-center mt-3">
                            Inicia Sesión y quédate con nosotros
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <!-- boton toggle  -->
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
                            class="text-center display-2 teal--text text--accent-3"
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
                          <!-- INICIO de formulario de registro -->
                          <v-form refs="form">
                            <!-- input nombre  -->
                            <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="person"
                              type="text"
                              color="teal accent-3"
                              v-model="register.nombre"
                            />
                            <!-- input apellido  -->
                            <v-text-field
                              label="Apellidos"
                              name="Apellidos"
                              prepend-icon="person"
                              type="text"
                              color="teal-accent-3"
                              counter="20"
                              :rules="form.apellidoRules"
                              required
                              v-model="register.apellido"
                            />
                            <!-- input email  -->
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="email"
                              type="email"
                              color="teal-accent-3"
                              :rules="emailRules"
                              required
                              v-model="register.email"
                            />
                            <!-- input password -->
                            <v-text-field
                              label="Password"
                              name="Password"
                              prepend-icon="lock"
                              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show2 ? 'text' : 'password'"
                              color="teal accent-3"
                              v-model="register.password"
                              hint="Min 6 caracteres"
                              value="wqfasds"
                              class="input-group--focused"
                              @click:append="show2 = !show2"
                              :passwRules="[
                                passwRules.required,
                                passwRules.min,
                              ]"
                            />
                            <!-- input repeat password -->
                            <v-text-field
                              id="password2"
                              label="Repetir Password"
                              name="Repetir Password"
                              prepend-icon="lock"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              color="teal accent-3"
                              v-model="register.repeat_password"
                              hint="Min 6 caracteres"
                              value="wqfasds"
                              class="input-group--focused"
                              @click:append="show1 = !show1"
                              :passwRules="[
                                passwRules.required,
                                passwRules.min,
                              ]"
                            />
                            <!-- input telefono  -->
                            <v-text-field
                              label="Telefóno"
                              name="Telefóno"
                              prepend-icon="phone"
                              type="string"
                              color="teal accent-3"
                              v-model="register.telefono"
                            />
                            <div v-if="error2">
                              <v-alert border="top" color="red lighten-2" dense>
                                alerta Ey {{ error_msg }}
                              </v-alert>
                            </div>
                           
                            <!-- input foto  -->

                            <!-- fin de formulario de registro -->
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <!-- boton que dispara el metodo para hacer el registro  -->
                          <v-btn
                            rounded
                            color="teal accent-3 mb-3"
                            dark
                            
                            type="submit"
                            @click="sendRegister"
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
  data: () => ({
    step: 1,
    show1: false,
    show2: false,
    register: {
      
      email: "",
      password: "",
      repeat_password: "",
      nombre: "",
      apellido: "",
      telefono: "",
      foto: "",
    },
    form: {
      email: "",
      password: "",
      
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail debe ser valido",
    ],
    passwRules: {
      required: (value) => !!value || "Contraseña requerida",
      min: (v) => v.length >= 6 || "Min 6 caracteres",
    },
    error: false,
    error_msg: "algo salio mal",
    recuperar: false,
    error2: false,

    props: {
      source: String,
    },
  }),

  methods: {
    // metodo para el submit del formulario iniciar sesion
    formIniciarSesion(e) {
      e.preventDefault();
      const data = {
        user: {
          email: this.form.email,
          password: this.form.password,
        },
      };

      axios
        .post(
          "https://openroadmap-api-staging.herokuapp.com/users/sign_in",
          data
        )
        .then((resp) => {
          console.log("respuesta de api", resp);
          if (resp.data == "ok") {
            console.log(resp, "todo bien");
            //poner aqui el redirect
            setTimeout(() => this.redirect(), 1000);
          } else {
            this.error = true;
            this.error_msg = resp.data.error_msg;
            this.form = "";
            this.recuperar= true;
          }
        })
        .catch((error) => {
          // handle error
          alert("usuario o contraseña incorrecto");
          console.log("error 1", error);
          this.recuperar= true;
          this.form = "";
          this.error = true;
          this.error_msg = resp.data.error_msg;
        });

      // axios.post("http://localhost:3000/users/sign_in",data).
      // then((resp) => {
      //   console.log(resp)
      //   const token = resp.token;
      //   localStorage.setItem("token", token);
      // });
      // console.log("formulario inicio de sesion enviado");
    },
    // metodo para enviar el formulario  de registro
    sendRegister(e) {
      e.preventDefault();
      // debugger
      const data = {
        user: {
          email: this.register.email,
          password: this.register.password,
        },
      };
      axios
        .post("https://openroadmap-api-staging.herokuapp.com/users", data)
        .then((resp) => {
          console.log(resp);
          if (resp.data == "ok") {
            console.log("registro exitoso");
            //poner aqui el redirect
            setTimeout(() => this.redirect(), 1000);
          } else {
            this.error2 = true;
            this.error_msg = resp.data.error_msg;
          }
        })
        .catch((error) => {
          // handle error
          alert("registro invalido");
          console.log("error 1", error);
          this.register = "";
          this.error2 = true;
          this.error_msg = resp.data.error_msg;
        });

      // setTimeout(() => this.redirect(), 1000);
    },
    redirect() {
      this.$router.push({ name: "Home" });
    },
    // metodo para iniciar sesion en GitHub
    loginGitHub() {
      alert("iniciar sesion en github");
      axios.post("http://localhost:3000/users/auth/github/callback");
    },
    // metodo para iniciar sesion en Google
    async loginGoggle() {
      axios
        .get("http://localhost:3000/users/auth/google_oauth2/")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          // handle error
          console.log("hay error", error);
        });

      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
h6 {
  margin-top: 90px;
}
</style>
