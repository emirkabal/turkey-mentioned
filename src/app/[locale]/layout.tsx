import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import Header from '@/components/header'
import LanguageSwitcher from '@/components/language-switcher'

const inter = Inter({
  style: 'normal',
  preload: true,
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metedata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.className} dark antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="fixed bottom-0 right-0 p-6">
            <LanguageSwitcher />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
