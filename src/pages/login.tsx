import Modal from '#/components/Modal'
import { addMember, inviteAction } from '#/store/memberSlice'
import { addTeam } from '#/store/teamSlice'
import { signInUser } from '#/store/userSlice'
import useAuth from '#/utils/auth'
import { getUniqueID, useAppDispatch, useCheckInvitation } from '#/utils/hooks'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const LoginLogo = () => (
  <Image src='/images/loginlogo.png' height={116} width={130} alt='logo' />
)

export default function Login() {
  const auth = useAuth()
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const hasInvitation = useCheckInvitation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openForm, setOpenForm] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const textEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (textEmail.test(input)) {
      const newID = getUniqueID('member')
      dispatch(signInUser(newID))
      dispatch(addMember({ userID: newID, email: input }))
      push('/')
    } else setIsOpen(true)
  }

  // if (auth) {
  //   push('/')
  // }

  return (
    <div className='login'>
      <Modal
        body={<h3>Please enter an email with correct format!</h3>}
        successFunc={() =>
          dispatch(
            inviteAction({
              memberId: 'member-8253',
              teamId: 'member-7819',
              in_actionType: 'reject'
            })
          )
        }
        cancelFunc={() => setIsOpen(false)}
        isOpen={isOpen}
        success='OK'
      />
      <Modal
        title={
          <p>
            You have received a team invitation from the <b>Agile3 Team</b>
          </p>
        }
        body={<div>Join the Agile3 Team as a new team member</div>}
        successFunc={() => setIsOpen(false)}
        cancelFunc={() => setIsOpen(false)}
        isOpen={Boolean(hasInvitation)}
        success='OK'
      />
      <div className={`login__intro ${openForm && 'hide'}`}>
        <LoginLogo />
        <div className='login__intro__text'>
          <p>Welcome to Agile3 Team</p>
          <p>Log in with your account to continue</p>
        </div>
        <div className='actions'>
          <button onClick={() => setOpenForm(true)}>Log in</button>
          <button onClick={() => setOpenForm(true)}>Sign up</button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`login__form ${!openForm && 'hide'}`}
      >
        <LoginLogo />
        <h1>
          Welcome to <span>Back!</span>
        </h1>
        <input
          onChange={e => setInput(e.target.value)}
          required
          name='email'
          type='email'
          placeholder='Email address'
        />
        <input
          required
          name='password'
          type='password'
          placeholder='Password'
        />
        <div className='forget'>
          <a href='#'>Forgot password?</a>
        </div>
        <div>
          <button>Continue</button>
        </div>
        <div>
          <p>
            Don't have an account? <span>Sign up</span>{' '}
          </p>
        </div>
      </form>
    </div>
  )
}
