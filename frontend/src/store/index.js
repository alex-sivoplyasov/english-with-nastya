import { createStore } from 'vuex'
import students from "./students";
import axios from "axios"
import {server} from "../../utils/constants";

export default createStore({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
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
    }
  },
  modules: {
    students
  }
})
