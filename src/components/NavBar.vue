<template lang="">
  <div>
    <v-toolbar
      dark
      prominent
      style="position: -webkit-sticky;"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Asistente Médico</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>


    <!-- Menu Lateral -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>          
        </v-list-item-avatar>
        <!-- <v-list-item-icon>
          <v-icon>{{ perfil.icon }}</v-icon>
        </v-list-item-icon> -->

        <v-list-item-content>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      perfil: [{icon: 'mdi-account-box'}],
      items: [
        { title: 'Inicio', icon: 'mdi-view-dashboard' },
        { title: 'Preguntas', icon: 'mdi-forum' },
      ],
    }
  },
}
</script>