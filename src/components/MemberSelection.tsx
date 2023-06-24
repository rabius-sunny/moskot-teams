import React, { useState } from 'react'
import TextInput from './TextInput'
import { useAppDispatch, useAppSelector } from '#/utils/hooks'
import { inviteAction } from '#/store/memberSlice'
import { addMemberToTeam } from '#/store/teamSlice'

export default function MemberSelection({ teamId }: any) {
  const [input, setInput] = useState<string>('')
  const members = useAppSelector(state => state.member.members)
  const dispatch = useAppDispatch()

  const sendInvitation = (memberId: string) => {
    dispatch(
      inviteAction({
        memberId,
        teamId,
        in_actionType: 'invite'
      })
    )
    dispatch(
      addMemberToTeam({
        teamId,
        memberId,
        addingType: 'pending'
      })
    )
  }

  return (
    <div className='adding'>
      <p>Add new member to join group</p>
      <TextInput
        onChange={setInput}
        legend=''
        placeholder='Type a name to assign group member'
      />
      <div className='members__list'>
        {members.map((member, idx) => (
          <div
            onClick={() => sendInvitation(member.id)}
            className='single__member'
            key={idx}
          >
            <div className='thumb'>{member.name.slice(0, 1)}</div>
            <div className='details'>
              <h6>{member.name}</h6>
              <p>{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
