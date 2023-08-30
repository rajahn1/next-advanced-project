'use client'
import GlobalStyles from '@/styles/global'
import StyledComponentsRegistry from '../../lib/registry'

export const metadata = {
  title: 'React Avançado - BoilerPlate',
  description: 'Generated by create next app',
  theme_color: '#06092B'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <GlobalStyles />
      </body>
    </html>
  )
}
