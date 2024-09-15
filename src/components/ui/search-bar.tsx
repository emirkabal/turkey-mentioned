import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  initialQuery?: string
  className?: string
  buttonPosition?: 'right' | 'end'
  showButton?: boolean
  activeSearch?: boolean
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search...',
  initialQuery = '',
  className = '',
  buttonPosition = 'right',
  showButton = true,
  activeSearch = true,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    if (activeSearch) onSearch(query)
  }, [activeSearch, onSearch, query])

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`mx-auto w-full max-w-md ${className}`}
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full pl-4 ${showButton ? 'pr-10' : 'pr-4'} rounded-full border-primary/20 bg-background/50 py-2 text-sm shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary/50`}
        />
        {showButton && (
          <Button
            type="submit"
            size="icon"
            className={`${buttonPosition === 'right' ? 'absolute right-1' : 'ml-2'} rounded-full bg-transparent p-1 text-primary transition-all duration-300 ease-in-out hover:bg-primary/20`}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        )}
      </div>
    </form>
  )
}
