<template>
  <div>hoge</div>
</template>

<script>
export default {
  asyncData({ query }) {
    return {
      oauthToken: query.oauth_token,
      oauthVerifier: query.oauth_verifier
    }
  },
  mounted() {
    // TODO アクセストークン取得処理
    console.log(this.oauthToken)
    console.log(this.oauthVerifier)
  }
}
</script>
