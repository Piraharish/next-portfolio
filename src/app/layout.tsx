export const metadata = {
  title: 'Admin',
  description: 'Admin page for Piraharish Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
