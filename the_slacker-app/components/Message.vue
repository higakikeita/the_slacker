<template>
  <div class="container">
    <div class="chats-container">
      <div class="chat-container">
        <div class="thumbnail-container">
          <img v-bind:src="message.user.thumbnail" />
        </div>
        <div class="message-container">
          <div class="user-name">{{ displayName }}</div>
          <div class="message">{{ message.text }}</div>
        </div>
      </div>
      <div class="chat-container">
        <!-- <div class="thumbnail-container">
          <img v-bind:src="message.user.thumbnail" />
        </div>-->
        <div class="message-container">
          <!-- <div class="user-name">cohki0305</div> -->
          <!-- <div class="message">そうですねー</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.chats-container {
  padding: 16px;
}

.chat-container {
  display: flex;
  padding: 8px;
}

.thumbnail-container {
  margin-right: 16px;
}

.thumbnail-container img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.user-name {
  font-weight: bold;
}
</style>
<script>
export default {
  props: ["message"],
  computed: {
    displayName() {
      return `@${this.message.user.name}`;
    }
  }
};
</script>
