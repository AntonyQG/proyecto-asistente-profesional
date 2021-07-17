<template lang="es">
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Asistente Profesional
        </h1>
      </v-col>

      <!-- FORMULARIO -->
      <v-col cols="12" class="mb-4">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="login"
        >

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn
            :disabled="!validate"
            color="success"
            class="mr-4"
            @click="login"
          >
            Enviar
          </v-btn>
        </v-form>

        <!-- TEST -->
        <pre>
          {{$data}}
        </pre>
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          ¿Aún no tienes cuenta?
          <a
            href="./SignUp"
          >Registrate</a>
        </p>
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          Test Logout
          <a
            href="#"
            @click="logout"
          >Logout</a>
        </p>
      </v-col>

      <!-- Dialog Box to send alert -->
    </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Login',
    data() {
      return {
        valid: true,
        activateButton: false,
        email: '',
        password: '',
        user: firebase.auth().currentUser,
        emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'Debe contener un E-mail valido',
        ],
        show1: false,
        rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Mín 8 caracteres',
          emailMatch: () => (`Correo y/o contraseña incorrectos`),
        },
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      login () {
        if (this.email == "" || this.password == "") {
          alert('Favor de completar formulario');
        } else {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              console.log(user);
              alert('Usuario conectado');
              this.$router.replace('answer')
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert('Error message: ' + errorMessage + ' Error code: ' + errorCode);
              console.log(error);
            });
        }
      },
      logout () {
        firebase.auth().signOut();
      },
    },
}
</script>