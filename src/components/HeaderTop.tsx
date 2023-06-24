// import Link from 'next/link'
import Logo from './Logo'

interface INavItems {
  title: string
  link: string
}

export default function HeaderTop() {
  return (
    <div className='header__top'>
      <div className='container nav'>
        <div>
          <Logo />
        </div>
        <div className='items__container'>
          <div className='items'>
            {navItems.map((item: INavItems, idx: number) => (
              <a key={idx} /* href={item.link} */ className='item'>
                {item.title}
              </a>
            ))}
          </div>
          <div className='options'>
            <div className='option'></div>
            <div className='option'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const navItems: INavItems[] = [
  {
    title: 'Availability',
    link: '/availability'
  },
  {
    title: 'Integration',
    link: '/integratioin'
  },
  {
    title: 'Community',
    link: '/community'
  }
]
