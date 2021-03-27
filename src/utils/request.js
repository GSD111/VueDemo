import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'https://www.fastmock.site/mock/900f33785105ab98e7a223a9a98703dd/vue3'
//   timeout: 10000
// })

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then((response) => {
      baseURL: 'https://www.fastmock.site/mock/900f33785105ab98e7a223a9a98703dd/vue3'
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}
