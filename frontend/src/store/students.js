import axios from 'axios'
import {server} from "../../utils/constants";

export default {
  state: {
    students: []
  },
  mutations: {
    setStudents(state, students) {
      state.students = students
    }
  },
  actions: {
    async getStudents({commit}) {
      try {
        const students = (await axios.get(`${server}/students/`)).data
        commit('setStudents', students)
        return students
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createStudent({commit}, student) {
      // console.log('st', student)
      try {
        return  (await axios.post(`${server}/students/`, student)).data
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
  },
  getters: {
    activeStudents: state => {
      // console.log('state.students', state.students)
      return state.students.filter( student => student.active)
    },
    oldStudents: state => {
      return state.students.filter( student => !student.active)
    },
    allStudents: state => {
      return state.students
    }
  }
}