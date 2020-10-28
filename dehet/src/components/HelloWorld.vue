<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">


        <v-skeleton-loader
          v-if="loading"
          :loading="loading"
          v-bind="attrs"
          transition="scale-transition"
        ></v-skeleton-loader>
        
        <v-textarea
        v-show="loaded"
        v-bind="attrtxt"
        transition="scale-transition"
        v-model=attrtxt.textValue
        ></v-textarea>

        <p>{{ attrtxt.textValue }}</p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      loading: true,
      loaded: false,

      textContent: '',

      attrs: {
        elevation: 2,
        class: "mx-auto",
        "max-width": 500,
        loading: true,
        type: "article",
        // transition: "scale-transition"
      },

      attrtxt: {
        textValue: '',
        class: "mx-auto",
        "auto-focus": true,
        "auto-grow": true,
        clearable: true,
        counter: true,
        elevation: 1,
        "hide-details": true,
        rounded: false,
        outlined: true,
        "no-resize": true,
        
      },


    }),

    created: function() {
      const readyHandler = () => {
        if(document.readyState == 'complete'){
          setTimeout(() => {
            this.loading = false;
            this.loaded = true;
            document.removeEventListener('readystatechange', readyHandler);
          }, 1000)
        }
      };

      document.addEventListener('readystatechange', readyHandler);

      readyHandler();
    }

  }
</script>

<style lang="sass">
$skeleton-loader-loading-animation: loading 2.5s infinite !default

</style>>