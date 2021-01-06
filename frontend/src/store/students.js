import axios from 'axios'
import {server} from "../../utils/constants";

export default {
  actions: {
    async getStudents({commit}) {
      try {
        return (await axios.get(`${server}/students/`)).data
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createStudent({commit}, student) {
      try {
        return  await axios.post(`${server}/students/`, student)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async getStudent({commit}, id) {
      try {
        return (await axios.get(`${server}/students/${id}`)).data
      } catch (e) {
        commit('setError', e)
        throw e
      }

    }
  }
}