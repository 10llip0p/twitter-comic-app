<template>
  <section class="container">
    <div>
      hoge
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      tmp: null
    }
  },
  async asyncData({ params }) {
    // TODO: エラーハンドリング
    const tweetsObj = await axios.get(
      `${process.env.baseUrl}/api/tweet?id=${params.id}`
    )
    return {
      tmp: tweetsObj
    }
  },
  created() {
    console.log(this.tmp)
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
