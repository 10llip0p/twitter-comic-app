<template>
  <v-app>
    <v-toolbar color="cyan" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-form ref="form" v-model="isValid" lazy-validation>
          <v-text-field
            v-model="tweetUrl"
            label="最後のページのURL"
            single-line
            outline
            append-icon="search"
            required
            :rules="[
              v =>
                /^https?:\/\/twitter.com\/\w+\/status\/\d+$/.test(v) ||
                'URLが不正'
            ]"
            @click:append="fetchTweets"
          ></v-text-field>
        </v-form>
        <!--
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
-->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tweetUrl: '',
      isValid: true
    }
  },
  methods: {
    fetchTweets() {
      if (this.$refs.form.validate()) {
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
