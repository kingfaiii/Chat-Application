import axs from '../../Dependencies/axios/RequestController'
import { useState, ChangeEvent, useCallback } from 'react'
interface AccountPayload {
     username?: string
     password?: string
     retype?: string
}

interface AxiosParams {
     url: string
     data: object
}

interface SyntheticEvent<T> {
     currentTarget: EventTarget & T
}

export const register = async (payload: AxiosParams) => {
     try {
          const response = await axs.instancePost(payload)
          console.log(response)
     } catch (err) {
          console.log(err)
     }
}

export const Controller = () => {
     const [payload, setPayload]: [AccountPayload, any] = useState({
          username: '',
          password: '',
          retype: '',
     })

     const handleInput = useCallback(
          (e: ChangeEvent<HTMLInputElement>) => {
               const { name, value } = e.target

               setPayload({ ...payload, [name]: value })
          },
          [payload]
     )

     return { handleInput, payload }
}
