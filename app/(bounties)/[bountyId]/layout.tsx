import './globals.css'

export default function DynamicPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ background: 'red'}}>
      {children}
    </div>
  )
}
