<template>
  <v-container class="text-center">
    <v-row>
      <v-col class="my-3 col-md-8 col-sm-12">
        <h1>
          {{ nombrePerfil }}
        </h1>

        <!-- TABLA -->
        <v-card>
          <v-card-title>
            Preguntas hechas por ti
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
      </v-col>

      <v-col class="my-3 col-md-4 col-sm-12">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            {{ nombrePerfil }}
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="blue lighten-2" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombrePerfil: "Nombre de perfil",
      show: false,
      items: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Preguntas",
          align: "start",
          value: "preguntas",
        },
        {
          text: "Etiqueta",
          align: "start",
          value: "etiquetas",
        },
      ];
    },
  },
};
</script>
