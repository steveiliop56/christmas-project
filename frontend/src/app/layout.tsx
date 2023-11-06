import "./globals.css"

export const metadata = {
  title: "Christmas Project",
  description: "My 2023-2024 Christmas Project!",
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
