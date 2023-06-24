import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image src='/logo.svg' alt='Site Logo' width={115} height={41} />
    </div>
  )
}
