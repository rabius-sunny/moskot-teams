import store from '#/store'
import { useEffect, useState } from 'react'
import { AllMembers, AllTeams, IMember, ITeam, IUser } from '../../types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export interface RootState {
  member: AllMembers
  team: AllTeams
  user: IUser
}
type _type = 'member' | 'team'
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function getUniqueID(type: _type) {
  const _id = Math.floor(1000 + Math.random() * 9000)
  const uniqueID = type + '-' + _id

  return uniqueID
}

export function useCheckInvitation() {
  const user = useAppSelector(state => state.user)
  const teams = useAppSelector(state => state.team)

  const [teamId, setTeamId] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      for (const team of teams.teams) {
        if (team.pendingMembers?.some(member => member === user.user)) {
          setTeamId(team.id)
          return
        }
      }
    }
  }, [user, teams])

  return teamId
}

export function useTeamDetails(teamId: string | string[] | undefined) {
  const teams = useAppSelector(state => state.team.teams)
  const resultTeam = teams.find(team => team.id === teamId)
  return resultTeam
}
