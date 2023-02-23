export default function SimplePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ background: 'blue'}}>
      {children}
    </div>
  )
}
