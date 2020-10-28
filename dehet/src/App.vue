<template>
  <v-app>

    <!-- TopBar -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="20"
        />

        <h1>DeHet</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/djmbritt/dehet"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>


    <!-- Body -->
    <v-main>
      <HelloWorld/>
    </v-main>

    <!-- Footer -->
    <v-footer absolute>
      <v-col
        class="text-center"
        cols="12"
        max-height="10px"
        inset=true
        padless=true
      >
        Made with ❤ in Amsterdam.
      </v-col>
    </v-footer>


  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
