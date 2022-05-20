import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-day-accent hover:text-day-accent-hover dark:text-night-accent dark:hover:text-night-accent-hover">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
