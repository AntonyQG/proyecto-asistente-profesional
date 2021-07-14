<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Listado de preguntas
        </h1>
      </v-col>
    </v-row>

    <!-- TABLA -->
    <v-card>
      <v-card-title>
        Preguntas
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar pregunta"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
      ></v-data-table>
    </v-card>
    <v-col class="mb-4">
      {{$data}}
      <p class="subheading font-weight-regular">
        Test para ver lo del logout
        <a
          href="#"
          @click="logout"
        >Logout</a>
      </p>
    </v-col>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      user: firebase.auth().currentUser.email,
      search: '',
      items: [
        {
          preguntas: 'Test Preguntas',
          etiquetas: 'Test Etiquetas'
        },
        {
          preguntas: 'Test Preguntas 2',
          etiquetas: 'Test Etiquetas 2'
        },
        {
          preguntas: 'Test Preguntas 3',
          etiquetas: 'Test Etiquetas 3'
        },
      ],

    }
  },
  computed: {
    headers () {
      return [
        {
          text: 'Preguntas',
          align: 'start',
          value: 'preguntas',
        },
        {
          text: 'Etiqueta',
          align: 'start',
          value: 'etiquetas',
        },
      ]
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut().then((user) => {
        // Se ha completado el logout
        this.$router.replace('Login');
        console.log("Usuario: ", user.email);
      }).catch(() => {
        // Ocurrió un error
        alert('Ocurrió un error al intentar salir del sistema');
      });
    }
  },
}
</script>