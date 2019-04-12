<template>
  <section class="container">
    <div>
      <form
        style="display: flex; justify-content: center"
        @submit.prevent="fetchTweets"
      >
        <vs-input
          v-model="tweetUrl"
          label-placeholder="最後のページのURL"
          style="display: inline"
        />
        <vs-button color="success" type="filled submit">見る</vs-button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tweetUrl: '',
      isInValid: true
    }
  },
  methods: {
    fetchTweets() {
      const tweetId = this.tweetUrl.match(
        /^https?:\/\/twitter.com\/\w+\/status\/(\d+)$/
      )
      if (!tweetId) {
        // TODO: バリデーション
        return
      }
      this.$router.push({
        path: `/tweet/${tweetId[1]}`
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
