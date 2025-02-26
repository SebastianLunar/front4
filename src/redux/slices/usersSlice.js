import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  registeredUsers: []
}

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.registeredUsers = action.payload
    }
  }
})

export const { getUsers } = usersReducer.actions
export default usersReducer.reducer
