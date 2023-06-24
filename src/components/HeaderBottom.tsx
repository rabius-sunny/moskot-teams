import React from 'react'

interface IProp {
  title: any
  leftBtn?: React.ReactNode
  rightBtn: React.ReactNode
  exerpt?: string
}

export default function HeaderBottom({
  title,
  leftBtn,
  rightBtn,
  exerpt
}: IProp) {
  return (
    <div className={`header__bottom ${exerpt && 'mb-8'}`}>
      <div>
        <h3>{title}</h3>
        {exerpt && <p>{exerpt}</p>}
      </div>
      <div className='button__container'>
        <div>{leftBtn}</div>
        <div>{rightBtn}</div>
      </div>
    </div>
  )
}
