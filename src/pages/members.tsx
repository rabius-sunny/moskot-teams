import HeaderBottom from '#/components/HeaderBottom'
import PrimaryButton from '#/components/PrimaryButton'
import Table from '#/components/Table'
import { useState } from 'react'

export default function Members() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='members'>
      <div className='container'>
        <HeaderBottom
          title='Team name'
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
        <div className='team__button__container mb-8'>
          <button className='status'>Active members (07)</button>
          <button className='status'>Pending (4)</button>
        </div>
        <Table />
      </div>
    </div>
  )
}
