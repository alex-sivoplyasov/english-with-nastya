import axios from 'axios'
import {server} from "../../utils/constants";

export default {
  actions: {
    async getStudents() {
      const students = (await axios.get(`${server}/students/`)).data
      // Object.keys(students).forEach( student => {
      //   return {
      //
      //   }
      // })
      // console.log(students)
      return students
    }
  }
}