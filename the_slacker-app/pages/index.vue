<template>
  <div class="container">
    <div class="chats-container">
      <div class="chat-container">
        <div class="thumbnail-container">
          <img src="https://pbs.twimg.com/profile_images/1131882065337602049/0JRUGd3S_400x400.jpg" />
        </div>
        <div class="message-container">
          <div class="user-name">cohki0305</div>
          <div class="message">今日も良い天気ですね</div>
        </div>
      </div>
      <div class="chat-container">
        <div class="thumbnail-container">
          <img src="https://pbs.twimg.com/profile_images/1131882065337602049/0JRUGd3S_400x400.jpg" />
        </div>
        <div class="message-container">
          <div class="user-name">cohki0305</div>
          <div class="message">そうですねー</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

