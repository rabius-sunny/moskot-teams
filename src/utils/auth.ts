import { useAppSelector } from './hooks'

export default function useAuth(teamId?: any) {
  const currentUser = useAppSelector(state => state.user.user)
  const teams = useAppSelector(state => state.team.teams)
  const selectedTeam = teams.find(team => team.id === teamId)

  const admin = selectedTeam?.creator === currentUser

  return { currentUser, admin }
}
