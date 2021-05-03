<template>
  <v-container class="text-center">
    <v-row>
      <v-col class="my-3" cols="12">
        <h1>
          {{nombrePerfil}}
        </h1>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombrePerfil: 'Nombre de perfil',
    }
  },
}
</script>