export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Admin Cabeçalho</div>
      {children}
    </div>
  )
}
