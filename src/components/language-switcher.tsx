'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GlobeIcon, CheckIcon } from 'lucide-react'

const languages = [
  { code: 'tr', name: 'Türkçe', englishName: 'Turkish' },
  { code: 'en', name: 'English', englishName: 'English' },
]

export default function LanguageSwitcher() {
  const t = useTranslations('language-switcher')
  const locale = useLocale()
  const pathname = usePathname()

  const currentLanguage = languages.find((lang) => lang.code === locale)

  // Function to get the new path for language switching
  const getNewPath = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-auto gap-2 px-3"
          aria-label={t('switch-language')}
        >
          <GlobeIcon className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only md:not-sr-only md:inline-block">
            {currentLanguage?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div role="menu" aria-label={t('language-selection')}>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              asChild
              className="flex items-center justify-between"
              role="menuitem"
            >
              <Link
                href={getNewPath(lang.code)}
                locale={lang.code}
                className="flex w-full cursor-pointer items-center justify-between"
                hrefLang={lang.code}
                aria-label={`${t('switch-to', { name: lang.englishName })}`}
                lang={lang.code}
              >
                {lang.name}
                {locale === lang.code && (
                  <CheckIcon
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
