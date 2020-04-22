<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
    <el-dialog title="Tips" :visible="dialogVisible" width="30%">
      <span>This is a message</span>
    </el-dialog>
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
import { db } from "~/plugins/firebase";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
export default {
  data() {
    return {
      dialogVisible: true,
      text: null
    };
  },
  methods: {
    addMessage(event) {
      if (this.keyDownedForJPConversion(event)) {
        return;
      }
      const channelId = this.$route.params.id;
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
          text: this.text,
          createdAt: new Date().getTime()
        })
        .then(() => {
          this.text = null;
        });
    },
    keyDownedForJPConversion(event) {
      const codeForConversion = 229;
      return event.keyCode === codeForConversion;
    }
  }
};
</script>
