import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types'

const initialState: IUser = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state: IUser, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    signOutUser: (state: IUser) => {
      state.user = null
    }
  }
})

export const { signInUser, signOutUser } = userSlice.actions

export default userSlice.reducer
