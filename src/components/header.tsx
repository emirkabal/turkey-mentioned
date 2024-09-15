import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

export default function Header() {
  const routes = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Mentioned',
      href: '/mentioned',
    },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/30 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-center space-x-2">
          {routes.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className="rounded-full px-6 py-2 font-medium text-primary shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-600/40 hover:text-red-400 hover:shadow-md"
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
