'use client'

import { Button } from '@/components/ui/button'
import SearchBar from '@/components/ui/search-bar'
import { MENTIONED_ITEMS } from '@/lib/constants'
import { useCopyToClipboard } from '@/lib/hooks/useCopyToClipboard'
import clsx from 'clsx'
import { CopyIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Twemoji from 'react-twemoji'

const Tag = ({
  text,
  small,
  active,
  onClick,
}: {
  text: string
  small?: boolean
  active?: boolean
  onClick?: () => void
}) => {
  return (
    <span
      className={clsx(
        'select-none rounded-xl border px-2 py-0.5 text-primary/75',
        {
          'text-xs': small,
          'text-sm': !small,
          'bg-primary/5': active,
          'cursor-pointer hover:bg-primary/10': Boolean(onClick),
        },
      )}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

const PopularMentions = () => {
  const t = useTranslations('popular-mentions')
  const [copiedText, copy] = useCopyToClipboard()
  const [query, setQuery] = useState('')

  const [activeTags, setActiveTags] = useState<string[]>([])

  const [filteredItems, setFilteredItems] = useState(MENTIONED_ITEMS)

  const recommendedTags = [
    'classic',
    'economic',
    'wolves',
    'only-flag',
    'notext',
    'friend',
  ]

  useEffect(() => {
    if (!query && activeTags.length === 0) {
      setFilteredItems(MENTIONED_ITEMS)
      return
    }

    const filtered = MENTIONED_ITEMS.filter((item) =>
      t(`mention.${item.name}`).toLowerCase().includes(query.toLowerCase()),
    ).filter((item) => activeTags.every((tag) => item.tags.includes(tag)))

    setFilteredItems(filtered)
  }, [activeTags, query, t])

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag))
    } else {
      setActiveTags([...activeTags, tag])
    }
  }

  return (
    <>
      <section className="px-4 py-24">
        <div className="mx-auto max-w-lg space-y-4 pt-12 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">{t('title')}</h1>
          <p className="text-zinc-300">{t('description')}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="space-y-4 pb-12">
          <SearchBar
            showButton={true}
            activeSearch={true}
            onSearch={setQuery}
            initialQuery={query}
            placeholder={t('search-bar-placeholder')}
          />
          <div className="flex flex-wrap items-center justify-center gap-1">
            {recommendedTags.map((tag) => (
              <Tag
                key={tag}
                text={t(`tag.${tag}`)}
                active={activeTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        </div>
        {filteredItems.length === 0 && (
          <div className="flex w-full items-center justify-center py-24 text-center">
            <p className="text-zinc-300">{t('no-results')}</p>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-background p-6 ring-1 ring-secondary transition-all hover:ring hover:ring-primary/30"
            >
              <div>
                <h2 className="mb-1 line-clamp-1 text-lg font-bold">
                  {t(`mention.${item.name}`)}
                </h2>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} small text={t(`tag.${tag}`)} />
                  ))}
                </div>

                <Twemoji
                  options={{
                    className: 'inline h-5 mr-1',
                  }}
                >
                  <p className="line-clamp-4 text-sm">{item.content}</p>
                </Twemoji>
              </div>
              <Button
                variant={'ghost'}
                className="w-fit gap-2 rounded-2xl"
                onClick={() => copy(item.content)}
              >
                <CopyIcon className="h-4 w-4" />
                <span>
                  {copiedText === item.content
                    ? t('copied')
                    : t('click-to-copy')}
                </span>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default PopularMentions
