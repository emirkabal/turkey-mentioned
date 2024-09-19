import { getTranslations } from 'next-intl/server'
import PopularMentionsClient from './page.client'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'popular-mentions' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const PopularMentions = () => {
  return <PopularMentionsClient />
}

export default PopularMentions
