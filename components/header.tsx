import Link from 'next/link'

import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/20 py-6 backdrop-blur-sm">
      <nav className="container max-w-3xl flex items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            HB
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
            <ThemeToggle/>
        </div>
      </nav>
    </header>
  )
}
