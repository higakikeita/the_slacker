<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
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
export default {
  data() {
    return {
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
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            const doc = change.doc;
            if (change.type === "added") {
              this.messages.push({ id: doc.id, ...doc.data() });
            }
          });
        });
    },
    keyDownedForJPConversion(event) {
      const codeForConversion = 229;
      return event.keyCode === codeForConversion;
    }
  }
};
</script>
