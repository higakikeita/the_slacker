<template>
  <div class="input-container">
    <textarea v-model="text"></textarea>
    <button v-on:click="checkTextValue">値を確認！</button>
  </div>
</template>
<style scoped>
.input-container {
  padding: 10px;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      text: "テスト"
    };
  },
  methods: {
    checkTextValue() {
      console.log(this.text);
    }
  }
};
</script>
