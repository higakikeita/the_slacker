<template>
  <div class="input-container">
    <textarea v-model="text"></textarea>
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
  }
};
</script>
