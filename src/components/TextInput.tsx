interface IProp {
  legend: string
  placeholder: string
  onChange: Function
}

export default function TextInput({ legend, placeholder, onChange }: IProp) {
  return (
    <div className='text__input'>
      <div className='legend'>{legend}</div>
      <div>
        <input
          onChange={e => onChange(e.target.value)}
          type='text'
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
