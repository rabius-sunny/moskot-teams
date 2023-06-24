import { IMember } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MemberState {
  members: IMember[]
}
type In_actionType = 'invite' | 'accept' | 'reject'

const initialState: MemberState = {
  members: []
}
const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    addMember: (
      state: MemberState,
      action: PayloadAction<{
        userID: string
        email: string
      }>
    ) => {
      const { userID, email } = action.payload
      const member = {
        id: userID,
        name: email.split('@')[1].split('.')[0].toUpperCase(),
        email: email,
        title: 'Developer',
        role: 'Full Stack Developer'
      }
      state.members.push(member)
    },
    removeMember: (state: MemberState, action: PayloadAction<string>) => {
      const filtered = state.members.filter(
        member => member.id !== action.payload
      )
      state.members = filtered
    },

    inviteAction: (
      state: MemberState,
      action: PayloadAction<{
        memberId: string
        teamId: string
        in_actionType: In_actionType
      }>
    ) => {
      const { memberId, teamId, in_actionType: actionType } = action.payload
      const memberIndex = state.members.findIndex(
        member => member.id === memberId
      )
      if (memberIndex !== -1) {
        switch (actionType) {
          case 'invite':
            state.members[memberIndex] = {
              ...state.members[memberIndex],
              invitedTeam: teamId
            }
            break

          case 'accept':
            state.members[memberIndex] = {
              ...state.members[memberIndex],
              invitedTeam: '',
              current_team: teamId
            }
            break

          case 'reject':
            state.members[memberIndex] = {
              ...state.members[memberIndex],
              invitedTeam: '',
              current_team: ''
            }
            break

          default:
            break
        }
      }
    }
  }
})

export const { addMember, removeMember, inviteAction } = memberSlice.actions

export default memberSlice.reducer
