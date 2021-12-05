import axios, { AxiosInstance } from 'axios'

interface payload {
     url: string
     data?: object
     headers?: object
}
class RequestController {
     public _axiosInstance: AxiosInstance
     constructor(Axios: AxiosInstance) {
          this._axiosInstance = Axios
     }

     public async instanceGet(payload: payload) {
          try {
               const headers: string | object = payload.headers ?? {}
               const response = await this._axiosInstance.get(
                    payload.url,
                    headers
               )

               return response
          } catch (err) {
               console.log(err)
          }
     }

     public async instancePost(payload: payload) {
          try {
               const headers: object = payload.headers ?? {}
               const response = await this._axiosInstance.post(
                    payload.url,
                    payload.data,
                    headers
               )

               return response
          } catch (err) {
               console.log(err)
          }
     }

     public async instancePatch(payload: payload) {
          try {
               const headers: string | object = payload.headers ?? {}
               const response = await this._axiosInstance.post(
                    payload.url,
                    payload.data,
                    headers
               )

               return response
          } catch (err) {
               console.log(err)
          }
     }

     public async instanceDelete(payload: payload) {
          try {
               const headers: string | object = payload.headers ?? {}
               const response = await this._axiosInstance.post(
                    payload.url,
                    headers
               )

               return response
          } catch (err) {
               console.log(err)
          }
     }
}

const axiosInstance: AxiosInstance = axios.create({
     baseURL: 'http://192.168.1.8/api/v1',
})
export default new RequestController(axiosInstance)
