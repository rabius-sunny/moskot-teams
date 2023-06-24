export interface IMember {
  id: string
  name: string
  email: string
  title: string
  role: string
  current_team?: string
  invitedTeam?: string
}

export interface ITeam {
  id: string
  name: string
  category: string
  creator: string | null
  members: string[]
  pendingMembers: string[]
}

// export type IUser = string | null
export interface IUser {
  user: string | null
}

export interface AllTeams {
  teams: ITeam[]
}
export interface AllMembers {
  members: IMember[]
}
