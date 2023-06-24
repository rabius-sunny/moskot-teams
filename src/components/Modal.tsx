import React from 'react'

interface ModalProps {
  title?: string | React.ReactNode
  body: React.ReactNode
  success?: string
  cancel?: string
  successFunc: () => void
  cancelFunc: () => void
  isOpen: boolean
}

export default function Modal({
  title,
  body,
  success,
  cancel,
  successFunc,
  cancelFunc,
  isOpen
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div className='modal'>
      <div className={`modal__content ${isOpen ? 'open' : ''}`}>
        {typeof title === 'string' ? <h2>{title}</h2> : title}
        <div>{body}</div>
        <div className='button__container'>
          <button className='btn__cancel' onClick={cancelFunc}>
            {cancel ?? 'Cancel'}
          </button>
          <button className='btn__success' onClick={successFunc}>
            {success ?? 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
