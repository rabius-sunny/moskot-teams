export interface ITeam {
  name: string
  title: string
  bio: string
  thumb: string
}
export interface IActions {
  title: string
  thumb: string
}

export interface IMember {
  name: string
  email: string
  title: string
  status: string
  role: string
}

export const existingTeam: ITeam[] = [
  {
    name: 'SoftPro',
    title: 'Innovation tech partner',
    bio: 'Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement',
    thumb: '/images/team1.png'
  },
  {
    name: 'SechZoft',
    title: 'IT solution expert',
    bio: 'Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement',
    thumb: '/images/team2.png'
  },
  {
    name: 'Nextgen',
    title: 'Digital generation',
    bio: 'Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and Achievement',
    thumb: '/images/team3.png'
  }
]

export const actions: IActions[] = [
  {
    thumb: '/images/peoples.png',
    title: 'Add more people'
  },
  {
    thumb: '/images/channels.png',
    title: 'Create more channels'
  },
  {
    thumb: '/images/faqs.png',
    title: 'Open the FAQs'
  }
]

export const members: IMember[] = [
  {
    name: 'Muhammad',
    email: 'info@cleaverlearner.Com',
    title: 'Team Lead',
    status: 'Active',
    role: 'Admin'
  },
  {
    name: 'Jubayer',
    email: 'info@jubayer.Com',
    title: 'Engineer',
    status: 'Active',
    role: 'Full Stack Developer'
  },
  {
    name: 'Ab.Rofique',
    email: 'info@arofiq.Com',
    title: 'Engineer',
    status: 'Active',
    role: 'Full Stack Developer'
  },
  {
    name: 'Hassan',
    email: 'info@hasan.Com',
    title: 'Developer',
    status: 'Active',
    role: 'Full Stack Developer'
  },
  {
    name: 'Muhammad Ullah',
    email: 'info@mullah.Com',
    title: 'Developer',
    status: 'Active',
    role: 'Full Stack Developer'
  },
  {
    name: 'Samir',
    email: 'info@samir.Com',
    title: 'Developer',
    status: 'Active',
    role: 'Full Stack Developer'
  },
  {
    name: 'Robiul Alam',
    email: 'info@ralam.Com',
    title: 'Developer',
    status: 'Active',
    role: 'Full Stack Developer'
  }
]
