import { createStore } from 'vuex'
import students from "./students";
import lessons from "./lessons";
import axios from "axios"
import {server} from "../../utils/constants";

const store = createStore({
  state: {
    info: null,
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setInfo(state, info) {
      state.info = info
    }
  },
  actions: {
    async fileUpload({commit}, formData) {
      try {
        return await axios.post(`${server}/files`, formData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    setTitle({commit}, title) {
      const info = {
        title
      }
      commit('setInfo', info)
    }
  },
  getters: {
    info: s => s.info
  },
  modules: {
    students, lessons
  }
})

export default store