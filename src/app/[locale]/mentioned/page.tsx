'use client'

import { Button } from '@/components/ui/button'
import SearchBar from '@/components/ui/search-bar'
import { MENTIONED_ITEMS } from '@/lib/constants'
import { CopyIcon } from 'lucide-react'

const Mentioned = () => {
  return (
    <>
      <section className="pt-24">
        <div className="mx-auto max-w-lg space-y-4 px-4 py-24 text-center">
          <h1 className="text-4xl font-bold">Mentioned</h1>
          <p className="text-zinc-300">
            Find the most mentioned items in the community. Click to copy the
            best mention.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl pb-24">
        <SearchBar
          className="pb-12"
          showButton={true}
          activeSearch={true}
          onSearch={(query) => console.log(query)}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MENTIONED_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex cursor-pointer flex-col justify-between gap-4 rounded-2xl border bg-background p-6 transition-all hover:border-primary/75"
            >
              <div className="space-y-2">
                <h2 className="line-clamp-1 text-lg font-bold">{item.name}</h2>
                <p className="line-clamp-4 text-sm">{item.content}</p>
              </div>
              <Button variant={'ghost'} className="w-fit gap-2 rounded-2xl">
                <CopyIcon className="h-4 w-4" />
                Click to copy
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Mentioned
