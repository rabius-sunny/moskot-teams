interface IButtonProps {
  name: string
  primary?: boolean
  onClick: () => void
}

export default function PrimaryButton({
  name,
  primary = true,
  onClick
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button ${
        primary ? 'bg-primary text-white' : 'bg-transparent text-primary'
      }`}
    >
      {name}
    </button>
  )
}
