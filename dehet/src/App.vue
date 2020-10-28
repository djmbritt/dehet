<template>
  <div>
  <h1>Text area.</h1>
  <br>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="What will happen."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>
