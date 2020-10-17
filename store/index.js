export const state = () => ({
  oauthTokenSecret: 1
})

export const mutations = {
  addOauthSecret(state, secret) {
    if (secret) {
      state.oauthTokenSecret = secret
    }
  }
}
