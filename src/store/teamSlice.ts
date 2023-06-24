import { ITeam, IMember } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TeamState {
  teams: ITeam[]
}
type AddingType = 'add' | 'pending'

const initialState: TeamState = {
  teams: []
}

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam: (state: TeamState, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload)
    },
    removeTeam: (state: TeamState, action: PayloadAction<string>) => {
      state.teams = state.teams.filter(team => team.id !== action.payload)
    },
    addMemberToTeam: (
      state: TeamState,
      action: PayloadAction<{
        teamId: string
        memberId: string
        addingType: AddingType
      }>
    ) => {
      const { teamId, memberId, addingType } = action.payload
      const team = state.teams.find(team => team.id === teamId)
      if (team) {
        switch (addingType) {
          case 'add':
            const memberExists = team.members.find(item => item === memberId)
            if (!memberExists) {
              team.members.push(memberId)
            }
            break

          case 'pending':
            const memberPending = team.pendingMembers?.find(
              item => item === memberId
            )
            if (!memberPending) {
              team.pendingMembers?.push(memberId)
            }
            break

          default:
            break
        }
      }
    }
  }
})

export const { addTeam, removeTeam, addMemberToTeam } = teamSlice.actions

export default teamSlice.reducer
