import HeaderBottom from '#/components/HeaderBottom'
import MemberSelection from '#/components/MemberSelection'
import Modal from '#/components/Modal'
import PrimaryButton from '#/components/PrimaryButton'
import useAuth from '#/utils/auth'
import { actions } from '#/utils/fakedata'
import { useTeamDetails } from '#/utils/hooks'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Team() {
  const router = useRouter()
  const { teamid } = router.query
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpen2, setIsOpen2] = useState<boolean>(false)
  const myteam = useTeamDetails(teamid)
  console.log('myteams', myteam)
  const { admin } = useAuth(teamid)
  return (
    <div className='team__details'>
      <div className='container'>
        <HeaderBottom
          title={teamid}
          leftBtn={
            <PrimaryButton
              primary={false}
              name='Assign a group'
              onClick={() => setIsOpen(true)}
            />
          }
          rightBtn={
            <PrimaryButton name='Add members' onClick={() => setIsOpen(true)} />
          }
        />
        <Modal
          isOpen={isOpen}
          title='Assign new member'
          body={
            <div className='acknlgmnt'>
              <h3>Group member can</h3>
              <ol>
                <li>Identify skills needed.</li>
                <li>Define clear roles.</li>
                <li>Assign a leader.</li>
                <li>Set clear goals.</li>
              </ol>
            </div>
          }
          successFunc={() => {
            setIsOpen2(true)
            setIsOpen(false)
          }}
          cancelFunc={() => setIsOpen(false)}
        />
        <Modal
          isOpen={isOpen2}
          title='Who do you want to add new members'
          body={<MemberSelection teamId={teamid} />}
          successFunc={() => {
            setIsOpen2(false)
          }}
          cancelFunc={() => setIsOpen2(false)}
        />
        <div className='team__button__container'>
          <button className='status'>Active members (07)</button>
          {admin && <button className='status'>Pending (4)</button>}
        </div>

        <div className='intro'>
          <h2>Welcome to the team!</h2>
          <p>Here are some things for you to get started...</p>
          <div className='grid__container'>
            {actions.map((item, idx) => (
              <div className='item' key={idx}>
                <Image
                  src={item.thumb}
                  height={250}
                  width={250}
                  alt='action thumbnail'
                />
                <div className='action'>
                  <button>{item.title}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
