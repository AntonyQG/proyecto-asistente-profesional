<template lang="">
  <v-container class="text-center">
    <v-row>
      <v-col class="my-3" cols="12">
        <h1>
          Formular Pregunta
        </h1>
      </v-col>

      <!-- FORMULARIO -->
      <v-col cols="12" class="mb-4">
        <v-form
          ref="form"
          v-model="valid"
        >

          <v-text-field
            label="Título"
            hint="Sé específico e imagina que estás haciendo la pregunta a otra persona"
            :rules="[rules.required]"
          ></v-text-field>

          <v-textarea
            solo
            name="input-7-4"
            label="Cuerpo"
            hint="Incluye toda la información que alguien necesitaría para responder tu pregunta"
            counter
            :rules="[rules.required]"
          ></v-textarea>

          <v-select
            :items="etiquetas"
            label="Escoge una etiqueta para tu pregunta"
            dense
            solo
            :rules="[rules.required]"
          ></v-select>

          <v-btn
          :disabled="!valid"
            color="info"
            class="mr-4"
          >
            Publica tu pregunta
          </v-btn>
        </v-form>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
      cuerpo: '',
      etiquetas: ['Desarrollo', 'Redes', 'Seguridad', 'Videojuegos', 'Cloud'],
      valid: true,
      rules: {
        required: value => !!value || 'Requerido.',
      },
    }
  },
}
</script>