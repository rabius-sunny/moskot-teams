import { existingTeam } from '#/utils/fakedata'
import Image from 'next/image'

export default function Teams() {
  return (
    <div className='teams'>
      {existingTeam.map((team, idx) => (
        <div className='team' key={idx}>
          <Image height={83} width={83} src={team.thumb} alt='team thumbnail' />
          <h3>{team.name}</h3>
          <h6>{team.title}</h6>
          <p>{team.bio}</p>
        </div>
      ))}
    </div>
  )
}
