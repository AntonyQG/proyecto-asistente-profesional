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
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          ¿Aún no tienes cuenta?
          <a
            href="./SignUp"
          >Registrate</a>
          <!-- <router-link to="/signup">Regístrate</router-link> -->
          <!-- </router-view> -->
        </p>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data() {
      return {
        valid: true,
        email: '',
        emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'Debe contener un E-mail valido',
        ],
        show1: false,
        password: '',
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
    },
}
</script>