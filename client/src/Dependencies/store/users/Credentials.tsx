import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface credentialState {
     credentials: object
}

const initialState: credentialState = {
     credentials: {},
}

// Define a type for the slice state
export const credentialSlice = createSlice({
     name: 'credentials',
     initialState,
     reducers: {
          authenticated: (
               state = initialState,
               payload: PayloadAction<object>
          ) => {
               return { ...state, credentials: { ...payload } }
          },
     },
})

export const { authenticated } = credentialSlice.actions

export default credentialSlice.reducer
