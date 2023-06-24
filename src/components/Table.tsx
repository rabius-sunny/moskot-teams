import { members } from '#/utils/fakedata'

export default function Table() {
  return (
    <div className='table__container'>
      <div className='row header'>
        <div className='column'></div>
        <div className='column'>Name</div>
        <div className='column'>Title</div>
        <div className='column'>Status</div>
        <div className='column'>Role</div>
        <div className='column'></div>
      </div>

      {members.map((item, idx) => (
        <div className='row body' key={idx}>
          <div className='column'>
            <div className='thumb'>{item.name.slice(0, 1).toUpperCase()}</div>
          </div>
          <div className='column'>
            <h2>{item.name}</h2>
            <small>{item.email}</small>
          </div>
          <div className='column'>{item.title}</div>
          <div className='column'>{item.status}</div>
          <div className='column'>{item.role}</div>
          <div className='column'>
            <span>+</span>
            <span>+</span>
          </div>
        </div>
      ))}
    </div>
  )
}
