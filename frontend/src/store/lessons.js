import axios from 'axios'
import {server} from "../../utils/constants"

export default {
  actions: {
    async createLesson({commit}, lesson) {
      try {
        return await axios.post(`${server}/lessons/`, lesson)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async getLessons({commit}) {
      try {
        return (await axios.get(`${server}/lessons/`)).data
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}