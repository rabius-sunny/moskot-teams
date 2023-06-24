import HeaderTop from './HeaderTop'

export default function Layout({
  children,
  className
}: {
  children: React.ReactNode
  className: any
}) {
  return (
    <div className={className}>
      <HeaderTop />
      <section>{children}</section>
    </div>
  )
}
