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
            v-model="name"
            :counter="30"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>

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

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Se requiere seleccionar un tipo de usuario']"
            label="Tipo de usuario"
            required
          ></v-select>

          <v-file-input
            v-if="select != null && select != 'Alumno'"
            accept=".pdf"
            truncate-length="60"
            required
            label="Añade tu CV (Debe ser en formato PDF)"
          ></v-file-input>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Debes aceptar para continuar']"
            label="Acepto los términos y condiciones"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>
        </v-form>
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          ¿Ya tienes cuenta?
          <!-- <a
            :href="loginView"
            target="_blank"
          >Inicia Sesión</a> -->
          <div>
            <router-link to="/login">Regístrate</router-link>
          </div>
          <!-- <router-view/> -->
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
        loginView: './Login.vue',
        valid: true,
        cargaArchivo: false,
        name: '',
        nameRules: [
          v => !!v || 'El nombre es requerido',
          v => (v && v.length <= 30) || 'El nombre debe de contener menos de 30 caracteres',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'Debe contener un E-mail valido',
        ],
        select: null,
        items: [
          'Alumno',
          'Profesionista',
        ],
        checkbox: false,
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
        console.log(this.$refs.form);
      },
      reset () {
        this.$refs.form.reset()
      },
    },
    mounted() {
      console.log(this.select);
    },
}
</script>