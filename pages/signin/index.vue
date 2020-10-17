<template>
  <div>hoge</div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const oauthParams = await axios.get(`${process.env.baseUrl}/api/signin`)
    return {
      oauthUrl: oauthParams.data.oauth_url,
      oauthTokenSecret: oauthParams.data.oauth_token_secret
    }
  },
  mounted() {
    console.log(this.oauthTokenSecret)
    this.$store.commit('addOauthSecret', this.oauthTokenSecret)
    console.log(this.$store.state.oauthTokenSecret)
    // window.location.href = this.oauthUrl
  }
}
</script>
