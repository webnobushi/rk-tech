export const state = () => ({
  heroDisplay: [],
  inProgress: false,
})

export const actions = {
  initHeroDisplay({ state, commit }, messages) {
    if (state.heroDisplay.length === 0) {
      commit('display', messages)
    }
  },

  changeHeroDisplay({ commit }, messages) {
    commit('display', messages)
  },

  enableInProgress({ commit, }) {
    commit('toggleInProgress', true)
  },

  disableInProgress({ commit, }) {
    commit('toggleInProgress', false)
  },
}

export const mutations = {
  display(state, messages) {
    state.heroDisplay = messages
  },

  toggleInProgress(state, flag) {
    state.inProgress = flag
  },
}

