<template>
  <section class="container">
    <div>
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        class="comic-img"
        :width="imgSize.witdh"
        :height="imgSize.height"
      />
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
      loading: true,
      images: [],
      witdh: window.innerWidth,
      height: window.innerHeight
    }
  },
  computed: {
    /** 画面の向きに応じて画像を縦幅と横幅のどちらかを基準にリサイズ */
    imgSize() {
      const isWide = this.witdh >= this.height
      return {
        witdh: isWide ? null : this.witdh,
        height: isWide ? this.height : null
      }
    }
  },
  async asyncData({ params }) {
    // TODO: エラーハンドリング
    const res = await axios.get(
      `${process.env.baseUrl}/api/tweet?id=${params.id}`
    )

    const tweetsObj = res.data
    return {
      loading: false,
      images: (arr => {
        tweetsObj.data.map(dataObj => {
          arr = arr.concat(dataObj.images)
        })
        return arr
      })([])
    }
  },
  created() {
    console.log(this.images)
  },
  mounted() {
    /** ウインドウのリサイズを検知 */
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      this.witdh = window.innerWidth
      this.height = window.innerHeight
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

.comic-img {
  display: block;
  margin: 0 auto;
}
</style>
