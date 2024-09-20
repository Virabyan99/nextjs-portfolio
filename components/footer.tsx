import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <p>
          Next shadcn &copy;{new Date().getFullYear()}. All rights reserved.
        </p>
        <p className='text-xs'>
          Developed by{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary transition-colors hover:text-accent-foreground'
            href='https://www.hamedbahram.io/'
          >
            Studio H
          </Link>
        </p>
      </div>
    </footer>
  )
}
